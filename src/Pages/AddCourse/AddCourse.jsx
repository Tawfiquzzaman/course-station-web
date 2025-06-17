import Lottie from "lottie-react";
import React, { useContext } from "react";
import addGroup from "../../assets/animation/addGroup.json";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/Authcontext/AuthContext";
import { Helmet } from "react-helmet";

const AddCourse = () => {
  const { user } = useContext(AuthContext);

  const handleAddCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const courseData = Object.fromEntries(formData.entries());
    courseData.totalSeats = parseInt(courseData.totalSeats);

    if (user?.email) {
      courseData.creatorEmail = user.email;
      courseData.creatorName = user.displayName || "Anonymous";
    } else {
      Swal.fire({
        title: "User not logged in!",
        icon: "error",
      });
      return;
    }

    fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Course Added Successfully!",
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        Swal.fire({
          title: "Something went wrong!",
          icon: "error",
        });
      });
  };

  return (
    <div className="p-10 mt-15 md:p-20 md:mt-10">
      <Helmet>
        <title>Add Course</title>
      </Helmet>
      <h1 className="text-5xl text-center font-bold eduvicfont">
        Fill The Form To Add New Course
      </h1>

      <div className="p-5 md:p-5 bg-[#D1D8BE] rounded-2xl my-10">
        <div className="text-center lg:text-left">
          <div className="w-70 md:w-100 md:mx-auto">
            <Lottie loop={true} animationData={addGroup}></Lottie>
          </div>
        </div>

        <form onSubmit={handleAddCourse}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">Course Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Course Title"
                name="title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">Image URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Image URL"
                name="imageURL"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">
                Course Duration
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Course Duration"
                name="duration"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">Total Seats</label>
              <input
                type="number"
                min="1"
                required
                className="input w-full"
                placeholder="Enter Total Seats"
                name="totalSeats"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">
                Short Description
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Description"
                name="description"
              />
            </fieldset>
          </div>
          <button className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-10 eduvicfont rounded-full w-full">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
