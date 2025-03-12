import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import '../components.css';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (

        <div className="bg-white shadow-md">
            <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
                {/* Left Side - Logo */}
                <NavLink to="/">
                    <img className="h-12" src={require('../../Images/RACRUH Logo Cranberry.png')} alt="RACRUH Logo" />
                </NavLink>

                {/* Center - Navigation Links */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <NavLink to="/" className="text-base font-semibold text-rac-gray-900 hover:text-red-500">Home</NavLink>
                    <NavLink to="/about-us" className="text-base font-semibold text-rac-gray-900 hover:text-red-500">RACRUH</NavLink>
                    <NavLink to="/avenues" className="text-base font-semibold text-rac-gray-900 hover:text-red-500">Avenues</NavLink>
                    <NavLink to="/blog" className="text-base font-semibold text-rac-gray-900 hover:text-red-500">Blog</NavLink>
                    <NavLink to="/contact-us" className="text-base font-semibold text-rac-gray-900 hover:text-red-500">Contact Us</NavLink>
                </div>

                {/* Right Side - Explore Button */}
                <div className="hidden lg:flex">
                    <NavLink to="/explore" className="text-base font-semibold text-rac-gray-900 hover:text-red-500">Explore →</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button type="button" className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <button type="button" className="p-2 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 space-y-4">
                        <NavLink to="/" className="block text-base font-semibold text-rac-gray-900" onClick={handleNavLinkClick}>Home</NavLink>
                        <NavLink to="/about-us" className="block text-base font-semibold text-rac-gray-900" onClick={handleNavLinkClick}>RACRUH</NavLink>
                        <NavLink to="/avenues" className="block text-base font-semibold text-rac-gray-900" onClick={handleNavLinkClick}>Avenues</NavLink>
                        <NavLink to="/blog" className="block text-base font-semibold text-rac-gray-900" onClick={handleNavLinkClick}>Blog</NavLink>
                        <NavLink to="/contact-us" className="block text-base font-semibold text-rac-gray-900" onClick={handleNavLinkClick}>Contact Us</NavLink>
                        <NavLink to="/explore" className="block text-base font-semibold text-rac-gray-900" onClick={handleNavLinkClick}>Explore</NavLink>
                    </div>
                </DialogPanel>
            </Dialog>

        </div>
    );
}
