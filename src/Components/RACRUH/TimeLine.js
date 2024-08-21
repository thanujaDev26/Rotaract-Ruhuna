import React, { useEffect } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaStar, FaRegCalendarAlt } from 'react-icons/fa';
import '../components.css';

import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.JPG';
import CommunityServiceImage from '../../Images/CommunityService.jpg';
import ClubServiceImage from '../../Images/ClubService.jpg';

export default function TimeLine() {
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
            image : InternationalServiceImage,
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
            image: EnvironmentalServiceImage
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
            image: CommunityServiceImage
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
            image: ClubServiceImage
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const mainContent = document.getElementById('main-content');
            const timelineSection = document.getElementById('timeline-section');
            if (window.scrollY > window.innerHeight / 2) {
                mainContent.classList.add('hide');
                timelineSection.classList.add('show');
            } else {
                mainContent.classList.remove('hide');
                timelineSection.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div id="main-content" >
                <div id="timeline-section" className="timeline-container">
                        <VerticalTimeline style={{display: 'block'}}>
                            <div>
                                {timelineData.map((yearData, idx) => (
                                    <VerticalTimelineElement
                                        key={idx}
                                        className="vertical-timeline-element--work"
                                        contentStyle={{background: '#f9f9f9', color: '#333'}}
                                        contentArrowStyle={{borderRight: '2px solid  #9F000F'}}
                                        iconStyle={{background: '#C11F45', color: '#ffffff'}}
                                        icon={<FaRegCalendarAlt/>}
                                        position={window.innerWidth < 768 ? (idx % 2 === 0 ? 'right' : 'left') : idx % 2 === 0 ? 'left' : 'right'}
                                    >
                                        <h3 className="vertical-timeline-element-title text-xl">{yearData.year}</h3>
                                        <div className="timeline-branches">
                                            {yearData.branches.map((branch, bIdx) => (
                                                <div key={bIdx} className="timeline-branch">
                                                    {branch.date && <span className="timeline-date">{branch.date}</span>}
                                                    <h4 className="timeline-title">{branch.title}</h4>
                                                    <p className="timeline-description">{branch.description}</p>
                                                </div>
                                            ))}
                                            {yearData.significantProjects && (
                                                <div className="timeline-significant-projects">
                                                    <h4>Significant Projects:</h4>
                                                    <ul>
                                                        {yearData.significantProjects.map((project, pIdx) => (
                                                            <li key={pIdx}>
                                                                <strong>{project.title}:</strong> {project.description}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {yearData.ongoingProjects && (
                                                <div className="timeline-ongoing-projects">
                                                    <h4>Ongoing Projects:</h4>
                                                    <ul>
                                                        {yearData.ongoingProjects.map((project, pIdx) => (
                                                            <li key={pIdx}>{project}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </VerticalTimelineElement>
                                ))}
                                <div className="timeline-end-icon">
                                    <VerticalTimelineElement
                                        iconStyle={{ background: '#C11F45', color: '#ffffff' }}
                                        icon={<FaStar/>}
                                    />
                                </div>
                            </div>
                        </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}
