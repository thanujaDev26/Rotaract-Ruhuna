import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components.css';
import Card from './Card';


import executiveBoardImage from '../../Images/Home/InternationalService.jpg'
import directorBoardImage from '../../Images/Home/EnvironmentalService.JPG';
import memberRegistrationImage from '../../Images/PublicRelations.png';
import organizingCommitteeImage from '../../Images/Home/CommunityService.jpg';

import executiveBoardHoverImage from '../../Images/Home/SportsService.jpg';
import directorBoardHoverImage from '../../Images/Home/CommunityService.jpg';
import memberRegistrationHoverImage from '../../Images/Home/ProfessionalDevelopment.jpg';
import organizingCommitteeHoverImage from '../../Images/Home/InternationalService.jpg';

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
