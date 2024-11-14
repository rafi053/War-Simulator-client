import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage'
import NavBar from './components/NavBar/NavBar'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ProtectedRoute from './components/ProtectedRoute'
import IdfDashboard from './components/Idf/IdfDashboard'

const App:FC = () => {
  
  
  
  return (
    <div>
  <NavBar />
  <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/idf/information" element={<IdfDashboard />} />
      
      <Route path="*" element={<LoginPage />} />
    </Routes>
    </div>
  )
}

export default App