import React from "react";
import { useLoaderData } from "react-router";
import SingleCourse from "../SingleCourse/SingleCourse";

const AllCourses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);

  return (
    <div className="p-10 md:p-10 lg:p-20">
      <h1 className="text-5xl text-center font-bold eduvicfont">
        All Courses You Can Join Now
      </h1>

      <div className="bg-[#D1D8BE] p-5 rounded-2xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center p-2 md:p-10 mt-10">
        {allCourses.map((course) => (
          <SingleCourse key={course._id} course={course}></SingleCourse>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AllCourses;
