// LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AdminLogin({ users }) {

  let navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      // Login successful
      setLoginError(false);
      navigate("/holidaypackage");

      // Perform actions after successful login
    } else {
      // Login failed
      setLoginError(true);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          {loginError && <p style={{ color: 'red' }}>Invalid email or password</p>}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
