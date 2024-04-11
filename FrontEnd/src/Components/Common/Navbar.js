import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/">Incentive Management System</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/admin-login">Login</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/admin-form">Signup</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/incentive-calculation">Calculate Incentives</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/holidaypackage">Manage Holiday Packages</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/manageemp">View Employee Profiles</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
