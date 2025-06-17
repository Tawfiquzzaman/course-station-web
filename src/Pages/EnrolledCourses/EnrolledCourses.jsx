import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet";

const EnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://course-station-server.vercel.app/enrollments?email=${user.email}`)
        .then((res) => setEnrollments(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleRemove = (id) => {
    if (window.confirm("Remove this enrollment?")) {
      axios.delete(`https://course-station-server.vercel.app/enrollments/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          setEnrollments((prev) => prev.filter((item) => item._id !== id));
        }
      });
    }
  };

  return (
    <div className="p-5 md:p-10">
      <Helmet>
        <title>Enrolled Courses</title>
      </Helmet>
      <h1 className="text-3xl md:text-5xl text-center font-bold eduvicfont mb-10">
        All Courses Enrolled By{" "}
        <span className="text-red-600 eduvicfont">
          {user?.displayName || "Unknown User"}
        </span>
      </h1>

      {/* Scrollable table wrapper */}
      <div className="overflow-x-auto bg-[#D1D8BE] p-5 rounded-2xl">
        <table className="min-w-[700px] w-full table-auto">
          <thead>
            <tr className="text-left text-sm md:text-base">
              <th className="py-2 px-4">Sl</th>
              <th className="py-2 px-4">Course Banner</th>
              <th className="py-2 px-4">Course Title</th>
              <th className="py-2 px-4">Enrolled Date</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((item, index) => (
              <tr key={item._id} className=" text-sm md:text-base">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  {item.courseBanner ? (
                    <img
                      src={item.courseBanner}
                      alt={item.courseName}
                      className="h-12 w-20 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="py-2 px-4">{item.courseName}</td>
                <td className="py-2 px-4">
                  {new Date(item.enrolledDate).toLocaleDateString()}
                </td>
                <td className="py-2 px-4">
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove Enrollment
                  </button>
                </td>
              </tr>
            ))}
            {enrollments.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  You haven't enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledCourses;
