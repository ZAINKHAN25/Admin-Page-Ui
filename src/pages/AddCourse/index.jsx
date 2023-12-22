import React from 'react';
import './AddCourse.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AddCourseForm from "../../Components/AddCourse/index.jsx";

function AddCourse() {
  return (
    <div className="d-flex AddCourseWrapper">
      <Sidebar currentPage={"Add Course"} />
      <div className='navbarofAddCourse'>
        <Navbar />
        <h2 className='text-center' style={{ color: "#0873b9" }}>Add Course</h2>
        <AddCourseForm />
      </div>
    </div>
  )
}

export default AddCourse;