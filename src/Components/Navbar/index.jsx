import React from 'react';
import "./navbar.css";

function Navbar() {
    return (
        <div className='d-flex navbarwrapper'>
            <div className='fw-bold fs-5'>Hello, Zain👋</div>
            <div className='inputareadiv'>
                <div className='inputdivnavbar'>
                    <input type="text" className='inputofnavbar' placeholder='Search a Student' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <img className='imgofnavbar' src="https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg?w=2000" alt="" srcset="" />
            </div>
        </div>
    )
}

export default Navbar;