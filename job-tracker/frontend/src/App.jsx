import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar from './components/Navbar'

function PrivateRoute({ children }){
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App(){
  return (
    <AuthProvider>
      <Navbar />
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
