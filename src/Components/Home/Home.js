import React, { useEffect } from 'react';
import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.JPG';
import CommunityServiceImage from '../../Images/CommunityService.jpg';
import ClubServiceImage from '../../Images/ClubService.jpg';
import SportsServiceImage from '../../Images/SportsService.jpg';
import President from '../../Images/nuhansi gunawardena president.png';
import ProfessionalDevelopmentImage from '../../Images/ProfessionalDevelopment.jpg';
import { motion } from "framer-motion";
import { CountUp } from 'countup.js';
import '../../App.css';


const BounceCard = ({ className, children, style, description }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[400px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
            style={style}
        >
            <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

            {/* Card Title - outside the description block */}
            <div className="absolute top-4 left-4 right-4 z-10">
                {children}
            </div>

            {/* Description block */}
            <div
                className={`absolute bottom-0 left-4 right-4 top-full rounded-2xl bg-gradient-to-br from-gray-700 to-gray-500 p-4 transition-all duration-[250ms] ease-in-out group-hover:top-40 group-hover:rotate-[2deg]`}
            >
                <span className="block text-sm text-justify font-semibold text-white">
                    {description}
                </span>
            </div>
        </motion.div>
    );
};


const Stats = () => {
    useEffect(() => {
        const numbers = document.querySelectorAll("[data-count-to]");

        const handleCountUp = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const number = entry.target;
                    const id = number.getAttribute("id");
                    const value = number.getAttribute("data-count-to");
                    const decimal = number.getAttribute("data-decimal");
                    const options = {
                        decimalPlaces: decimal ? parseInt(decimal) : 0,
                        duration: 5 // Slows down the counting animation (5 seconds)
                    };
                    const countUp = new CountUp(id, value, options);

                    if (!countUp.error) {
                        countUp.start();
                    } else {
                        console.error(countUp.error);
                        number.innerHTML = value;
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleCountUp, {
            threshold: 0.5 // Adjust this value to control when the animation starts (0.5 means halfway into the viewport)
        });

        numbers.forEach((number) => {
            observer.observe(number);
        });

        return () => {
            numbers.forEach((number) => {
                observer.unobserve(number);
            });
        };
    }, []);

    return (
        <div className="relative container mx-auto flex justify-center items-center h-[600px] bg-white">
            <div className="absolute inset-0 z-0 bg-blur-image bg-cover h-[600px] bg-center"></div>
            <div className="relative z-10 w-full max-w-6xl text-white text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
                    <div className="flex flex-col items-center">
                        <h3
                            className="text-5xl font-extrabold leading-tight"
                            id="countto1"
                            data-count-to="30"
                        >
                            30+
                        </h3>
                        <p className="text-base font-medium leading-7">
                            Successful Projects
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3
                            className="text-5xl font-extrabold leading-tight"
                            id="countto2"
                            data-count-to="450"
                        >
                            450+
                        </h3>
                        <p className="text-base font-medium leading-7">
                            Active Members
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3
                            className="text-5xl font-extrabold leading-tight"
                            id="countto3"
                            data-count-to="9"
                        >
                            9
                        </h3>
                        <p className="text-base font-medium leading-7">
                            Faculties
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const CardTitle = ({children}) => {
    return (
        <h3 className="mx-auto text-center text-4xl text-white font-semibold">{children}</h3>
    );
};
const cardData = [
    {
        image: InternationalServiceImage,
        title: 'International Service Avenue',
        description: 'The International Service Avenue exemplifies global reach, going beyond boundaries to help the international community. Projects in this avenue focus on cultural exchange, facilitating mutual understanding, and engaging in international service projects. By connecting globally, this avenue contributes to positive change on a broader scale.',
        gradientFrom: 'violet-400',
        gradientTo: 'black'
    },
    {
        image: EnvironmentalServiceImage,
        title: 'Environmental Service Avenue',
        description: 'FEATURE DEMO HERE',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    // Add more data as needed
    {
        image: CommunityServiceImage,
        title: 'Community Service Avenue',
        description: 'The Community Service Avenue identifies critical societal issues and customizes projects to meet people’s needs, creating a better and happier society regardless of demographic differences to improve the quality of life for the local community or university campuses, involving all or most club members. The Environmental Service Avenue also operates under the Community Service Avenue, providing the opportunity to engage with nature, aiming to establish sustainable initiatives and preserve sensitive ecosystems. This avenue fosters community growth and environmental awareness within the club and society.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: ClubServiceImage,
        title: 'Club Service Avenue',
        description: 'The Club Service Avenue focuses on the logistical tasks that create an outstanding club experience for both current and newly inducted members. This avenue ensures that our clubs have active, engaged members who can provide service to their communities and attract new members. Under this avenue, the Rotaract Club of the University of Ruhuna organizes activities within our own club, fostering fellowship and leadership development. The Sports and Recreation Service Avenue also operates under the Club Service Avenue, promoting physical well-being, fostering camaraderie, and encouraging an active lifestyle among its members through various sports events, fitness challenges, and recreational activities.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: SportsServiceImage,
        title: 'Sports Service Avenue',
        description: 'FEATURE DEMO HERE',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: ProfessionalDevelopmentImage,
        title: 'Professional Development Avenue',
        description: 'The Professional Development Avenue empowers undergraduate communities to discover and pursue their dream careers, transforming them into qualified professionals with essential skills and competencies. This focus extends beyond individual clubs to include other undergraduate communities in Sri Lanka and beyond.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
];
export default function Home(props) {
    return (
        <div className={Home}>
            <div className="bg-white dark:bg-gray-900 ">
                <div className="grid max-w-screen-2xl py-8 mx-auto  xl:gap-0 lg:py-16 lg:grid-cols-12 lg:px-4">
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <h1 className="max-w-2xl mb-4 px-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Payments tool for software companies
                        </h1>
                        <p className="max-w-2xl mb-6 px-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            From checkout to global sales tax compliance, companies around the world use Flowbite to
                            simplify their payment stack.
                        </p>
                        <div>


                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-6 lg:flex   ">
                        <div className={"w-full scale-75 2xl:scale-100 p-0 m-0 overflow-visible"}>
                            <svg className={"w-full"} height="500">
                                <defs>
                                    <clipPath id="image">
                                        <rect x="10" y="70" width="43%" height="22%" rx="70" ry="50"
                                              transform="rotate(-45, 170, 170)"/>
                                        <rect x="-60" y="310" width="35%" height="22%" rx="70" ry="50"
                                              transform="rotate(-45, 170, 170)"/>
                                        <rect x="-120" y="190" width="75%" height="22%" rx="70" ry="50"
                                              transform="rotate(-45, 170, 170)"/>
                                        <rect x="220" y="310" width="45%" height="22%" rx="70" ry="50"
                                              transform="rotate(-45, 170, 170)"/>
                                        <rect x="50" y="430" width="80%" height="22%" rx="70" ry="50"
                                              transform="rotate(-45, 170, 170)"/>
                                        <rect x="200" y="550" width="45%" height="22%" rx="70" ry="50"
                                              transform="rotate(-45, 170, 170)"/>
                                    </clipPath>
                                </defs>
                                <image
                                    className={"object-cover w-full"}
                                    height="500"
                                    href={ClubServiceImage} // Use the correct image import
                                    clipPath="url(#image)"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white ">
                <div
                    className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-semibold text-black dark:text-black">RACRUH</h2>
                        <p className="mb-4">We are strategists, designers and developers. Innovators and problem
                            solvers. Small enough to be simple and quick, but big enough to deliver the scope you want
                            at the pace you need. Small enough to be simple and quick, but big enough to deliver the
                            scope you want at the pace you need.</p>
                        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to
                            be simple and quick.</p>
                        {/*<a href="#"*/}
                        {/*   className="inline-flex items-center justify-center px-5 py-5 mr-3 text-base font-medium text-center text-black bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">*/}
                        {/*    Get started*/}
                        {/*    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <a href="/about-us"
                           className="inline-flex items-center justify-center px-5 py-3 mt-3 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-black hover:dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            About us
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <img className="w-full rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                             alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                             alt="office content 2"></img>
                        <img className="mt-4 w-full  rounded-lg"
                             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                             alt="office content 2"></img>
                    </div>
                </div>
            </div>
            <Stats/>

            <div className={"lg:px-20 lg:py-44 px-2"}>
                {/*<h2 className="mb-4  text-4xl tracking-tight font-semibold text-black dark:text-black">AVENUES</h2>*/}
                <div className="mb-4 grid grid-cols-12 gap-4">
                    {cardData.map((card, index) => (
                        <BounceCard
                            key={index}
                            className={`group col-span-12 md:col-span-4 w-full h-full bg-cover bg-center`}
                            style={{backgroundImage: `url(${card.image})`}}
                            description={card.description}
                        >
                            <CardTitle>{card.title}</CardTitle>
                        </BounceCard>
                    ))}

                </div>
            </div>
            <div className={"flex flex-row gap-12 justify-center "}>
                <div className="flex p-4 max-w-3xl h-[400px]  mb-10  bg-white shadow-xl rounded-lg">
                    <div className="flex-shrink-0">
                        {/* Message Icon */}
                        <div className="bg-green-100 text-green-500 rounded-full p-2">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 1a1 1 0 100 2h8a1 1 0 100-2H6z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-4">
                        {/* Title and Message */}
                        <div className="font-bold text-gray-900">MESSAGES</div>
                        <div className="text-gray-500">President</div>
                        <div className="text-gray-700 mt-1">It is a long established fact that a reader will be
                            distracted
                            by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                            is
                            that it has a more-or-less normal distribution of letters, as opposed to using 'Content
                            here,
                            content here', making it look like readable English. Many desktop publishing packages and
                            web
                            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                            will uncover many web sites still in their infancy. Various versions have evolved over the
                            years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </div>
                    </div>
                    <div className="ml-auto text-gray-500">now</div>
                </div>


                <div className="w-full max-w-xs bg-white  rounded-lg shadow ">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-auto h-96 mb-3 shadow-lg" src={President} alt="President"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">Rtr.Nuhansi Gunawardhana</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">President</span>
                    </div>
                </div>


            </div>


        </div>
    );
}
