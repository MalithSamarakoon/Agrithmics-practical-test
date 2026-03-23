import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

const StudentListTable = ({ students, onDelete }) => {
    const navigate = useNavigate();

    return (
        <table className="student-table">
            <thead>
                <tr>
                    <th className="text-left">Name</th>
                    <th className="text-left">Date of Birth</th>
                    <th className="text-left">Email</th>
                    <th className="text-left">Telephone</th>
                    <th className="text-left">Action</th>
                </tr>
            </thead>
            <tbody>
                {students.length > 0 ? (
                    students.map((student) => (
                        <tr key={student.id}>
                            <td className="text-left">{student.name}</td>
                            <td className="text-left">{student.dateOfBirth}</td>
                            <td className="text-left">{student.email}</td>
                            <td className="text-left">{student.phoneNumber}</td>
                            <td className="action-buttons">
                                
                                <FiEdit 
                                    className="edit-icon" 
                                    onClick={() => navigate(`/update/${student.id}`)} 
                                    title="Edit Student"
                                />
                                
                                
                                <FiTrash2 
                                    className="delete-icon" 
                                    onClick={() => onDelete(student.id)} 
                                    title="Delete Student"
                                />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        
                        <td colSpan="6" style={{ textAlign: 'center', padding: '20px' }}>
                            No students found.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default StudentListTable;