import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar(){
  const { user, logout } = useAuth();
  return (
    <nav className="p-4 border-b">
      <div className="container flex justify-between">
        <div><Link to="/">Job Tracker</Link></div>
        <div>
          {user ? (
            <>
              <span className="mr-4">{user.name}</span>
              <button onClick={logout} className="button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
