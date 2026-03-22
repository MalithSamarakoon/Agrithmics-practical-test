import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StudentForm from '../components/StudentForm'
import StudentPreviewTable from '../components/StudentPreviewTable'
import '../components/Students.css'

const RegistrationPage = () => {
    const [studentList, setStudentList] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleFinalSubmit = async () =>
    {
        setIsSubmitting(true);
        try {
            const response = await fetch('http://localhost:5135/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify(studentList),
            });

            if (response.ok) {
                alert("All students saved!");
                setStudentList([]);
                navigate('/students');
            }
        } catch (error) {
            console.error("Error saving students:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='registration-container'>
            <div className='registration-card'>
                <div className='registration-header'>
                    <h2>Student Registration</h2>

                    <Link to="/students" className="btn-secondary">
                        View Student List
                    </Link>
                </div>

                    <StudentForm studentList={studentList} setStudentList={setStudentList} />
                   <StudentPreviewTable studentList={studentList} />

                <div className='submit-container'>
                    <button
                        className='btn-primary'
                        onClick={handleFinalSubmit}
                        disabled={isSubmitting || studentList.length === 0} 
                        style={{ opacity: isSubmitting ? 0.7 : 1 }}
                    >
                        {isSubmitting ? 'Saving...' : 'Submit'}
                    </button>
                </div>
             </div>
        </div>
     )
}

export default RegistrationPage