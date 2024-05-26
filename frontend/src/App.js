
import React, { Children } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
const isAuth = false;
const user = {
  activated:false,
}
function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<GuestRoute><Home /></GuestRoute>} />
        <Route path="/authenticate" element={<GuestRoute><Authenticate /></GuestRoute>} />
        <Route path="/activate" element={<SemiProtectedRoute><Activate /></SemiProtectedRoute>} />
        <Route path="/rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

const GuestRoute = ({ children }) => {
  const location = useLocation();

  return isAuth ? (
    <Navigate to="/rooms" state={{ from: location }} />
  ) : (
    children
  );
};

const SemiProtectedRoute = ({ children }) => {
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : isAuth && !user.activated ? (
    children
  ) : ( <Navigate to="/rooms" state={{ from: location }} />);
};
const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  return !isAuth ? (
    <Navigate to="/" state={{ from: location }} />
  ) : isAuth && !user.activated ? (
    <Navigate to="/activate" state={{ from: location }} />
  ) : (children);
};
export default App;

