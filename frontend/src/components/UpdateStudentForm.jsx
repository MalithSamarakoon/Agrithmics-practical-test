import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const UpdateStudentForm = ({ existingStudent, onUpdate }) => {
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        fullName: existingStudent.name,
        address: existingStudent.address,
        dateOfBirth: existingStudent.dateOfBirth,
        gender: existingStudent.studentGender,
        email: existingStudent.email,
        phoneNumber: existingStudent.phoneNumber
    });
    console.log("formdta",formData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
        <form className='registration-form' onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input 
                name="name" className='form-input' value={formData.fullName} 
                onChange={handleChange} required 
            />

            <label>Address</label>
            <input 
                name="address" className='form-input' value={formData.address} 
                onChange={handleChange} required 
            />

            <label>Date of Birth</label>
            <input 
                type="date" name="dateOfBirth" className='form-input' 
                value={formData.dateOfBirth} onChange={handleChange} required 
            />

            <label>Gender</label>
            <div className="radio-group">
                <label>
                    <input 
                        type="radio" name="gender" value="Male" 
                        onChange={handleChange} checked={formData.gender === 'Male'} 
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio" name="gender" value="Female" 
                        onChange={handleChange} checked={formData.gender === 'Female'} 
                    /> Female
                </label>
            </div>

            <label>Email</label>
            <input 
                type="email" name="email" className='form-input' 
                value={formData.email} onChange={handleChange} required 
            />

            <label>Telephone</label>
            <input 
                type="tel" name="phoneNumber" className='form-input' 
                value={formData.phoneNumber} onChange={handleChange} required 
            />

            <div className='submit-container' style={{ display: 'flex', gap: '10px' }}>
                <button type='submit' className='btn-primary'>Save Changes</button>
                
                
                <button 
                    type='button' 
                    className='btn-secondary' 
                    onClick={() => navigate('/students')}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default UpdateStudentForm;