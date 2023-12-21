import React from 'react';
import "./GetCourses.css";

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AllCourses from "../../Components/AllCourses/index.jsx";

function GetCourses() {
  return (
    <div className="d-flex GetCoursesWrapper">
      <Sidebar currentPage={"See Courses"} />
      <div className='navbarofGetCourses'>
        <Navbar />
        <h2 className='text-center' style={{color: "#0873b9"}}>All Courses</h2>
        <AllCourses />
      </div>
    </div>
  )
}

export default GetCourses;