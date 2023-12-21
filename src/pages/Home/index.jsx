import React from 'react';
import './Home.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import AllStudents from "../../Components/AllStudents/index.jsx";

function Home() {
  return (
    <div className="d-flex homeWrapper">
      <Sidebar currentPage={"See Students"} />
      <div className='navbarofhome'>
        <Navbar />
        <AllStudents />
      </div>
    </div>
  )
}

export default Home;