import React from 'react';
import '../../App.css'
// import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <footer className="text-center w-full bg-white">
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
