import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/Authcontext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Signed Out User");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const publicLinks = (
    <>
      <li>
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allCourses" className="link link-hover">
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="link link-hover">
          Career
        </NavLink>
      </li>
    </>
  );

  // Links visible only after login (private)
  const privateLinks = (
    <>
      <li>
        <NavLink to="/addCourse" className="link link-hover">
          Add Course
        </NavLink>
      </li>
      <li>
        <NavLink to="/manageCourses" className="link link-hover">
          Manage Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="/myEnrolledCourses" className="link link-hover">
          Enrolled Courses
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50 bg-[#C4D9FF] shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#E8F9FF] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {publicLinks}
              {user && privateLinks}
            </ul>
          </div>

          <NavLink
            to="/"
            className="btn btn-ghost text-sm md:text-lg lg:text-xl font-semibold lg:ml-10 md:ml-5"
          >
            CoUrse{" "}
            <span className="w-6 md:w-8 lg:w-10">
              <img src="/logo.png" alt="logo" />
            </span>{" "}
            STATION
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {publicLinks}
            {user && privateLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-2 mr-4">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Dark light theme toggle button */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="btn btn-sm rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
              >
                {isDark ? "☀ Light" : "🌙 Dark"}
              </button>
              {/* User Profile Picture */}
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 shadow"
                />
              )}

              

              {/* Sign Out Button */}
              <button
                onClick={handleSignOut}
                className="btn font-semibold bg-[#FF8282] rounded-full"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn font-semibold bg-[#FFB823] rounded-full"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
