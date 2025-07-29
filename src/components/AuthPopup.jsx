// components/AuthPopup.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onClose();
    navigate("/Login");
  };

  const handleSignup = () => {
    onClose();
    navigate("/Signup");
  };

  const handleContinueWithoutLogin = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[var(--black-color)] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--color-white)] p-8 rounded-xl shadow-2xl w-[340px] text-center font-[var(--font-body)] border border-[var(--gray-300)]">

        <h2 className="text-2xl font-semibold mb-6 text-[var(--gray-900)] font-[var(--font-heading)]">
          Welcome to CaseCenter
        </h2>

        <button
          onClick={handleLogin}
          className="w-full bg-[var(--main-color-blue)] text-[var(--color-white)] px-4 py-2 rounded-md mb-3 hover:brightness-110 transition-all duration-200 cursor-pointer"
        >
          Sign In
        </button>

        <button
          onClick={handleSignup}
          className="w-full bg-[var(--blue-900)] text-[var(--color-white)] px-4 py-2 rounded-md mb-3 hover:brightness-110 transition-all duration-200 cursor-pointer"
        >
          Sign Up
        </button>

        <button
          onClick={handleContinueWithoutLogin}
          className="w-full bg-[var(--gray-100)] text-[var(--gray-600)] px-4 py-2 rounded-md hover:bg-[var(--gray-200)] transition-all duration-200 border border-[var(--gray-300)] cursor-pointer"
        >
          Continue without login
        </button>
      </div>
    </div>
  );
};

export default AuthPopup;
