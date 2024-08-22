import React from 'react';
import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.JPG';
import CommunityServiceImage from '../../Images/CommunityService.jpg';
import ClubServiceImage from '../../Images/ClubService.jpg';
import SportsServiceImage from '../../Images/SportsService.jpg';
import PublicRelationsImage from '../../Images/PublicRelations.png';
import ProfessionalDevelopmentImage from '../../Images/ProfessionalDevelopment.jpg';
import { motion } from "framer-motion";


const BounceCard = ({ className, children, style }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[400px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
            style={style}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
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
        image:EnvironmentalServiceImage,
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
                <div className="grid max-w-screen-2xl py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
                    <div className="mr-auto place-self-center lg:col-span-6">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Payments tool for software companies
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            From checkout to global sales tax compliance, companies around the world use Flowbite to
                            simplify their payment stack.
                        </p>
                        <div>


                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-6 lg:flex ">
                        <div className={"w-full scale-50 lg:scale-100"}>
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
                        <a href="#"
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
            <div className={"px-20"}>
                <div className="mb-4 grid grid-cols-12 gap-4">
                    {cardData.map((card, index) => (
                        <BounceCard
                            key={index}
                            className={`group col-span-12 md:col-span-4 w-full h-full bg-cover bg-center`}
                            style={{backgroundImage: `url(${card.image})`}}
                        >
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>

                            <CardTitle>{card.title}</CardTitle>
                            <div
                                className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
                            >
            <span className="block text-center font-semibold text-white">
              {card.description}
            </span>
                            </div>
                        </BounceCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
