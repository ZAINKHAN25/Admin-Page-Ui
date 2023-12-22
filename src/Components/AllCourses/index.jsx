import React from 'react';
import './AllCourses.css';

import AllCourse from '../../dummyData/AllCourses.js';

function AllCourses() {
    return (
        <div className='AllCoursesWrapper m-5 p-5'>

            {/* Modal */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Web And Mobile App Batch 12</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>Couse Name: <b>Web and App</b></div>
                            <div>Course Batch Number: <b>12</b></div>
                            <div>Enrolled Students:  <b> 5000+</b></div>
                            <div>Course Days: <b>Monday, Wednesday, Friday</b></div>
                            <div>Course Timing: <b>4:00 PM</b></div>
                            <div>Course Short Name: <b>WMA</b></div>
                            <div>Enrollement Last Time: <b>1/1/2024</b></div>
                            <div>Course Teacher Name: <b>Muhammad Sufiyan</b></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="headingAreaAllCourses d-flex px-3">
                <span style={{ flex: 1 }}>Sir Name:</span>
                <span style={{ flex: 1 }}>Course Name</span>
                <span style={{ flex: 1 }}>Course Timing:</span>
                <span style={{ flex: 1 }}>Course Days:</span>
            </div>
            <div className='mapingdivAllCourses'>
                {AllCourse.map((course) => (
                    <div className='d-flex singledivofAllCourses px-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={course.id}>
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
