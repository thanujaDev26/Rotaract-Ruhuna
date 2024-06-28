import { useEffect, useRef } from 'react';

export default function History() {
    const scrollRef = useRef(null);
    const scrollStep = 0.5;
    const scrollInterval = 30;
    let animationFrameId;

    useEffect(() => {
        const scrollDown = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollTop += scrollStep;
                if (scrollRef.current.scrollTop < scrollRef.current.scrollHeight - scrollRef.current.clientHeight) {
                    animationFrameId = requestAnimationFrame(scrollDown);
                }
            }
        };

        const handleMouseEnter = () => {
            animationFrameId = requestAnimationFrame(scrollDown);
        };

        const handleMouseLeave = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };

        const handleClick = () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };

        const scrollableDiv = scrollRef.current;
        if (scrollableDiv) {
            scrollableDiv.addEventListener('mouseenter', handleMouseEnter);
            scrollableDiv.addEventListener('mouseleave', handleMouseLeave);
            scrollableDiv.addEventListener('click', handleClick); // Adding click handler
        }

        return () => {
            if (scrollableDiv) {
                scrollableDiv.removeEventListener('mouseenter', handleMouseEnter);
                scrollableDiv.removeEventListener('mouseleave', handleMouseLeave);
                scrollableDiv.removeEventListener('click', handleClick); // Removing click handler
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
            }
        };
    }, []);

    return (
        <div className="overflow-hidden bg-white">
            <style>
                {`
                .scrollable-content {
                    max-height: 400px;
                    overflow-y: auto;
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                }

                .scrollable-content::-webkit-scrollbar {
                    width: 0; /* WebKit */
                    height: 0;
                }
                `}
            </style>
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-1 lg:max-w-none lg:grid-cols-2">
                    <div className="hidden lg:block relative lg:ml-0 lg:overflow-hidden h-full w-full">
                        <img
                            src={require('../../Images/ProfessionalDevelopment.png')}
                            alt="Product screenshot"
                            className="relative left-0 w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        />
                    </div>
                    <div className="lg:pl-8 lg:pt-4"  style={{alignItems:'center'}}>
                        <div ref={scrollRef} className="lg:max-w-lg scrollable-content" style={{minWidth:'100%',minHeight:'100%'}} >
                            <div style={{ position: 'sticky', top: 1, backgroundColor: 'white', zIndex: 10, borderBottom: '1px solid #ddd',marginBottom: '1rem' }}>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About us</p>
                            </div>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The Rotaract Club of the University of Ruhuna was established to empower young leaders
                                and foster a strong sense of community spirit. Since its inception, the club has been
                                a cornerstone of service and fellowship, dedicated to driving positive change and
                                nurturing leadership skills among students.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our journey began with a shared vision
                                of making a meaningful impact, and over the years, we have grown into a dynamic and
                                influential organization. The Rotaract Club has spearheaded numerous impactful
                                projects, significantly benefiting both our university and the wider community.
                                From community service initiatives to professional development workshops, our diverse
                                range of activities showcases our commitment to excellence and making a tangible
                                difference. Our members, driven by passion and dedication, have built a legacy of
                                innovation, collaboration, and resilience, consistently demonstrating the core values
                                of Rotaract.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Our journey has been marked by a steadfast commitment to service,
                                innovation, and fellowship. We have continually evolved, adapting to the changing
                                needs of our community while staying true to our mission. Our projects have ranged
                                from environmental sustainability efforts and educational programs to health and
                                wellness campaigns, all aimed at addressing pressing issues and improving the
                                quality of life for those around us.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                As we look to the future, we remain devoted
                                to our mission of creating positive change within our university and beyond.
                                We are proud of our rich history and the lasting impact we have made.
                                Our commitment to fostering leadership, promoting fellowship, and serving our
                                community is unwavering.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                The Rotaract Club of the University of Ruhuna
                                will continue to inspire and empower future generations to carry forward the
                                torch of service and compassion, ensuring a brighter and more inclusive future for all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
