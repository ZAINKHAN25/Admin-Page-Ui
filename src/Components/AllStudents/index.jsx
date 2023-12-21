import React from 'react';
import './AllStudents.css';  // Import your CSS file

import allStudents from '../../dummyData/AllStudents.js';

function AllStudents() {
    return (
        <div className='AllStudentsWrapper m-5 p-5'>
            <div className="headingAreaAllStudents d-flex px-3">
                <span style={{ flex: 0.3 }}>S/no:</span>
                <span style={{ flex: 1 }}>Student Name:</span>
                <span style={{ flex: 1 }}>Student Roll Number:</span>
                <span style={{ flex: 1 }}>Student Course Name:</span>
            </div>
            <div className='mapingdivallstudents'>
                {allStudents.map((student, i) => (
                    <div className='d-flex singledivofallstudents px-3' key={i}>
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
