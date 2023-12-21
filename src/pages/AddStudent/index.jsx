import React from 'react';
import './AddStudent.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AddStudentForm from "../../Components/AddStudent/index.jsx";

function AddStudent() {
  return (
    <div className="d-flex AddStudentWrapper">
      <Sidebar currentPage={"Add Student"} />
      <div className='navbarofAddStudent'>
        <Navbar />
        <h2 className='text-center' style={{ color: "#0873b9" }}>Add Student</h2>
        <AddStudentForm />
      </div>
    </div>
  )
}

export default AddStudent;