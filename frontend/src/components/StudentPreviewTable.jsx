import React from 'react'

const StudentPreviewTable = ({ studentList = [] }) => {
    return (
        <table className='student-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Telephone</th>
                 </tr>
            </thead>
            <tbody>
                {studentList.length > 0 ? (
                    studentList.map((student, index) => (
                        <tr key={index}>
                            <td>{student.fullName}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.email}</td>
                            <td>{student.phoneNumber}</td>
                            
                        </tr>
                    ))
                ) : (
                    
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center', color: '#999', padding: '10px' }}>
                            
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
  
}

export default StudentPreviewTable