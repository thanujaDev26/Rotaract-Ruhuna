import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Error = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h2 className="error-heading">404 Error - Page Not Found</h2>
                <p className="error-text">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link to="/" className="error-link">
                    Go back to home
                </Link>
            </div>
        </div>
    );
};
export default Error;
