import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import { useNavigate } from 'react-router-dom';

const StudentListTable = ({ students, onDelete }) => {
    const navigate = useNavigate();

    return (
        <table className="student-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.length > 0 ? (
                    students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.email}</td>
                            <td>{student.phoneNumber}</td>
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