import React from 'react';
import { NavLink } from 'react-router';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const links = (
    <>
      <li>
        <NavLink  to='/' className="link link-hover">Home</NavLink>
      </li>
      <li>
        <NavLink to='/allCourses' className="link link-hover">All Courses</NavLink>
      </li>
      <li>
        <NavLink to='/addCourse' className="link link-hover">Add Course</NavLink>
      </li>
      <li>
        <NavLink to='/manageCourses' className="link link-hover">Manage Courses</NavLink>
      </li>
      <li>
        <NavLink to='/myEnrolledCourses' className="link link-hover">Enrolled Courses</NavLink>
      </li>
      <li>
        <NavLink to='' className="link link-hover">Career</NavLink>
      </li>
    </>
  );
    return (
        <footer className="footer sm:footer-horizontal bg-[#dad3fd] text-base-content p-10">
  <aside>
    
     
      <NavLink to='/' className="btn btn-ghost text-xl font-semibold">CoUrse <span className="w-10"><img src="/logo.png" alt="logo" /></span> STATION</NavLink>
    
    <p className='ml-4'>
      Course Station Ltd.
      <br />
      Complete Guideline For Every Learning
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <ul>
        {links}
    </ul>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="flex gap-4 mt-2">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-600 hover:text-blue-800">
      <FaFacebook />
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-800 hover:text-black">
      <FaGithub />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl text-blue-700 hover:text-blue-900">
      <FaLinkedin />
    </a>
  </div>
  </nav>
</footer>
    );
};

export default Footer;