import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Sidebar = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="sidebar">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li>
          <button
            onClick={handleLogout}
            className="bg-primary-color text-neutral-color px-4 py-2 rounded hover:bg-primary-hover"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
