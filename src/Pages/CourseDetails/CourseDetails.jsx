import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const { title, imageURL, duration, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleEnroll = () => {
    const enrollment = {
      userEmail: user.email,
      courseBanner: imageURL,
      courseId: _id,
      courseName: title,
      enrolledDate: new Date(),
    };
    console.log(enrollment);

    axios
      .post("http://localhost:3000/enrollments", enrollment)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "bottom",
            icon: "success",
            title: "Congratulations!! Enrolled Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            title: "You Already Enrolled",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
            title: "Something Went Wrong!",
            icon: "error",
            draggable: true,
          });
      });
  };

  return (
    <div className="p-10 md:p-10 lg:p-20">
      <div className="card bg-[#D1D8BE] w-150 md:w-200 lg:w-300 shadow-sm mx-auto">
        <figure className="px-10 pt-10">
          <img src={imageURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mt-2">{title}</h2>
          <button className="mt-2 btn btn-soft btn-warning">
            Course Duration : <span className="font-bold">{duration}</span>
          </button>
          <p className="my-5">{description}</p>
          <div className="card-actions">
            <button
              onClick={handleEnroll}
              className="btn  bg-[#819A91] hover:bg-[#FCECDD] mt-3"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
