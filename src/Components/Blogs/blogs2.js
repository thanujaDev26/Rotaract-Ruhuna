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

    return (
        <div className="relative bg-white my-5">
            <div
                className={classNames(
                    'fixed inset-0 transition-opacity duration-700 ease-in-out',
                    scrollY > 200 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                )}
                aria-hidden="true"
            >
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlc_4RQ3Y8YrUhrkls9DjuBza_Y2pdDd-iw&s'
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rotaract Admin</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Contact us via e-mail or phone for any inquiries
                </p>
            </div>
            <div className="relative grid grid-cols-1 gap-2 blog1-outer">
                {Data.map((data, index) => (<div key={index} className=" h-auto rounded-md bg-white">
                    <div className="w-full h-40 md:h-52 xl:h-64 2xl:h-[400px] bg-no-repeat bg-cover rounded-t-md"
                         style={{backgroundImage: `url(${data.img})`}}>
                    </div>
                    <div className="w-full h-auto text-center p-2">
                        <h1 className="text-xl font-bold my-2">{data.name}</h1>
                        <p className="text-base leading-4 my-2 text-text-b">{data.description}</p>
                        <button className="bg-pink px-5 py-1 rounded-xl text-white my-2">See more...</button>
                    </div>
                </div>))}
            </div>
        </div>);
}