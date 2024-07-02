import React, { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import '../components.css';

export default function Navbar(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="container">
            <NavLink to="/">
            <img className="h-12 flex items-start justify-between mx-5 mt-5" src={require('../../Images/RACRUH Logo Cranberry.png')} alt="" />
            </NavLink>
            <div className="bg-white navbar">
                <header className="absolute inset-x-0 top-10">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1" />
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12 justify-center lg:justify-start">
                            <NavLink to="/" className="text-base 2xl:text-xl font-semibold leading-6 text-gray-900 hover:text-pink focus:text-pink">
                                Home
                            </NavLink>
                            <NavLink to="/about-us" className="text-base 2xl:text-xl  font-semibold leading-6 text-gray-900 hover:text-pink focus:text-pink">
                                RACRUH
                            </NavLink>
                            <NavLink to="/avenues" className="text-base 2xl:text-xl font-semibold leading-6 text-gray-900 hover:text-pink focus:text-pink">
                                Avenues
                            </NavLink>
                            <NavLink to="/blog" className="text-base 2xl:text-xl font-semibold leading-6 text-gray-900 hover:text-pink focus:text-pink">
                                Blog
                            </NavLink>
                            <NavLink to="/contact-us" className="text-base 2xl:text-xl font-semibold leading-6 text-gray-900 hover:text-pink focus:text-pink">
                                Contact Us
                            </NavLink>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <NavLink to="/explore" className="text-base 2xl:text-xl font-semibold leading-6 text-gray-900 hover:text-pink focus:text-pink">
                                Explore <span aria-hidden="true">&rarr;</span>
                            </NavLink>
                        </div>
                    </nav>
                    <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50 top-0" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <NavLink
                                            to="/"
                                            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                            onClick={handleNavLinkClick}
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink
                                            to="/about-us"
                                            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                            onClick={handleNavLinkClick}
                                        >
                                            RACRUH
                                        </NavLink>
                                        <NavLink
                                            to="/avenues"
                                            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                            onClick={handleNavLinkClick}
                                        >
                                            Avenues
                                        </NavLink>
                                        <NavLink
                                            to="/blog"
                                            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                            onClick={handleNavLinkClick}
                                        >
                                            Blog
                                        </NavLink>
                                        <NavLink
                                            to="/contact-us"
                                            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                            onClick={handleNavLinkClick}
                                        >
                                            Contact Us
                                        </NavLink>
                                    </div>
                                    <div className="py-6">
                                        <NavLink
                                            to="/explore"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={handleNavLinkClick}
                                        >
                                            Explore
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog>
                </header>
            </div>
        </div>
    );
}
