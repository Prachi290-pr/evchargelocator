import React from 'react';
import { auth, provider } from './firebaseConfig'; // Adjust the path as needed
import { signInWithPopup } from 'firebase/auth';
import './styles/Login.css'

const Login = () => {
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User Info:', user); // Access email, name, etc.
        // Redirect to the main page
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error("Error during sign in:", error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Sign in with Google
        </button>
        <div className="flex items-center mt-4">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
        </div>
      </div>
    </div>
  );
};

export default Login;
