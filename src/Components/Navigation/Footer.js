import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../App.css';

// Define your background image URL
const backgroundImageUrl = '/path/to/your/background/image.jpg';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-center w-full bg-white" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="relative p-1">
                <button onClick={scrollToTop}>
                    <i className="arrow up"></i>
                </button>
            </div>
            <div className="text-center p-3 text-black bg-transparent">
                © 2024 Rotaract Club of
                <strong>
                    <a
                        className="text-black ml-1"
                        href="https://ruh.ac.lk/index.php/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        University of Ruhuna.
                    </a>
                </strong>
                All Rights Reserved.
            </div>
            <div className="icons-container">
                <div className="flex justify-center items-center p-3 text-black bg-transparent">
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com/RotaractRuhuna/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-blue-600 text-2xl"/>
                        </a>
                        <a href="https://www.instagram.com/rotaract_ruhuna/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-pink-500 text-2xl"/>
                        </a>
                        <a href="https://www.linkedin.com/company/rotaract-club-of-university-of-ruhuna/?originalSubdomain=lk" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-blue-700 text-2xl"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
