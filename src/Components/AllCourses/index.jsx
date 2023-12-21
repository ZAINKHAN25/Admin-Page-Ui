import React from 'react';
import './AllCourses.css';

import AllCourse from '../../dummyData/AllCourses.js';

function AllCourses() {
    return (
        <div className='AllCoursesWrapper m-5 p-5'>
            <div className="headingAreaAllCourses d-flex px-3">
                <span style={{ flex: 1 }}>Sir Name:</span>
                <span style={{ flex: 1 }}>Course Name</span>
                <span style={{ flex: 1 }}>Course Timing:</span>
                <span style={{ flex: 1 }}>Course Days:</span>
            </div>
            <div className='mapingdivAllCourses'>
                {AllCourse.map((course) => (
                    <div className='d-flex singledivofAllCourses px-3' key={course.id}>
                        <span style={{ flex: 1 }}>{course.SirName}</span>
                        <span style={{ flex: 1 }}>{course.CourseName}</span>
                        <span style={{ flex: 1 }}>{course.CourseTiming}</span>
                        <span style={{ flex: 1 }}>{course.CourseDays.map((x, i) => (i + 1) === course.CourseDays.length ? (<span>{x}</span>) : (<span>{x}, </span>))}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllCourses;
