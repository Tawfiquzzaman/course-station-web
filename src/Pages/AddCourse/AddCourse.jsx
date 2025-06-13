import Lottie from "lottie-react";
import React from "react";
import addGroup from "../../assets/animation/addGroup.json"

const AddCourse = () => {

    const handleAddCourse = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const courseData = Object.fromEntries(formData.entries());
        console.log(courseData);

        //Send data to database
        fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(courseData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })



    }

  return (
    <div className="p-20">
        <h1 className="text-5xl text-center font-bold eduvicfont">Fill The Form To Add New Course</h1>
        
        <div className="p-5 bg-[#D1D8BE] rounded-2xl my-10">
            <div className="text-center lg:text-left">
                  
                  <div className="w-100 mx-auto">
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
            <label className="label eduvicfont font-bold">Course Duration</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Course Duration"
              name="duration"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label eduvicfont font-bold">Short Description</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Description"
              name="description"
            />
          </fieldset>
        </div>
        <button className="btn bg-[#819A91] hover:bg-[#FCECDD] mt-10 eduvicfont rounded-full w-full">Add Course</button>
      </form>
        </div>
    </div>
  );
};

export default AddCourse;
