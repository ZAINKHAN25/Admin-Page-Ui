import React from 'react';
import './allAttendance.css';  // Import your CSS file

import attendance from '../../dummyData/ViewAttendance.js';

function viewAttendance() {
    return (
        <div className='viewAttendanceWrapper m-5 p-5'>
            {/* Modal */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Zain's Data</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div style={{ width: "100%" }}>
                                Student Img:
                                <div style={{ width: "100%", display: "flex", justifyContent: 'center' }}>
                                    <img src="https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg?w=2000" alt="" className='seestudentmodalimg' srcset="" />
                                </div>
                            </div>
                            <div>Student Name: <b>Zain</b></div>
                            <div>Student id: <b>WMA-130</b></div>
                            <div>Student Course: <b>Web and Mobile</b></div>
                            <div>Student Comes At:
                                <b>
                                    {
                                        Array.from(
                                            ["04:00 PM", "04:15 PM", "03:55 PM"],
                                            ((x, i) => {
                                                return (<span key={i}> {x}{i === 2 ? "" : ","} </span>)
                                            })
                                        )
                                    }
                                </b>
                            </div>
                            <div>Student Leaves At:
                                <b>
                                    {
                                        Array.from(
                                            ["06:00 PM", "06:03 PM", "06:00 PM"],
                                            ((x, i) => {
                                                return (<span key={i}> {x}{i === 2 ? "" : ","} </span>)
                                            })
                                        )
                                    }
                                </b>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="headingAreaviewAttendance d-flex px-3">
                <span style={{ flex: 0.5 }}>S/no:</span>
                <span style={{ flex: 1 }}>Student Name:</span>
                <span style={{ flex: 1 }}>Student In At:</span>
                <span style={{ flex: 1 }}>Student Out At:</span>
                <span style={{ flex: 1 }}>Student Roll Number:</span>
                <span style={{ flex: 1 }}>Student Course Name:</span>
            </div>
            <div className='mapingdivviewAttendance'>
                {attendance.map((student, i) => (
                    <div className='d-flex singledivofviewAttendance px-3' data-bs-toggle="modal" data-bs-target="#staticBackdrop" key={i}>
                        <span style={{ flex: 0.5 }}>{i + 1}</span>
                        <span style={{ flex: 1 }}>{student.StudentName}</span>
                        <span style={{ flex: 1 }}>{student.StudentInAt}</span>
                        <span style={{ flex: 1 }}>{student.StutdentOutAt}</span>
                        <span style={{ flex: 1 }}>{student.StudentRollNumber}</span>
                        <span style={{ flex: 1 }}>{student.StudentCourseName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default viewAttendance;
