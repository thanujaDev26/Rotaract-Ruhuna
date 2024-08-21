import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Address() {
    return (
        <div className="bg-white-100 py-10 px-6 sm:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-5">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                        <p className="mt-4 text-gray-600 text-sm sm:text-base">Reach out to us through any of the following ways</p>
                    </div>
                    <div className="mt-6 space-y-6 sm:mt-10 sm:space-y-10">
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-red-600 text-3xl" />
                            <h4 className="mt-4 text-lg font-semibold text-gray-900">Our Address</h4>
                            <p className="mt-2 text-sm text-center text-gray-600">A2, Matara, Sri Lanka</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-10">
                            <div className="flex flex-col items-center">
                                <FaEnvelope className="text-red-600 text-3xl" />
                                <h4 className="mt-4 text-lg font-semibold text-gray-900">Email Us</h4>
                                <p className="mt-2 text-sm text-center text-gray-600">contact@rotaractadmin.com</p>
                            </div>
                            <div className="flex flex-col items-center mt-6 sm:mt-0">
                                <FaPhone className="text-red-600 text-3xl" />
                                <h4 className="mt-4 text-lg font-semibold text-gray-900">Call Us</h4>
                                <p className="mt-2 text-sm text-center text-gray-600">+1 234 567 8900</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-6">
                            <div className="flex space-x-6">
                                <a href="https://www.facebook.com/RotaractRuhuna/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-blue-600 text-2xl" />
                                </a>
                                <a href="https://www.instagram.com/rotaract_ruhuna/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-pink-500 text-2xl" />
                                </a>
                                <a href="https://www.linkedin.com/company/rotaract-club-of-university-of-ruhuna/?originalSubdomain=lk" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-blue-700 text-2xl" />
                                </a>
                            </div>
                            <h4 className="mt-4 text-lg font-semibold text-gray-900">Follow Us</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-5 hidden lg:block">
                    <div className="h-full">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.353944455851!2d80.57729191477456!3d5.938250995715048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1718f8fa89941%3A0xc52f57e17477637b!2sUniversity%20of%20Ruhuna!5e0!3m2!1sen!2sus!4v1620975368325!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
