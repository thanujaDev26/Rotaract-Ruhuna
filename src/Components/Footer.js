import React from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-center w-full bg-white">
            <div className="relative p-1">
                <button
                    onClick={scrollToTop}
                    className="absolute top-[-1.5rem] left-1/2 transform -translate-x-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                >
                    <ArrowUpIcon className="h-5 w-5 transform rotate-270" />
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
