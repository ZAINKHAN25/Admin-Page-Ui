import React from 'react';
import './ViewAttendence.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import ViewAttendance from "../../Components/ViewAttendance/index.jsx";

function Home() {
  return (
    <div className="d-flex homeWrapper">
      <Sidebar currentPage={"See Attendence"} />
      <div className='navbarofhome'>
        <Navbar />
        <ViewAttendance />
      </div>
    </div>
  )
}

export default Home;