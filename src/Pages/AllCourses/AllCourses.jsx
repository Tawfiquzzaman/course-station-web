import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import SingleCourse from "../SingleCourse/SingleCourse";
import Loading from "../Loading";
import { Helmet } from "react-helmet";

const AllCourses = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  const [loading, setLoading] = useState(true);

  // Local state for filtered and sorted data
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    setLoading(false);
    setDisplayedCourses(allCourses);
  }, [allCourses]);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = allCourses.filter((course) =>
      course.title.toLowerCase().includes(value)
    );
    applySorting(filtered, sortOption);
  };


// Handle sorting
  const handleSortChange = (e) => {
    const selected = e.target.value;
    setSortOption(selected);
    applySorting(displayedCourses, selected);
  };

  const applySorting = (courses, option) => {
    let sortedCourses = [...courses];

    if (option === "newest") {
      sortedCourses.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (option === "oldest") {
      sortedCourses.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (option === "az") {
      sortedCourses.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === "za") {
      sortedCourses.sort((a, b) => b.title.localeCompare(a.title));
    }

    setDisplayedCourses(sortedCourses);
  };

  if (loading) return <Loading></Loading>;

  return (
   <div className="p-5 md:p-10 lg:p-20 mt-16">
      <Helmet>
        <title>All Courses</title>
      </Helmet>
      <h1 className="text-5xl text-center font-bold eduvicfont">
        All Courses You Can Join Now
      </h1>

      {/* Search and Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8">
        {/* Search */}
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by course title..."
          className="px-4 py-2 w-full md:w-1/2 border bg-amber-50 rounded-md shadow-sm"
        />

        {/* Sort */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="px-4 py-2 border rounded-md shadow-sm  bg-amber-50"
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
          <option value="az">A - Z</option>
          <option value="za">Z - A</option>
        </select>
      </div>

      {/* Courses Display */}
      <div className="bg-[#D1D8BE] p-5 rounded-2xl my-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 justify-center p-2 md:p-10 mt-10">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <SingleCourse key={course._id} course={course} />
            ))
          ) : (
            <p className="text-center col-span-full">No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
