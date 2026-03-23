import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UpdateStudentForm from '../components/UpdateStudentForm';

const UpdatePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null); 
    console.log(student);

    
    useEffect(() => {
        fetch(`http://localhost:5135/api/students/${id}`)
            .then(res => res.json())
            .then(data => setStudent(data))
            .catch(err => console.error(err));
    }, [id]);

    
    const handleSave = async (updatedData) => {
        const response = await fetch(`http://localhost:5135/api/students/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData)
        });

        if (response.ok) {
            alert("Student updated successfully!");
            navigate('/students');
        }
    };

    return (
        <div className='registration-container'>
            <div className='registration-card'>
                <div className='registration-header'>
                    <h2>Edit Student Details</h2>
                </div>

                
                {student ? (
                    <UpdateStudentForm existingStudent={student} onUpdate={handleSave} />
                ) : (
                    <p style={{ textAlign: 'center' }}>Loading student data...</p>
                )}
            </div>
        </div>
    );
};

export default UpdatePage;