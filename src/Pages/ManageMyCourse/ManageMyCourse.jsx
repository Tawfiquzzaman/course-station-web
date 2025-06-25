import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import axios from "axios";
import SingleCourse from "../SingleCourse/SingleCourse";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const ManageMyCourse = () => {
  const { user } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  const handleEdit = (_id) => {
    console.log(_id);
  }


  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Delete operation

        fetch(`https://course-station-server.vercel.app/courses/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: `The Course ${user.title} has been Deleted!`,
                icon: "success",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://course-station-server.vercel.app/courses?creatorEmail=${user.email}`
        )
        .then((res) => {
          setMyCourses(res.data);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    }
  }, [user]);

  return (
    <div className="p-5 md:p-25">
      <Helmet>
        <title>Manage Courses</title>
      </Helmet>
      <h1 className="text-5xl text-center font-bold eduvicfont mb-10">
        All Courses Added By{" "}
        <span className="text-red-600 eduvicfont">
          {user?.displayName || "Unknown User"}
        </span>
      </h1>

      {myCourses.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#D1D8BE] rounded-2xl p-5">
            <thead>
              <tr className="bg-gray-300 text-gray-700">
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Duration</th>
                <th className="py-3 px-6 text-left hidden lg:table-cell">
                  Description
                </th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myCourses.map((course) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6">{course.title}</td>
                  <td className="py-3 px-6">{course.duration}</td>
                  <td className="py-3 px-6 hidden lg:table-cell">
                    {course.description}
                  </td>
                  <td className="py-3 px-6">
                    {course.imageURL ? (
                      <img
                        src={course.imageURL}
                        alt={course.title}
                        className="h-12 w-20 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="py-3 px-6 space-x-4 flex items-center">
                    <Link to= {`/updateCourse/${course._id}`}>
                    <FiEdit
                      onClick={() => handleEdit(course._id)}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer text-xl"
                      title="Edit"
                      
                    /></Link>
                    <FiTrash2
                      onClick={() => handleDelete(course._id)}
                      className="text-red-600 hover:text-red-800 cursor-pointer text-xl"
                      title="Delete"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No courses found.</p>
      )}
    </div>
  );
};

export default ManageMyCourse;
