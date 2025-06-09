import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="link link-hover">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="link link-hover">
          All Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="link link-hover">
          Add Course
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="link link-hover">
          My Courses
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="link link-hover">
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink to="" className="link link-hover">
          Career
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-[#C4D9FF] shadow-sm">
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
              {links}
            </ul>
          </div>

          <NavLink to="/" className="btn btn-ghost text-xl font-semibold lg:ml-10 md:ml-5">
            CoUrse{" "}
            <span className="w-10">
              <img src="/public/logo.png" alt="logo" />
            </span>{" "}
            STATION
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to='/login' className="btn font-semibold bg-[#FF8282] rounded-full">Sign In</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
