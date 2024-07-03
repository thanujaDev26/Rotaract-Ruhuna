import React, { useRef, useEffect } from 'react';

import director1Url from '../../Images/Directors/chanya.png';
import director2Url from '../../Images/Directors/Maneesha com.service 2 conv.png';
import director3Url from '../../Images/Directors/sabira.png';
import director4Url from '../../Images/Directors/sathis.png';
import director5Url from '../../Images/Directors/tharindu.png';
import director6Url from '../../Images/Directors/tharushi.png';
import director7Url from '../../Images/Directors/thiviru.png';
import director8Url from '../../Images/Directors/YASHOD.png';
import director9Url from '../../Images/Directors/shihari.png';

const directorBoardMembers = [
    {
        id: 1,
        name: 'Rtr. Chanya Peiris',
        designation: 'Environmental Service Avenue Director',
        imageUrl: director1Url,
    },
    {
        id: 2,
        name: 'Rtr. Maneesha Dewmini',
        designation: 'Community Service Avenue Co - Director',
        imageUrl: director2Url,
    },
    {
        id: 3,
        name: 'Rtr. Sabira Navaz',
        designation: 'Club Service Avenue Co - Director',
        imageUrl: director3Url,
    },
    {
        id: 4,
        name: 'Rtr. Sathis Jayasundara',
        designation: 'Professional Development Avenue Director',
        imageUrl: director4Url,
    },
    {
        id: 5,
        name: 'Rtr. Tharindu Niroshan',
        designation: 'Community Service Avenue Director',
        imageUrl: director5Url,
    },
    {
        id: 6,
        name: 'Rtr. Tharushi Jayaweera',
        designation: 'Club Service Avenue Co - Director',
        imageUrl: director6Url,
    },
    {
        id: 7,
        name: 'Rtr. Thiviru Asel',
        designation: 'Sports Service Avenue Director',
        imageUrl: director7Url,
    },
    {
        id: 8,
        name: 'Rtr. Yashod Rathnayake',
        designation: 'Public Relation Avenue Director',
        imageUrl: director8Url,
    },
    {
        id: 9,
        name: 'Rtr. Shihari Oshana',
        designation: 'International Service Avenue Director',
        imageUrl: director9Url,
    },
];

const DirectorBoard = () => {
    const boardRef = useRef(null);
    let scrollInterval = useRef(null);
    const itemWidth = 250;
    const scrollDelay = 3000;

    useEffect(() => {
        startAutoScroll();
        return () => {
            stopAutoScroll();
        };
    }, []);

    const startAutoScroll = () => {
        scrollInterval.current = setInterval(() => {
            if (boardRef.current) {
                let currentScrollLeft = boardRef.current.scrollLeft;
                let newScrollLeft = currentScrollLeft + itemWidth;
                if (newScrollLeft >= boardRef.current.scrollWidth - boardRef.current.clientWidth) {
                    newScrollLeft = 0;
                }

                boardRef.current.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth',
                });
            }
        }, scrollDelay);
    };

    const stopAutoScroll = () => {
        clearInterval(scrollInterval.current);
    };

    // const scrollLeft = () => {
    //     if (boardRef.current) {
    //         let currentScrollLeft = boardRef.current.scrollLeft;
    //         let newScrollLeft = currentScrollLeft - itemWidth;
    //
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
    //         let currentScrollLeft = boardRef.current.scrollLeft;
    //         let newScrollLeft = currentScrollLeft + itemWidth;
    //
    //         if (newScrollLeft >= boardRef.current.scrollWidth - boardRef.current.clientWidth) {
    //             newScrollLeft = 0;
    //         }
    //         boardRef.current.scrollTo({
    //             left: newScrollLeft,
    //             behavior: 'smooth',
    //         });
    //     }
    // };


    return (
        <div className="bg-white" style={{padding:'0.1rem'}}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" >
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Director Board Members</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={boardRef}
                        className="flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10 overflow-x-auto"
                        onMouseEnter={stopAutoScroll}
                        onMouseLeave={startAutoScroll}
                        style={{ overflowX: 'hidden', padding: '1rem' }}
                    >
                        {directorBoardMembers.map((member) => (
                            <div key={member.id} className="flex-shrink-0 w-44 sm:w-60 lg:w-72 relative">
                                <div className="rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
                                    <div className="aspect-w-4 aspect-h-5">
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="object-cover object-center w-full h-full transition-transform duration-300 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 bg-white flex-grow">
                                        <p className="text-lg font-semibold">{member.name}</p>
                                        <p className="text-sm text-gray-600">{member.designation}</p>
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

export default DirectorBoard;
