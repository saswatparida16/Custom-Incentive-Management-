import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';

export default function HomePage (){
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div className="container mt-4" style={{ flex: '1', height: '80vh' }}>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Incentive Management System</h1>
                    <p className="lead">
                        This application helps streamline the calculation and management of incentives for sales performance
                        in your organization. Get started below!
                    </p>
                    <hr className="my-4" />
                    <p className="lead text-center"> {/* Added text-center class here */}
                        <Link className="btn btn-primary btn-lg mr-2" to="/incentive-calculation" role="button">Calculate Incentives</Link>
                        <Link className="btn btn-secondary btn-lg mr-2" to="/admin-form" role="button">Manage Holiday Packages</Link>
                        <Link className="btn btn-info btn-lg" to="/manageemp" role="button">View Employee Profiles</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

