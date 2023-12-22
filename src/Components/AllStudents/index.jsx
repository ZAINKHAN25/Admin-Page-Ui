import React from 'react';
import './AllStudents.css';  // Import your CSS file

import allStudents from '../../dummyData/AllStudents.js';

function AllStudents() {
    return (
        <div className='AllStudentsWrapper m-5 p-5'>
            {/* modal */}
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
                            <div>Student email: <b>zainarfeen87@gmail.com</b></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="headingAreaAllStudents d-flex px-3">
                <span style={{ flex: 0.3 }}>S/no:</span>
                <span style={{ flex: 1 }}>Student Name:</span>
                <span style={{ flex: 1 }}>Student Roll Number:</span>
                <span style={{ flex: 1 }}>Student Course Name:</span>
            </div>

            <div className='mapingdivallstudents'>
                {allStudents.map((student, i) => (
                    <div data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='d-flex singledivofallstudents px-3' key={i}>
                        <span style={{ flex: 0.3 }}>{i + 1}</span>
                        <span style={{ flex: 1 }}>{student.StudentName}</span>
                        <span style={{ flex: 1 }}>{student.StudentRollNumber}</span>
                        <span style={{ flex: 1 }}>{student.StudentCourseName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllStudents;
