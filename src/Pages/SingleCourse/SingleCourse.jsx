import React from "react";

const SingleCourse = ({course}) => {

    const {imageURL, title} = course;

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure className="">
        <img className="w-40 md:w-60 h-25 md:h-38 p-3 object-cover"
          src={imageURL}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-success rounded-2xl">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
