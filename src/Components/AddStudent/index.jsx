import React from 'react';
import "./AddStudent.css"

function AddStudentForm() {
  return (
    <div className='addStudentform m-5 py-5'>
      <label className="col-form-label">Write student First name and Last name here:</label>
      <div className="input-group">
        <input type="text" placeholder='First Name' aria-label="First name" className="form-control" />
        <input type="text" placeholder='Last Name' aria-label="Last name" className="form-control" />
      </div>
      <label className="col-form-label">Please Select a course:</label>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue={true}>Web and App Batch 12</option>
        <option>Techno Kids Batch 6</option>
        <option>Graphic Designing Batch 2</option>
      </select>
      <label className="col-form-label">Write student Email here:</label>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="Student Email" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      <label className="col-form-label">Write student Password here:</label>
      <div className="">
        <input type="password" placeholder='Student Password' className="form-control" id="inputPassword" />
      </div>
      <label className="col-form-label">Please select a Student Image:</label>
      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile01"/>
      </div>
      <button type="button" className="btn btn-primary">Add Student</button>
    </div>
  )
}

export default AddStudentForm;