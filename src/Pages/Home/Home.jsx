import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SimpleSlider from "../../SimpleSlider";
import axios from "axios";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Home | Course Station</title>
      </Helmet>

      <div className="mt-20 min-h-[70vh] flex items-center">
        <SimpleSlider />
      </div>

      {/* Latest Courses Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center mb-5 font-bold eduvicfont">
          Latest Courses
        </h1>
        <div className="border-b-1 opacity-45 border-dashed mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestCourses.slice(0, 8).map(renderCourseCard)}
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center mb-5 font-bold eduvicfont">
          Popular Courses
        </h1>
        <div className="border-b-1 opacity-45 border-dashed mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCourses.slice(0, 8).map(renderCourseCard)}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center mb-5 font-bold eduvicfont">
          Why Choose Course Station?
        </h1>
        <div className="border-b-1 opacity-45 border-dashed mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry professionals with real-world experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Study at your own pace with lifetime access to all course
              materials.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">
              Verified Certificates
            </h3>
            <p className="text-gray-600">
              Get recognized with certificates after successful course
              completion.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-center mb-5 font-bold eduvicfont">
          How It Works
        </h1>
        <div className="border-b-1 opacity-45 border-dashed mb-5"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-3 text-[#6C63FF] font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Sign Up & Explore</h3>
            <p className="text-gray-600">
              Create your account and browse hundreds of curated courses.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-3 text-[#6C63FF] font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Enroll & Learn</h3>
            <p className="text-gray-600">
              Choose a course and start learning at your own pace, anytime.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <div className="text-5xl mb-3 text-[#6C63FF] font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
            <p className="text-gray-600">
              Complete the course and receive your certificate of completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
