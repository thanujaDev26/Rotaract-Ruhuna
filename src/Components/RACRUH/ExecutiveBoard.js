import React, { useRef } from 'react';
import '../components.css'

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
    // const scrollLeft = () => {
    //     if (boardRef.current) {
    //         const itemWidth = boardRef.current.firstElementChild.clientWidth;
    //         const scrollAmount = itemWidth + 20;
    //
    //         let newScrollLeft = boardRef.current.scrollLeft - scrollAmount;
    //         if (newScrollLeft < 0) {
    //             newScrollLeft = boardRef.current.scrollWidth - boardRef.current.clientWidth;
    //         }
    //
    //         boardRef.current.scrollTo({
    //             left: newScrollLeft,
    //             behavior: 'smooth',
    //         });
    //     }
    // };
    //
    // const scrollRight = () => {
    //     if (boardRef.current) {
    //         const itemWidth = boardRef.current.firstElementChild.clientWidth;
    //         const scrollAmount = itemWidth + 20;
    //         let newScrollLeft = boardRef.current.scrollLeft + scrollAmount;
    //         if (newScrollLeft >= boardRef.current.scrollWidth - boardRef.current.clientWidth) {
    //             newScrollLeft = 0;
    //         }
    //
    //         boardRef.current.scrollTo({
    //             left: newScrollLeft,
    //             behavior: 'smooth',
    //         });
    //     }
    // };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Executive Board Members</h2>

                <div className="relative overflow-hidden">
                    <div ref={boardRef} className="flex space-x-6 sm:space-x-8 lg:space-x-10 xl:space-x-12 overflow-x-auto hide-scrollbar">
                        {executiveBoardMembers.map((member) => (
                            <div key={member.id} className="flex-shrink-0 w-72 sm:w-80 lg:w-96 relative">
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

                    {/*<button*/}
                    {/*    className="absolute top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full shadow-md left-0 z-10"*/}
                    {/*    onClick={scrollLeft}*/}
                    {/*>*/}
                    {/*    {'<'}*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="absolute top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full shadow-md right-0 z-10"*/}
                    {/*    onClick={scrollRight}*/}
                    {/*>*/}
                    {/*    {'>'}*/}
                    {/*</button>*/}

                </div>
            </div>
        </div>
    );
};

export default ExecutiveBoard;

