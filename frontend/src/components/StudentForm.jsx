import React, { useState } from 'react'

const StudentForm = ({ studentList, setStudentList }) => {

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: ''
  })

  

  const handleChange = (e) => {
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
  }

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
        id: Date.now(),
        fullName: formData.fullName,
        address: formData.address,
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        email: formData.email,
        phoneNumber: formData.phoneNumber
    }
    setStudentList([...studentList, newStudent])
    setFormData({
        fullName: '',
        address: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '' 
    })
  }
  

  return (

    <div>
          <form className='registration-form' action="" method="post" onSubmit={handleAddStudent}>

            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" className='form-input' name="fullName" onChange={handleChange} value={formData.fullName}  required />

            <label htmlFor="address">Address</label>
              <input type="text" id="address" className='form-input' name="address" onChange={handleChange} value={formData.address} required />

            <label htmlFor="dateOfBirth">Date of Birth</label>
              <input type="date" id="dateOfBirth" className='form-input' name="dateOfBirth" onChange={handleChange} value={formData.dateOfBirth} required />

              <label>Gender</label>
              <div className="radio-group">
                  <label>
                      <input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} /> Male
                  </label>
                  <label>
                      <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} /> Female
                  </label>
              </div>

            <label htmlFor="email">Email</label>
              <input type="email" id="email" className='form-input' name="email" onChange={handleChange} value={formData.email} required />

            <label htmlFor="phoneNumber">Telephone</label>
              <input type="tel" id="phoneNumber" className='form-input' name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} required />

            <button type='submit' className='btn-primary'>
                Add
            </button>
        
       </form>

       
    </div>
      
  )
}

export default StudentForm