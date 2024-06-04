import React from 'react';
import { useNavigate } from 'react-router-dom';

// Demo images from the web
const executiveBoardImage = 'https://source.unsplash.com/random/800x600?executive';
const directorBoardImage = 'https://source.unsplash.com/random/800x600?director';
const memberRegistrationImage = 'https://source.unsplash.com/random/800x600?member';
const organizingCommitteeImage = 'https://source.unsplash.com/random/800x600?committee';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 p-6 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 gap-8 sm:hidden">
                    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-72">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Executive Board</h1>
                            <button onClick={() => navigate('/explore/executive-board')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={executiveBoardImage} alt="Executive Board" className="w-full h-auto sm:w-24 sm:h-24 object-cover mask-image" />
                    </div>
                    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-72">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Director Board</h1>
                            <button onClick={() => navigate('/explore/director-board')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={directorBoardImage} alt="Director Board" className="w-full h-auto sm:w-24 sm:h-24 object-cover mask-image" />
                    </div>
                    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-72">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Member Registration</h1>
                            <button onClick={() => navigate('/explore/member-application')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={memberRegistrationImage} alt="Member Registration" className="w-full h-auto sm:w-24 sm:h-24 object-cover mask-image" />
                    </div>
                    <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden h-72">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Organizing Committee</h1>
                            <button onClick={() => navigate('/explore/organizing-committee')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={organizingCommitteeImage} alt="Organizing Committee" className="w-full h-auto sm:w-24 sm:h-24 object-cover mask-image" />
                    </div>
                </div>

                {/* Horizontal scrolling container for medium and larger devices */}
                <div className="hidden sm:flex overflow-x-auto space-x-8">
                    <div className="flex-none sm:w-1/3 h-72 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Executive Board</h1>
                            <button onClick={() => navigate('/explore/executive-board')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={executiveBoardImage} alt="Executive Board" className="w-full h-auto object-cover mask-image" />
                    </div>
                    <div className="flex-none sm:w-1/3 h-72 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Director Board</h1>
                            <button onClick={() => navigate('/explore/director-board')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={directorBoardImage} alt="Director Board" className="w-full h-auto object-cover mask-image" />
                    </div>
                    <div className="flex-none sm:w-1/3 h-72 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Member Registration</h1>
                            <button onClick={() => navigate('/explore/member-application')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={memberRegistrationImage} alt="Member Registration" className="w-full h-auto object-cover mask-image" />
                    </div>
                    <div className="flex-none sm:w-1/3 h-72 bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex-grow">
                            <h1 className="text-2xl font-bold mb-4">Organizing Committee</h1>
                            <button onClick={() => navigate('/explore/organizing-committee')} className="text-sm font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Apply
                            </button>
                        </div>
                        <img src={organizingCommitteeImage} alt="Organizing Committee" className="w-full h-auto object-cover mask-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}
