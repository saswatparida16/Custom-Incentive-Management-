// In SignUpForm.js

import React, { useReducer } from 'react';
import AdminLogin from './AdminLogin'; // Import the LoginForm component
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';
// Action types
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

// Reducer
const initialState = {
  users: [], // array to store user details
};

const signUpReducer = (state, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload], // add new user to the array
      };
    default:
      return state;
  }
};

// SignUpForm component
export default function AdminForm() {
  const [state, dispatch] = useReducer(signUpReducer, initialState);
  const { users } = state;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = e => {
    e.preventDefault();
    // Create a new user object
    const newUser = {
      name,
      email,
      password,
    };
    dispatch({ type: SIGN_UP_SUCCESS, payload: newUser });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Navbar/>
      <AdminLogin users={users} /> {/* Pass the users array to AdminLogin */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    <Footer/>
    </div>
  );
}
