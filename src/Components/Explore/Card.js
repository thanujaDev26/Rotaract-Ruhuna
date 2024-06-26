import React, { useState, useEffect } from 'react';

const Card = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);
    const [currentImage, setCurrentImage] = useState(props.image);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let interval;
        if (isSmallScreen) {
            interval = setInterval(() => {
                setCurrentImage(prevImage => (prevImage === props.image ? props.hoverImage : props.image));
            }, 10000);
        }

        return () => clearInterval(interval);
    }, [isSmallScreen, props.image, props.hoverImage]);
    const transitionDuration = isSmallScreen ? '0.3s' : '3.0s';

    return (
        <div
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden aspect-w-1 aspect-h-1 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transition: `opacity ${transitionDuration} ease-in-out` }}
        >
            <div className="absolute inset-0 p-6 flex flex-col items-start justify-end z-10 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out opacity-100">
                <h1 className="text-2xl font-bold mb-4 text-white">{props.title}</h1>
                <button onClick={() => props.navigate(props.link)}
                        className="text-sm font-semibold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">
                    Apply
                </button>
            </div>
            <img
                src={isHovered && !isSmallScreen ? props.hoverImage : currentImage}
                alt={props.title}
                className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                style={{ transition: `opacity ${transitionDuration} ease-in-out` }}
            />
        </div>
    );
};

export default Card;
