import React from 'react'

const StudentPreviewTable = ({ studentList = [] }) => {
    return (
        <table className='student-table'>
            <thead>
                <tr>
                    <th className="text-left">Name</th>
                    <th className="text-left">Date of Birth</th>
                    <th className="text-left">Email</th>
                    <th className="text-left">Telephone</th>
                 </tr>
            </thead>
            <tbody>
                {studentList.length > 0 ? (
                    studentList.map((student, index) => (
                        <tr key={index}>
                            <td className="text-left">{student.fullName}</td>
                            <td className="text-left">{student.dateOfBirth}</td>
                            <td className="text-left">{student.email}</td>
                            <td className="text-left">{student.phoneNumber}</td>
                            
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