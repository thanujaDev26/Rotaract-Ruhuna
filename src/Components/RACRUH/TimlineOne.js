import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function TimeLine() {
    const containerRef = useRef(null);
    const headerRef = useRef(null);

    const { scrollYProgress: containerProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: headerProgress } = useScroll({
        target: headerRef,
        offset: ["start start", "end start"]
    });

    const headerY = useTransform(headerProgress, [0, 1], ["0%", "-100%"]);
    const opacity = useTransform(headerProgress, [0, 0.5], [1, 0]);

    const scaleX = useSpring(containerProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const timelineData = [
        {
            year: '2021',
            events: [
                {
                    title: 'Establishment',
                    date: 'July 13, 2021',
                    description: 'The Rotaract Club of University of Ruhuna was established.',
                    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop'
                },
                {
                    title: 'Charter Ceremony',
                    date: 'September 14, 2021',
                    description: 'Official charter ceremony and inauguration of the first board.',
                    image: 'https://images.unsplash.com/photo-1511632765486-a01e0d5b1475?q=80&w=2940&auto=format&fit=crop'
                }
            ]
        },
        {
            year: '2022',
            events: [
                {
                    title: 'First Anniversary',
                    date: 'October 1, 2022',
                    description: 'Celebrated our first year of service and fellowship.',
                    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2940&auto=format&fit=crop'
                },
                {
                    title: 'Community Projects',
                    date: 'December 2022',
                    description: 'Launched multiple community service initiatives.',
                    image: 'https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?q=80&w=2940&auto=format&fit=crop'
                }
            ]
        },
        {
            year: '2023',
            events: [
                {
                    title: 'International Projects',
                    date: 'March 2023',
                    description: 'Expanded our reach with international collaborations.',
                    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2949&auto=format&fit=crop'
                },
                {
                    title: 'Environmental Initiatives',
                    date: 'June 2023',
                    description: 'Launched major environmental conservation projects.',
                    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=2940&auto=format&fit=crop'
                }
            ]
        },
        {
            year: '2024',
            events: [
                {
                    title: 'New Leadership',
                    date: 'January 2024',
                    description: 'Transition to new board under Rtr. Nuhansi Gunawardana.',
                    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop'
                },
                {
                    title: 'Current Projects',
                    date: 'Present',
                    description: 'Leading multiple initiatives including Eduquar 3.0.',
                    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop'
                }
            ]
        }
    ];

    const TimelineEvent = ({ event, index, total }) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "center center"]
        });

        const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
        const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
        const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

        return (
            <motion.div
                ref={ref}
                style={{
                    opacity,
                    scale,
                    y
                }}
                className="relative flex items-center mb-12"
            >
                <div className="flex-1 pr-8">
                    <motion.div
                        className="bg-white rounded-xl shadow-sm overflow-hidden"
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <div className="text-sm font-medium text-red-600 mb-2">{event.date}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full" />
                    <div className="w-1 h-full bg-red-200 absolute top-4" />
                </div>
            </motion.div>
        );
    };

    return (
        <div ref={containerRef} className="relative">
            {/* Fixed progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-red-600 transform origin-left z-50"
                style={{ scaleX }}
            />

            {/* Sticky header that transitions */}
            <motion.div
                ref={headerRef}
                className="sticky top-0 bg-white/95 backdrop-blur-sm z-40 py-8"
                style={{ y: headerY }}
            >
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        style={{ opacity }}
                        className="text-4xl font-bold text-center text-gray-900"
                    >
                        Our Journey
                    </motion.h2>
                </div>
            </motion.div>

            {/* Main content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <div className="relative">
                    {timelineData.map((period, periodIndex) => (
                        <div key={period.year} className="mb-20">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="sticky top-32 mb-8 z-30 flex justify-end"
                            >
                                <div className="bg-white/95 backdrop-blur-sm py-4 px-6 rounded-l-full">
                                    <h3 className="text-6xl font-bold text-red-600">{period.year}</h3>
                                </div>
                            </motion.div>

                            <div className="relative pl-8">
                                {period.events.map((event, eventIndex) => (
                                    <TimelineEvent
                                        key={event.title}
                                        event={event}
                                        index={eventIndex}
                                        total={period.events.length}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
