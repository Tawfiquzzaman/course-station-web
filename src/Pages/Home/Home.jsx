import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SimpleSlider from "../../SimpleSlider";
import axios from "axios";
import { Link } from "react-router";

const Home = () => {
  const [latestCourses, setLatestCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    // Fetch Latest Courses
    axios
      .get("https://course-station-server.vercel.app/courses?latest=true")
      .then((res) => setLatestCourses(res.data))
      .catch((err) => console.error(err));

    // Fetch Popular Courses
    axios
      .get("https://course-station-server.vercel.app/courses?popular=true")
      .then((res) => setPopularCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const renderCourseCard = (course) => (
    <div key={course._id} className="bg-white shadow rounded-xl p-4">
      <img
        src={course.imageURL || "https://via.placeholder.com/300x200"}
        alt={course.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{course.title}</h3>
      <p className="text-sm text-gray-600 mb-1">
        Added on:{" "}
        {course.createdAt
          ? new Date(course.createdAt).toLocaleDateString()
          : "N/A"}
      </p>
      <p className="text-sm text-gray-700 mb-3">
        {course.description?.slice(0, 100)}...
      </p>
      <Link to={`/courseDetails/${course._id}`}>
        <button className="btn btn-success text-black px-4 py-2 rounded">
          Details
        </button>
      </Link>
    </div>
  );

  return (
    <div>
      <SimpleSlider />

      {/* Latest Courses Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center mb-5 font-bold eduvicfont">
          Latest Courses
        </h1>
        <div className="border-b-1 opacity-45 border-dashed mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestCourses.map(renderCourseCard)}
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center mb-5 font-bold eduvicfont">
          Popular Courses
        </h1>
        <div className="border-b-1 opacity-45 border-dashed mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map(renderCourseCard)}
        </div>
      </div>
    </div>
  );
};

export default Home;
