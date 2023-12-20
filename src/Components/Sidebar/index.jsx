import React from 'react';
import "./sidebar.css";
import smitLogo from '../../Images/Smit-logo.png'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate(); // Rename the variable to 'navigate'

    let allsidebardata = [
        {
            sidename: "Add Student",
            addresofside: "/add-student",
            icon: `fa-solid fa-user-plus`
        },
        {
            sidename: "Add Course",
            addresofside: "/add-course",
            icon: `fa-solid fa-book-medical`
        },
        {
            sidename: "Get Students",
            addresofside: "/get-students",
            icon: `fa-solid fa-users`
        },
        {
            sidename: "Get Courses",
            addresofside: "/get-courses",
            icon: `fa-solid fa-book`
        },
        // {
        //     sidename: "Profile Page",
        //     addresofside: "/admin-profile",
        //     icon: `fa-solid fa-address-card`
        // },
    ]

    return (
        <div className='sidebarWrapper'>
            <img src={smitLogo} className='sidebarimg' alt="Smit Logo" />
            <div className='divofsidebardivs'>
                {allsidebardata.map((x, i) => {
                    return (
                        <div key={i} onClick={() => navigate(x.addresofside)} className='singlesidebardiv'>
                            <i className={x.icon}></i>
                            <span className='txtofsidebar'>{x.sidename}</span>
                        </div>
                    )
                })}
            </div>
            <button className='logoutdiv'>Logout</button>
        </div>
    )
}

export default Sidebar;