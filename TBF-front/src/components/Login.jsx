import React, { useState } from 'react';
import backgroundVideo from '../assets/v4.mp4';
import trainImage from '../assets/train.png';

const Login = ({ onLogin }) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (userID === 'Admin' && password === 'Admin123') {
      onLogin();
    } else {
      setError('Invalid UserID or Password');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-800">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for darkening effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Floating Card */}
      <div
        className="relative flex sm:justify-between bg-white shadow-2xl rounded-xl overflow-hidden mx-6 "
        style={{ width: '100%', maxWidth: '950px', height: 'auto', maxHeight: '500px' }}
      >
        {/* Left Side - Form Section */}
        <div className="flex flex-col justify-center p-12 w-full sm:w-1/2">
          <h2 className="text-lg font-bold mb-8 text-center sm:text-left">LOGIN</h2>
          {error && (
            <p className="text-red-500 mb-4 text-center">{error}</p>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-md text-gray-700 mb-2">UserID</label>
              <input
                type="text"
                className="w-full text-md px-4 py-3 border rounded-md focus:outline-none hover:border-customColor-light"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-md text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full text-md px-4 py-3 border rounded-md focus:outline-none hover:border-customColor-light hover:transition duration-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customColor-loginsubmitlight text-white py-3 rounded-md focus:outline-none hover:bg-customColor-loginsubmitdark hover:scale-110 hover:transition duration-800"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Train Image Section (Hidden on Mobile) */}
        {/* <div className="w-1/2 hidden sm:block">
          <img
            src={trainImage}
            alt="Train"
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
