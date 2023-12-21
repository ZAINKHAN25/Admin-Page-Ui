import React from 'react';
import "./GetCourses.css";

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AllCourses from "../../Components/AllCourses/index.jsx";

function GetCourses() {
  return (
    <div className="d-flex GetCoursesWrapper">
      <Sidebar currentPage={"See Students"} />
      <div className='navbarofGetCourses'>
        <Navbar />
        <AllCourses />
      </div>
    </div>
  )
}

export default GetCourses;