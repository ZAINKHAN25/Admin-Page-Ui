import React from 'react';
import './Home.css';

import Sidebar from "../../Components/Sidebar/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";

function Home() {
  return (
    <div className="d-flex homeWrapper">
      <Sidebar />
      <div className='navbarofhome'>
        <Navbar />
      </div>
    </div>
  )
}

export default Home;