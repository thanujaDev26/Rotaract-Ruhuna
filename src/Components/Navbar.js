import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import './components.css'


export default function Navbar(props) {
    //let [isSignClicked, setIsSignedClicked] = useState(false);



    let setSignButton = () =>{
        // setIsSignedClicked(true);
        props.value(true)
    }
    let setSignButton2 = () =>{
        // setIsSignedClicked(true);
        props.value(true)
    }

    //

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="container">
            <div className="bg-white navbar">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1"/>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12 justify-center lg:justify-start">
                            {/*className="text-sm font-semibold leading-6 text-gray-900"*/}
                            <NavLink to='/' className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Home
                            </NavLink>
                            <NavLink to='/about-us' className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                RACRUH
                            </NavLink>
                            <NavLink to='/avenues' className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Avenues
                            </NavLink>
                            <NavLink to='/blogs' className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Blogs
                            </NavLink>
                            <NavLink to='/contact-us' className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                Contact us
                            </NavLink>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <NavLink to="/explore" className="text-sm font-semibold leading-6 text-gray-900 border border-blue-900"
                                     style={{padding:'10px',borderRadius:'20px'}}>
                                Explore {/*Explore  <span aria-hidden="true">&rarr;</span>*/}
                            </NavLink>
                        </div>
                    </nav>
                    <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50"/>    {/**/}
                        <DialogPanel
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">

                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <NavLink to='/'
                                                 className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                        >
                                            Home
                                        </NavLink>
                                        <NavLink to='/about-us'
                                                 className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                        >
                                            RACRUH
                                        </NavLink>
                                        <NavLink to='/avenues'
                                                 className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                        >
                                            Avenues
                                        </NavLink>
                                        <NavLink to='/blogs'
                                                 className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                        >
                                            Blogs
                                        </NavLink>
                                        <NavLink to='/contact-us'
                                                 className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-lg"
                                        >
                                            Contact us
                                        </NavLink>
                                    </div>
                                    <div className="py-6">
                                        <NavLink


                                            to='/explore'
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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

    )
}
