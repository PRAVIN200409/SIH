import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx'; // Move Footer logic to its own component
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import RULPrediction from './pages/RULPrediction';
import Schedules from './pages/Schedules';
import Chatbot from './pages/Chatbot';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Navbar onLogout={handleLogout} />
            {/* Routes */}
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/rul-prediction" element={<RULPrediction />} />
                <Route path="/schedules" element={<Schedules />} />
                <Route path="/chatbot" element={<Chatbot />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
