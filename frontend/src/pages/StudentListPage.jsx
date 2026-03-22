import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import StudentListTable from '../components/StudentListTable'

const StudentListPage = () => {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchFilteredStudents = async () => {
            try {
                
                const url = `http://localhost:5135/api/students?phoneNumber=${searchTerm}`;

                const response = await fetch(url);
                const data = await response.json();
                setStudents(data); 
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchFilteredStudents();
    }, [searchTerm]); 


    const handleDelete = (id) => {
        
        if (window.confirm("Are you sure you want to delete this student?")) {
            
            
            fetch(`http://localhost:5135/api/students/${id}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                   
                    setStudents(prevStudents => 
                        prevStudents.filter(student => student.id !== id)
                    );
                    alert("Student deleted successfully.");
                } else {
                    alert("Failed to delete the student.");
                }
            })
            .catch(error => console.error("Error deleting student:", error));
        }
    };

    return (
        <div className='registration-container'>
            <div className='registration-card'>
                <div className='registration-header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2>Registered Students</h2>
                    
                    
                    <Link to="/" className="btn-secondary">
                        Back to Registration
                    </Link>
                </div>

                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                <StudentListTable students={students} onDelete={handleDelete}/>
            </div>
        </div>
    );
};

export default StudentListPage