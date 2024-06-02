import React from 'react';
import '../../App.css'
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <footer className="text-center w-full bg-white">
            <div className="flex justify-center items-center space-x-4">
                {/* Facebook */}
                <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/your-linkedin-page" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/your-youtube-channel" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            <div className="relative p-1">
                <button
                    onClick={scrollToTop}>
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

        </footer>
    );
}
