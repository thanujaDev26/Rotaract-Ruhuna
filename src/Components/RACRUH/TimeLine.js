import React from 'react';
import '../components.css';

export default function TimeLine() {
    const timelineData = [
        {
            year: '2021',
            events: [
                {
                    date: 'July 13, 2021',
                    title: 'Establishment of the Rotaract Club',
                    description: 'The Rotaract Club of the University of Ruhuna was established.',
                },
                {
                    date: 'September 14, 2021',
                    title: 'Charter of the Rotaract Club',
                    description: 'The club was officially chartered.',
                },
            ],
        },
        {
            year: '2021 - 2022 Term (Leadership of PP Rtr. Yeshan Sandanayake)',
            events: [
                {
                    date: 'October 17, 2021',
                    title: 'Crayons',
                    description: 'Celebrated Children\'s Day with a project that allowed children to express their feelings and thoughts through colors and drawings on the Zoom platform.',
                },
                {
                    date: 'December 26, 2021',
                    title: 'Jolly Jamboree',
                    description: 'A Christmas get-together held at Buttercup Restaurant in Maharagama, fostering community spirit with activities and traditional Christmas customs.',
                },
            ],
        },
        {
            year: '2022 - 2023 Term (Leadership of IPP Rtr. Ishan Madusanka)',
            events: [
                {
                    date: 'October 1, 2022',
                    title: 'Anamnesis',
                    description: 'Celebrated the first anniversary of the Rotaract Club of the University of Ruhuna with a physical gathering and cake-cutting event.',
                },
                {
                    date: '',
                    title: 'Kirulu',
                    description: 'Provided blazers to the initiatory prefect board of Munasinghe Primary School in Monaragala.',
                },
                {
                    date: '',
                    title: 'Clause for Cause',
                    description: 'Distributed toys, stationery items, and sweet delights to children at Oba Mama children\'s home and the Shrine of Our Lady, Matara.',
                },
                {
                    date: '',
                    title: 'CTopia',
                    description: 'Conducted a mangrove re-plantation program in collaboration with the Society of Oceanography and Marine Geology of FMST.',
                },
                {
                    date: '',
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
        },
        {
            year: '2023 - 2024 Term (Leadership of Rtr. Nuhansi Gunawardana)',
            events: [
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
        },
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-content">
                {timelineData.map((yearData, idx) => (
                    <div key={idx} className="timeline-year">
                        <h2>{yearData.year}</h2>
                        <div className="timeline-events">
                            {yearData.events.map((event, eIdx) => (
                                <div key={eIdx} className="timeline-event">
                                    {event.date && <span className="timeline-date">{event.date}</span>}
                                    <h3 className="timeline-title">{event.title}</h3>
                                    <p className="timeline-description">{event.description}</p>
                                </div>
                            ))}
                        </div>
                        {yearData.significantProjects && (
                            <div className="timeline-significant-projects">
                                <h3>Significant Projects:</h3>
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
                                <h3>Ongoing Projects:</h3>
                                <ul>
                                    {yearData.ongoingProjects.map((project, pIdx) => (
                                        <li key={pIdx}>{project}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
