import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegistrationPage from './pages/RegistrationPage'
import StudentListPage from './pages/StudentListPage'
import UpdatePage from './pages/UpdatePage'

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<RegistrationPage />} />
              <Route path="/students" element={<StudentListPage />} />
              <Route path="/update/:id" element={<UpdatePage />} />
          </Routes>
      </Router>
  )
}

export default App
