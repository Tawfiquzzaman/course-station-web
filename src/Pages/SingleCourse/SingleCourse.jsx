import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const SingleCourse = ({course}) => {

    const {imageURL, title, _id} = course;

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <Helmet>
        <title>Course</title>
      </Helmet>
      <figure className="">
        <img className="w-40 md:w-60 h-25 md:h-38 p-3 object-cover"
          src={imageURL}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link to={`/courseDetails/${_id}`}><button className="btn btn-success rounded-2xl">Show Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
