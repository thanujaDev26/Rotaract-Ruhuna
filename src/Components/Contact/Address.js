import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Address() {
    return (
        <div className="bg-white-100 py-10 px-6 sm:px-10 lg:px-20">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                <p className="mt-4 text-gray-600">Reach out to us through any of the following ways:</p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-8">
                <div className="flex flex-col items-center">
                    <FaMapMarkerAlt className="text-red-600 text-3xl" />
                    <h4 className="mt-4 text-lg font-semibold text-gray-900">Our Address</h4>
                    <p className="mt-2 text-center text-gray-600">1234 Street Name, City, State, 12345</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaEnvelope className="text-red-600 text-3xl" />
                    <h4 className="mt-4 text-lg font-semibold text-gray-900">Email Us</h4>
                    <p className="mt-2 text-center text-gray-600">contact@rotaractadmin.com</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex space-x-6">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-blue-600 text-2xl" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-blue-400 text-2xl" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-pink-500 text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-blue-700 text-2xl" />
                        </a>
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-gray-900">Follow Us</h4>
                </div>
            </div>
        </div>
    );
}
