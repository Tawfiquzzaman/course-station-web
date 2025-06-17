import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "../Loading";
import { Helmet } from "react-helmet";

const CourseDetails = () => {
  const { title, imageURL, duration, description, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [checkingEnrollment, setCheckingEnrollment] = useState(true);
  const [seatsLeft, setSeatsLeft] = useState(null);

  useEffect(() => {
    if (!user) {
      setIsEnrolled(false);
      setCheckingEnrollment(false);
      return;
    }

    axios
      .get(
        `http://localhost:3000/enrollments/check?userEmail=${user.email}&courseId=${_id}`
      )
      .then((res) => {
        setIsEnrolled(res.data.enrolled);
      })
      .catch((err) => {
        console.error("Error checking enrollment:", err);
        setIsEnrolled(false);
      })
      .finally(() => setCheckingEnrollment(false));
  }, [user, _id]);

  // Fetch seats left
  useEffect(() => {
    axios
      .get(`http://localhost:3000/courses/${_id}/seats`)
      .then((res) => {
        setSeatsLeft(res.data.seatsLeft);
      })
      .catch((err) => {
        console.error("Failed to load seat count", err);
        setSeatsLeft(0);
      });
  }, [_id, isEnrolled]);

  const handleEnroll = () => {
    const enrollment = {
      userEmail: user.email,
      courseBanner: imageURL,
      courseId: _id,
      courseName: title,
      enrolledDate: new Date(),
    };

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
          setIsEnrolled(true);
        } else {
          Swal.fire({
            title: "You Already Enrolled",
            icon: "error",
            draggable: true,
          });
        }
      })
      .catch((err) => {
        if (
          err.response?.status === 409 &&
          err.response?.data?.message === "No seats left"
        ) {
          Swal.fire({
            title: "No seats left!",
            icon: "error",
            confirmButtonText: "Okay",
          });
        } else {
          Swal.fire({
            title: "Something Went Wrong!",
            icon: "error",
            draggable: true,
          });
        }
      });
  };

  if (checkingEnrollment) return <Loading />;

  return (
    <div className="p-10 md:p-10 lg:p-20">
      <Helmet>
        <title>Course Details</title>
      </Helmet>
      <div className="card bg-[#D1D8BE] mt-10 max-w-xl md:max-w-3xl lg:max-w-4xl shadow-sm mx-auto">
        <figure className="px-10 pt-10">
          <img src={imageURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mt-2">{title}</h2>
          <button className="mt-2 btn btn-soft btn-warning">
            Course Duration : <span className="font-bold">{duration}</span>
          </button>
          <p className="my-5">{description}</p>
          {seatsLeft === 0 ? (
            <p className="text-red-600 font-semibold text-lg mt-4">
              No seats left
            </p>
          ) : (
            <div className="card-actions flex flex-col items-center">
              {seatsLeft !== null && (
                <p className="text-green-700 font-medium mb-2">
                  {seatsLeft} seat{seatsLeft > 1 ? "s" : ""} left
                </p>
              )}
              <button
                onClick={handleEnroll}
                className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-3"
                disabled={!user || isEnrolled || checkingEnrollment}
                title={
                  !user
                    ? "You must be logged in to enroll"
                    : isEnrolled
                    ? "You have already enrolled in this course"
                    : ""
                }
              >
                {isEnrolled
                  ? "Enrolled"
                  : checkingEnrollment
                  ? "Checking..."
                  : "Enroll Now"}
              </button>
            </div>
          )}
          <div className="card-actions">
            <button
              onClick={handleEnroll}
              className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-3"
              disabled={!user || isEnrolled || checkingEnrollment}
              title={
                !user
                  ? "You must be logged in to enroll"
                  : isEnrolled
                  ? "You have already enrolled in this course"
                  : ""
              }
            >
              {isEnrolled
                ? "Enrolled"
                : checkingEnrollment
                ? "Checking..."
                : "Enroll Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
