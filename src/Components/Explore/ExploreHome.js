import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components.css';

// Demo images from the web
const executiveBoardImage = 'https://source.unsplash.com/random/800x600?executive';
const directorBoardImage = 'https://source.unsplash.com/random/800x600?director';
const memberRegistrationImage = 'https://source.unsplash.com/random/800x600?member';
const organizingCommitteeImage = 'https://source.unsplash.com/random/800x600?committee';

// Secondary images for hover effect
const executiveBoardHoverImage = 'https://source.unsplash.com/random/800x600?business';
const directorBoardHoverImage = 'https://source.unsplash.com/random/800x600?leadership';
const memberRegistrationHoverImage = 'https://source.unsplash.com/random/800x600?community';
const organizingCommitteeHoverImage = 'https://source.unsplash.com/random/800x600?teamwork';

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-6 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {renderCard('Executive Board', executiveBoardImage, executiveBoardHoverImage, '/explore/executive-board', navigate)}
                        {renderCard('Director Board', directorBoardImage, directorBoardHoverImage, '/explore/director-board', navigate)}
                        {renderCard('Member Registration', memberRegistrationImage, memberRegistrationHoverImage, '/explore/member-application', navigate)}
                        {renderCard('Organizing Committee', organizingCommitteeImage, organizingCommitteeHoverImage, '/explore/organizing-committee', navigate)}
                    </div>
                </div>
            </div>
        </div>
    );
}

function renderCard(title, image, hoverImage, link, navigate) {
    return (
        <div className="relative group bg-white shadow-lg rounded-lg overflow-hidden aspect-w-1 aspect-h-1 flex items-center justify-center">
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-end z-10 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-100">
                <h1 className="text-2xl font-bold mb-4 text-white">{title}</h1>
                <button onClick={() => navigate(link)}
                        className="text-sm font-semibold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                    Apply
                </button>
            </div>
            <img src={image} alt={title}
                 className="w-full h-full object-cover transition-opacity duration-300 ease-in-out lg:group-hover:opacity-0"/>
            <img src={hoverImage} alt={`${title} Hover`}
                 className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out lg:group-hover:opacity-100"/>
        </div>
    );
}
