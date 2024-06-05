import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components.css';
import Card from './Card';

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

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="min-h-screen bg-white p-6 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        <Card title="Executive Board" image={executiveBoardImage} hoverImage={executiveBoardHoverImage} link="/explore/executive-board" navigate={navigate} />
                        <Card title="Director Board" image={directorBoardImage} hoverImage={directorBoardHoverImage} link="/explore/director-board" navigate={navigate} />
                        <Card title="Member Registration" image={memberRegistrationImage} hoverImage={memberRegistrationHoverImage} link="/explore/member-application" navigate={navigate} />
                        <Card title="Organizing Committee" image={organizingCommitteeImage} hoverImage={organizingCommitteeHoverImage} link="/explore/organizing-committee" navigate={navigate} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
