import React, { useEffect, useState } from 'react';

const Card = ({ title, image, navigate, isOpen, link, deadline }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        if (isOpen && deadline) {
            const countdown = setInterval(() => {
                const now = new Date().getTime();
                const distance = deadline - now;

                if (distance < 0) {
                    clearInterval(countdown);
                    setIsExpired(true);
                    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [isOpen, deadline]);

    const now = new Date().getTime();
    const distance = deadline - now;
    const isCritical = distance > 0 && distance <= 1800000;

    return (
        <div className="relative flex flex-col items-center justify-between bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 h-100">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center flex flex-col justify-between h-full">
                <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
                <p className={`mt-1 text-sm ${isExpired ? 'text-red-500' : isOpen ? 'text-green-500' : 'text-red-500'}`}>
                    {isExpired ? 'Deadline is over' : isOpen ? 'Positions are now open!' : 'Coming soon!'}
                </p>
                {isOpen && deadline && !isExpired ? (
                    <div className="mt-2 flex space-x-2">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div key={unit}
                                 className={`bg-gray-200 rounded-lg p-2 w-16 ${isCritical ? 'bg-red-200' : ''}`}>
                                <span className={`text-lg font-bold ${isCritical ? 'text-red-600' : ''}`}>
                                    {value.toString().padStart(2, '0')}
                                </span>
                                <div className="text-xs capitalize">{unit}</div>
                            </div>
                        ))}
                    </div>
                ) : null}
                <div className="mt-2">
                    {isExpired ? (
                        <button
                            disabled
                            className="text-sm font-semibold bg-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none"
                        >
                            Expired
                        </button>
                    ) : (
                        isOpen ? (
                            <button
                                onClick={() => navigate(link)}
                                className="text-sm font-semibold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200"
                            >
                                Apply
                            </button>
                        ) : (
                            <button
                                disabled
                                className="text-sm font-semibold bg-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none"
                            >
                                Coming Soon!
                            </button>
                        )
                    )}
                </div>

            </div>
        </div>
    );
};

export default Card;
