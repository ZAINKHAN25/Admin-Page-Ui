import React from 'react';
import './allAttendance.css';  // Import your CSS file

import attendance from '../../dummyData/ViewAttendance.js';

function viewAttendance() {
    return (
        <div className='viewAttendanceWrapper m-5 p-5'>
            <div className="headingAreaviewAttendance d-flex px-3">
                <span style={{ flex: 0.5 }}>S/no:</span>
                <span style={{ flex: 1.5 }}>Student Name:</span>
                <span style={{ flex: 1 }}>Student In At:</span>
                <span style={{ flex: 1 }}>Student Out At:</span>
                <span style={{ flex: 1 }}>Student Roll Number:</span>
                <span style={{ flex: 1 }}>Student Course Name:</span>
            </div>
            <div className='mapingdivviewAttendance'>
                {attendance.map((student, i) => (
                    <div className='d-flex singledivofviewAttendance px-3' key={i}>
                        <span style={{ flex: 0.5 }}>{i + 1}</span>
                        <span style={{ flex: 1.5 }}>{student.StudentName}</span>
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
