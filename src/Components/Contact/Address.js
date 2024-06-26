import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Address() {
    return (
        <div className="bg-white-100 py-10 px-6 sm:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 p-5">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                        <p className="mt-4 text-gray-600 text-sm sm:text-base">Reach out to us through any of the following ways:</p>
                    </div>
                    <div className="mt-6 space-y-6 sm:mt-10 sm:space-y-10">
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-red-600 text-3xl" />
                            <h4 className="mt-4 text-lg font-semibold text-gray-900">Our Address</h4>
                            <p className="mt-2 text-sm text-center text-gray-600">1234 Street Name, City, State, 12345</p>
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
                <div className="w-full lg:w-1/2 p-5">
                    <div className="h-full">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.969773360366!2d79.86073231428799!3d6.927078095016385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259207948d55b%3A0xe7a5f4f1a5bcb62!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1614694381624!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
