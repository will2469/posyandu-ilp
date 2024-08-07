// src/components/ProtectedRoute.js

import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebase'; // Adjust the import based on your firebase setup

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
