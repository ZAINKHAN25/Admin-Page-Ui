import React from 'react';
import "./AddCourse.css"

function AddStudentForm() {
    return (
        <div className='addStudentform m-5 py-5'>
            <label className="col-form-label">Write course name here:</label>
            <div className="input-group">
                <input type="text" placeholder='Course Name' aria-label="First name" className="form-control" />
            </div>
            <label className="col-form-label">Write course batch here:</label>
            <div className="input-group">
                <input type="number" placeholder='1' aria-label="First name" className="form-control" />
            </div>
            <label className="col-form-label">Plese select the days here:</label>
            <select className="form-select" aria-label="Default select example">
                <option defaultValue={true}>Monday, Wednesday, Friday</option>
                <option>Tuesday, Thursday, Saturday</option>
                <option>Sunday</option>
            </select>
            <label className="col-form-label">Write teacher name here:</label>
            <div className="input-group">
                <input type="text" placeholder='Course Name' aria-label="First name" className="form-control" />
            </div>
            <label className="col-form-label">Write timing here:</label>
            <div className="input-group">
                <input type="text" placeholder='5:00 PM' aria-label="First name" className="form-control" />
            </div>
            <label className="col-form-label">Write course shortname here:</label>
            <div className="input-group mb-3">
                <input type="text" placeholder='W-M-A' aria-label="First name" className="form-control" />
            </div>
            <button type="button" className="btn btn-primary">Add Student</button>
        </div>
    )
}

export default AddStudentForm;