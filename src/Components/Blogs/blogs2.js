import Data from "./data.json";
import React, {useEffect, useState} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function BlogsOne() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (<div className="relative bg-white my-5">
        <div
            className={classNames('fixed inset-0 transition-opacity duration-700 ease-in-out', scrollY > 200 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',)}
            aria-hidden="true"
        >
            <img
                src='https://img.freepik.com/free-photo/smiling-young-women-dancing-holi-festival_23-2148129372.jpg?t=st=1720006526~exp=1720010126~hmac=b9fbb5046b2a75542bfdccf2d4a0a8249927c9c956ee2376e19177830e62951c&w=740'
                alt="Cover"
                className="w-full h-full bg-center object-cover "
            />
        </div>
        <div className="relative mx-auto text-center sm:w-[450px] md:w-[550px] lg:w-[900px] card-set-header">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Rotaract Club of University of Ruhuna Blog
            </h2>
        </div>
        <div className="mt-4 relative grid grid-cols-1 gap-3 blog1-outer">
            {Data.map((data, index) => (
                <div key={index} className="h-auto rounded-md bg-trans relative shadow-lg overflow-hidden transform
                                            transition-transform duration-300 hover:scale-105">
                    <div className="w-full h-52 xl:h-[300px] 2xl:h-[400px] bg-no-repeat bg-cover bg-center rounded-t-md"
                        style={{backgroundImage: `url(${data.img})`}}>
                    </div>
                    <div className="w-full h-full text-center p-2 absolute inset-0 bg-opacity-75 bg-text-b text-white
                        opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <h1 className="text-xl font-bold my-2">{data.name}</h1>
                        <p className="text-base leading-4 my-2 text-white">{data.description}</p>
                        <button className="bg-pink px-5 py-1 rounded-xl text-white my-2">See more...</button>
                    </div>
                </div>))}
        </div>
    </div>);
}