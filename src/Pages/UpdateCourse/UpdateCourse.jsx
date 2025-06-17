import Lottie from "lottie-react";
import React from "react";
import update from "../../assets/animation/update.json";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const UpdateCourse = () => {
  const { title, imageURL, duration, description, _id, totalSeats } = useLoaderData();

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCourse = Object.fromEntries(formData.entries());
    updatedCourse.totalSeats = parseInt(updatedCourse.totalSeats);
    

    fetch(`http://localhost:3000/courses/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course Info Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-20">
      <Helmet>
        <title>Update Course</title>
      </Helmet>
      <h1 className="text-5xl text-center font-bold eduvicfont">
        Fill The Form To Update Course
      </h1>

      <div className="p-5 bg-[#D1D8BE] rounded-2xl my-10">
        <div className="text-center lg:text-left">
          <div className="w-100 mx-auto">
            <Lottie loop={true} animationData={update}></Lottie>
          </div>
        </div>

        <form onSubmit={handleUpdateCourse}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">Course Title</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Course Title"
                name="title"
                defaultValue={title}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">Image URL</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Image URL"
                name="imageURL"
                defaultValue={imageURL}
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
                defaultValue={duration}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label eduvicfont font-bold">Total Seats</label>
              <input
                type="number"
                className="input w-full"
                placeholder="Enter Total Seats"
                name="totalSeats"
                defaultValue={totalSeats}
                min="1"
                required
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
                defaultValue={description}
              />
            </fieldset>
          </div>
          <button className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-10 eduvicfont rounded-full w-full">
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourse;
