import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Admin = () => {
  const location = useLocation();

  return (
    <div className="flex">
      <Sidebar currentPath={location.pathname} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
