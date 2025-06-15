import React from "react";
import { useLoaderData } from "react-router";

const CourseDetails = () => {
  const { title, imageURL, duration, description, _id } = useLoaderData();

  return (
    <div className="p-10 md:p-10 lg:p-20">
      <div className="card bg-[#D1D8BE] w-150 md:w-200 lg:w-300 shadow-sm mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={imageURL}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mt-2">{title}</h2>
          <button className="mt-2 btn btn-soft btn-warning">Course Duration : <span className="font-bold">{duration}</span></button>
          <p className="my-5">
            {description}
          </p>
          <div className="card-actions">
            <button className="btn  bg-[#819A91] hover:bg-[#FCECDD] mt-3">Enroll Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
