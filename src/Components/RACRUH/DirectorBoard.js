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
        name: 'Director 1',
        designation: 'CEO',
        imageUrl: director1Url,
    },
    {
        id: 2,
        name: 'Director 2',
        designation: 'COO',
        imageUrl: director2Url,
    },
    {
        id: 3,
        name: 'Director 3',
        designation: 'CFO',
        imageUrl: director3Url,
    },
    {
        id: 4,
        name: 'Director 4',
        designation: 'CTO',
        imageUrl: director4Url,
    },
    {
        id: 5,
        name: 'Director 5',
        designation: 'CMO',
        imageUrl: director5Url,
    },
    {
        id: 6,
        name: 'Director 6',
        designation: 'CIO',
        imageUrl: director6Url,
    },
    {
        id: 7,
        name: 'Director 7',
        designation: 'CRO',
        imageUrl: director7Url,
    },
    {
        id: 8,
        name: 'Director 8',
        designation: 'CHRO',
        imageUrl: director8Url,
    },
    {
        id: 9,
        name: 'Director 9',
        designation: 'CCO',
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

    const scrollLeft = () => {
        if (boardRef.current) {
            let currentScrollLeft = boardRef.current.scrollLeft;
            let newScrollLeft = currentScrollLeft - itemWidth;

            if (newScrollLeft < 0) {
                newScrollLeft = boardRef.current.scrollWidth - boardRef.current.clientWidth;
            }

            boardRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
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
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8 text-center">Director Board Members</h2>

                <div className="relative overflow-hidden">
                    <div
                        ref={boardRef}
                        className="flex space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-10 overflow-x-auto"
                        onMouseEnter={stopAutoScroll}
                        onMouseLeave={startAutoScroll}
                        style={{ overflowX: 'hidden' }}
                    >
                        {directorBoardMembers.map((member) => (
                            <div key={member.id} className="flex-shrink-0 w-44 sm:w-60 lg:w-72 relative">
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <div className="aspect-w-4 aspect-h-5">
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="object-cover object-center w-full h-full transition-transform duration-300 transform hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 bg-white">
                                        <p className="text-lg font-semibold">{member.name}</p>
                                        <p className="text-gray-600">{member.designation}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full shadow-md left-0 z-10"
                        onClick={scrollLeft}
                    >
                        {'<'}
                    </button>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full shadow-md right-0 z-10"
                        onClick={scrollRight}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DirectorBoard;
