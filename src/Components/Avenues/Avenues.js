import React, {useRef, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Import useNavigate for navigation
import 'intersection-observer';
import '../components.css';

// Importing images
import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.png';
import CommunityServiceImage from '../../Images/CommunityService.png';
import ClubServiceImage from '../../Images/ClubService.png';
import SportsServiceImage from '../../Images/SportsService.png';
import PublicRelationsImage from '../../Images/PublicRelations.png';
import ProfessionalDevelopmentImage from '../../Images/ProfessionalDevelopment.png';

export default function Avenues(props) {
    const sectionsRef = useRef([]);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    useEffect(() => {
        const sections = sectionsRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const services = [
        {
            id: 0,
            imageUrl: InternationalServiceImage,
            avenue: 'International Service Avenue',
            description: 'The International Service Avenue exemplifies global reach, going beyond boundaries to help the international community. Projects in this avenue focus on cultural exchange, facilitating mutual understanding, and engaging in international service projects. By connecting globally, this avenue contributes to positive change on a broader scale.'
        },
        {
            id: 1,
            imageUrl: EnvironmentalServiceImage,
            avenue: 'Environmental Service Avenue',
            description: ''
        },
        {
            id: 2,
            imageUrl: CommunityServiceImage,
            avenue: 'Community Service Avenue',
            description: 'The Community Service Avenue identifies critical societal issues and customizes projects to meet people’s needs, creating a better and happier society regardless of demographic differences to improve the quality of life for the local community or university campuses, involving all or most club members. The Environmental Service Avenue also operates under the Community Service Avenue, providing the opportunity to engage with nature, aiming to establish sustainable initiatives and preserve sensitive ecosystems. This avenue fosters community growth and environmental awareness within the club and society.'
        },
        {
            id: 3,
            imageUrl: ClubServiceImage,
            avenue: 'Club Service Avenue',
            description: 'The Club Service Avenue focuses on the logistical tasks that create an outstanding club experience for both current and newly inducted members. This avenue ensures that our clubs have active, engaged members who can provide service to their communities and attract new members. Under this avenue, the Rotaract Club of the University of Ruhuna organizes activities within our own club, fostering fellowship and leadership development. The Sports and Recreation Service Avenue also operates under the Club Service Avenue, promoting physical well-being, fostering camaraderie, and encouraging an active lifestyle among its members through various sports events, fitness challenges, and recreational activities.'
        },
        {id: 4, imageUrl: SportsServiceImage, avenue: 'Sports Service Avenue', description: ''},
        {
            id: 5,
            imageUrl: PublicRelationsImage,
            avenue: 'Public Relations Avenue',
            description: 'The Public Relations Avenue of the Rotaract Club of the University of Ruhuna is instrumental in shaping the club\'s image and building connections. This avenue raises awareness, promotes initiatives, and collaborates effectively within members of the RACRUHUNA. We leverage top-notch strategies across platforms like WhatsApp, Facebook, Instagram, YouTube, LinkedIn, and TikTok to engage the public and maintain a positive image for the club.'
        },
        {
            id: 6,
            imageUrl: ProfessionalDevelopmentImage,
            avenue: 'Professional Development Avenue',
            description: 'The Professional Development Avenue empowers undergraduate communities to discover and pursue their dream careers, transforming them into qualified professionals with essential skills and competencies. This focus extends beyond individual clubs to include other undergraduate communities in Sri Lanka and beyond.'
        },
    ];

    const [activeContent, setActiveContent] = useState(null);

    const showContent = (contentId) => {
        setActiveContent(contentId);
        console.log(activeContent);
    };

    const handleBack = () => {
        setActiveContent(null);
    };

    return (
        <div className="blogs">
            {activeContent === null ? (
                <>
                    {services.map((service, index) => (
                        <div
                            id={service.id}
                            key={service.id}
                            className="mx-5 sm:mx-10 md:mx-5 lg:mx-5 mb-10 flex flex-col md:flex-row section"
                            ref={(el) => (sectionsRef.current[index] = el)}
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <div
                                        className="bg-slate-800 w-full md:w-1/2 h-96 flex items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                        <img src={service.imageUrl} alt={service.avenue}
                                             className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"/>
                                    </div>
                                    <div
                                        className="bg-white w-full md:w-1/2 h-96 flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-5">
                                        <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                                        <p className="mt-5 text-gray-700">
                                            {service.description}
                                        </p>
                                        <div className="mt-10">
                                            <button
                                                onClick={() => showContent(service.id)}
                                                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                            >
                                                Projects
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="bg-white w-full md:w-1/2 h-96 flex flex-col justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-5">
                                        <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                                        <p className="mt-5 text-gray-700">
                                            {service.description}
                                        </p>
                                        <div className="mt-10">
                                            <button
                                                onClick={() => showContent(service.id)}
                                                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                            >
                                                Projects
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-800 w-full md:w-1/2 h-96 flex items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                                        <img src={service.imageUrl} alt={service.avenue}
                                             className="h-full w-full object-cover rounded-b-xl md:rounded-r-xl md:rounded-bl-none"/>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </>
            ) : (
                services
                    .filter(service => service.id === activeContent)
                    .map((service, index) => (
                        <div
                            id={service.id}
                            key={service.id}
                            className="mx-5 sm:mx-10 md:mx-5 lg:mx-5 mb-10 flex flex-col md:flex-row section"
                            ref={(el) => (sectionsRef.current[index] = el)}
                        >
                            {service.id % 2 === 0 ? (
                                <>
                                    <div
                                        className="bg-slate-800 w-full md:w-1/2 h-96 flex items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                        <img src={service.imageUrl} alt={service.avenue}
                                             className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"/>
                                    </div>
                                    <div
                                        className="bg-white w-full md:w-1/2 h-96 flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-5">
                                        <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                                        <p className="mt-5 text-gray-700">
                                            {service.description}
                                        </p>
                                        <div className="mt-10">

                                            <button onClick={handleBack}
                                                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="bg-white w-full md:w-1/2 h-96 flex flex-col justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-5">
                                        <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                                        <p className="mt-5 text-gray-700">
                                            {service.description}
                                        </p>
                                        <div className="mt-10">

                                            <button onClick={handleBack}
                                                    className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-slate-800 w-full md:w-1/2 h-96 flex items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                                        <img src={service.imageUrl} alt={service.avenue}
                                             className="h-full w-full object-cover rounded-b-xl md:rounded-r-xl md:rounded-bl-none"/>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
            )}
        </div>
    );
}
