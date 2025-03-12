import React, { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';

import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.JPG';
import CommunityServiceImage from '../../Images/CommunityService.jpg';
import ClubServiceImage from '../../Images/ClubService.jpg';
import {useState} from "react";

export default function TimeLine() {

    const [expandedItem, setExpandedItem] = useState(null);

    const timelineData = [
        {
            year: '2021',
            branches: [
                {
                    title: 'Establishment of the Rotaract Club',
                    date: 'July 13, 2021',
                    description: 'The Rotaract Club of the University of Ruhuna was established.',
                },
                {
                    title: 'Charter of the Rotaract Club',
                    date: 'September 14, 2021',
                    description: 'The club was officially chartered.',
                },
            ],
            images : [InternationalServiceImage,EnvironmentalServiceImage]
        },
        {
            year: '2021 - 2022 Term (Leadership of PP Rtr. Yeshan Sandanayake)',
            branches: [
                {
                    title: 'Crayons',
                    date: 'October 17, 2021',
                    description: 'Celebrated Children\'s Day with a project that allowed children to express their feelings and thoughts through colors and drawings on the Zoom platform.',
                },
                {
                    title: 'Jolly Jamboree',
                    date: 'December 26, 2021',
                    description: 'A Christmas get-together held at Buttercup Restaurant in Maharagama, fostering community spirit with activities and traditional Christmas customs.',
                },
            ],
            images: [EnvironmentalServiceImage, CommunityServiceImage]
        },
        {
            year: '2022 - 2023 Term (Leadership of IPP Rtr. Ishan Madusanka)',
            branches: [
                {
                    title: 'Anamnesis',
                    date: 'October 1, 2022',
                    description: 'Celebrated the first anniversary of the Rotaract Club of the University of Ruhuna with a physical gathering and cake-cutting event.',
                },
                {
                    title: 'Kirulu',
                    description: 'Provided blazers to the initiatory prefect board of Munasinghe Primary School in Monaragala.',
                },
                {
                    title: 'Clause for Cause',
                    description: 'Distributed toys, stationery items, and sweet delights to children at Oba Mama children\'s home and the Shrine of Our Lady, Matara.',
                },
                {
                    title: 'CTopia',
                    description: 'Conducted a mangrove re-plantation program in collaboration with the Society of Oceanography and Marine Geology of FMST.',
                },
                {
                    title: 'EcoKnow',
                    description: 'Promoted environmental awareness through articles, posts, and videos on prevalent environmental issues in Sri Lanka.',
                },
            ],
            significantProjects: [
                {
                    title: 'Eduquor 2.0',
                    description: 'Conducted seminars for students facing ordinary-level examinations in 2023, focusing on Mathematics, English, and Science.',
                },
                {
                    title: 'Swarsha',
                    description: 'A three-phase project including a Shramadana campaign, book donation, street musical performances, and infrastructure donations to a selected rural school.',
                },
                {
                    title: 'SeaTurl',
                    description: 'Focused on marine conservation and plastic usage awareness, with activities including a visit to Induruwa Turtle Conservation Center and a beach clean-up.',
                },
                {
                    title: 'Smart Move',
                    description: 'Provided awareness on table etiquettes and professional behavior through physical sessions.',
                },
                {
                    title: 'Be You',
                    description: 'Hosted by Miss. Michelle Dilhara, aimed at self-discovery and empowerment for members.',
                },
            ],
            images: [CommunityServiceImage, ClubServiceImage]
        },
        {
            year: '2023 - 2024 Term (Leadership of Rtr. Nuhansi Gunawardana)',
            branches: [
                {
                    title: 'Soul Sync',
                    description: 'An international project with Rotaract Club of Dhaka North, Bangladesh, focusing on mental health awareness with professional advice sessions by Dr. Sadia Afrin Shampa and Dr. (Engineer) Ranil Sugathadasa.',
                },
                {
                    title: 'Life after Life',
                    description: 'Raised awareness about organ donation in collaboration with the Interact Club of Asian Grammar School, Matara. Featured sessions led by Mr. Nandana Premakumara and a representative from YMBA Matara.',
                },
                {
                    title: 'MOM Project',
                    description: 'Focused on the health, safety, and community well-being of pregnant mothers from Rasandeniya & Dewinuwara Grama Niladhari Kottasa.',
                },
            ],
            ongoingProjects: [
                'Eduquar 3.0',
                'Brand Me',
                'SeaTurl 2.0',
            ],
            images: [ClubServiceImage,InternationalServiceImage]
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const timelineElements = document.querySelectorAll('.vertical-timeline-element');
            timelineElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    el.classList.remove('genie-in');
                    el.classList.add('genie-out');
                } else {
                    el.classList.remove('genie-out');
                    el.classList.add('genie-in');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleExpand = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };


    return (
        <div>
            <div className="tim-container" style={{overflowX: 'hidden'}}>
                <div className="vertical-line " style={{border: '3px solid black'}}></div>
                {timelineData.map((item, index) => (
                    <div key={index} className="box-container" style={{
                        display: 'flex',
                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        alignItems: 'center'
                    }}>

                        {/* Text Content */}
                        <div className="box" style={{flex: 1,border: '1px solid black', margin: '1rem', backgroundColor: 'black'}}>
                            <div className="info">
                                <h2 className="text-2xl lg:text-2xl md:text-lg sm:text-xs" style={{
                                    borderRadius: '25px',
                                    textAlign: 'center',
                                    backgroundColor: 'whitesmoke',
                                    padding: '1vh',
                                }}>
                                    {item.year}
                                </h2>
                                {item.branches.map((branch, branchIndex) => (
                                    <div key={branchIndex}>
                                        <b><h3>{branchIndex + 1} - {branch.title}</h3></b>
                                        <p>{branch.date ? `${branch.date}: ` : ''}{branch.description}</p>
                                    </div>
                                ))}

                                <button
                                    className="mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:shadow-lg"
                                    onClick={() => toggleExpand(index)}>
                                    {expandedItem === index ? 'Show less' : 'Learn more...'}
                                </button>


                                {expandedItem === index && (
                                    <div className="additional-content">
                                        {item.significantProjects && item.significantProjects.map((project, projectIndex) => (
                                            <div key={projectIndex}>
                                                <b><h4>Project {projectIndex + 1} - {project.title}</h4></b>
                                                <p>{project.description}</p>
                                            </div>
                                        ))}
                                        {item.ongoingProjects && item.ongoingProjects.length > 0 && (
                                            <div>
                                                <h4>Ongoing Projects</h4>
                                                <ul>
                                                    {item.ongoingProjects.map((project, projectIndex) => (
                                                        <li key={projectIndex}>{project}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="box hidden lg:block" style={{flex: 1}}>
                            <img src={item.images[0]} alt={`Image for ${item.year}`}
                                 style={{
                                     width: '100%',
                                     height: 'auto',
                                     objectFit: 'cover',
                                     border: '1px solid black'
                                 }}/>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
