import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Sidebar from './Components/Siderbar/Sidebar';
import Login from './Components/Login/Login1';
import Dashboard from './Components/Dashboard/Dashboard';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Helper/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="*" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <div className="home">
                    <Sidebar />
                    <div className="homeContainer">
                      <Home />
                    </div>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
