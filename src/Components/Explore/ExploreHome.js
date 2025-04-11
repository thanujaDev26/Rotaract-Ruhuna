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

    // Set deadlines as timestamps (e.g., new Date('YYYY-MM-DD').getTime()) dapan, backend eka hadaddith meh format eken dapan admin dashboard ekt
    const executiveBoardDeadline = new Date(new Date().setHours(15,30,0)).getTime();
    const memberRegistrationDeadline = new Date('2024-09-25').getTime();
    const directorBoardDeadline = new Date('2025-09-25').getTime();

    return (
        <div>
            <div className="min-h-screen bg-white p-6 relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        <Card
                            title="Executive Board"
                            image={executiveBoardImage}
                            isOpen={true}
                            link="/explore/executive-board"
                            navigate={navigate}
                            deadline={executiveBoardDeadline}
                        />
                        <Card
                            title="Director Board"
                            image={directorBoardImage}
                            isOpen={true}
                            link="/explore/director-board"
                            deadline={directorBoardDeadline}
                            navigate={navigate}
                        />
                        <Card
                            title="Member Registration"
                            image={memberRegistrationImage}
                            isOpen={true}
                            link="/explore/member-application"
                            navigate={navigate}
                            deadline={memberRegistrationDeadline}
                        />
                        <Card
                            title="Organizing Committee"
                            image={organizingCommitteeImage}
                            isOpen={false}
                            link="/explore/organizing-committee"
                            navigate={navigate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
