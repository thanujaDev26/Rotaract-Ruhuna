import React, { useRef } from 'react';
import '../components.css';

import gayanUrl from '../../Images/Executivers/Gayan.png';
import insafUrl from '../../Images/Executivers/Inshaf.png';
import kalinduUrl from '../../Images/Executivers/Kalindu.png';
import kavishkaUrl from '../../Images/Executivers/Kavishka.png';
import nuhansiUrl from '../../Images/Executivers/Nuhansi.png';
import rumeshaUrl from '../../Images/Executivers/Rumesha.png';
import virashaUrl from '../../Images/Executivers/Virasha.png';

const executiveBoardMembers = [
    {
        id: 1,
        name: 'Rtr. Nuhansi Gunawardena',
        designation: 'President',
        imageUrl: nuhansiUrl,
    },
    {
        id: 2,
        name: 'Rtr. Kavishka Tissera',
        designation: 'Secretary',
        imageUrl: kavishkaUrl,
    },
    {
        id: 3,
        name: 'Rtr. Gayan Jayawardena',
        designation: 'Vice President',
        imageUrl: gayanUrl,
    },
    {
        id: 4,
        name: 'Rtr. Inshaf Ahamed',
        designation: 'Treasurer',
        imageUrl: insafUrl,
    },
    {
        id: 5,
        name: 'Rtr. Kalindu Abeygunawardena',
        designation: 'Sergeant at Arms',
        imageUrl: kalinduUrl,
    },
    {
        id: 6,
        name: 'Rtr. Rumesha Maduwanthi',
        designation: 'Co-Editor',
        imageUrl: rumeshaUrl,
    },
    {
        id: 7,
        name: 'Rtr. Virasha Godakanda',
        designation: 'Co-Editor',
        imageUrl: virashaUrl,
    },
];

const ExecutiveBoard = () => {
    const boardRef = useRef(null);

    const handleClickScroll = (direction) => {
        if (boardRef.current) {
            const itemWidth = boardRef.current.firstElementChild.clientWidth;
            const scrollAmount = itemWidth + 20;

            let newScrollLeft;
            if (direction === 'left') {
                newScrollLeft = boardRef.current.scrollLeft - scrollAmount;
            } else {
                newScrollLeft = boardRef.current.scrollLeft + scrollAmount;
            }

            boardRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bg-white">
            <div className="py-12 sm:px-4" style={{padding: 'auto 1rem', margin: '0 1rem'}}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Executive Board Members</h2>

                <div className="relative overflow-hidden">
                    <div ref={boardRef} className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto hide-scrollbar" onClick={(e) => handleClickScroll('right')}>
                        {executiveBoardMembers.map((member) => (
                            <div key={member.id} className="flex-shrink-0 w-56 sm:w-64 lg:w-72 relative">
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <div className="aspect-w-4 aspect-h-5">
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="object-cover object-center w-full h-full transition-transform duration-300 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                                        <p className="text-sm font-bold text-gray-600">{member.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveBoard;
