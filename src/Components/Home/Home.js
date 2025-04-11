import React, { useEffect, useState } from 'react';
import InternationalServiceImage from '../../Images/Home/InternationalService.jpg';
import EnvironmentalServiceImage from '../../Images/Home/EnvironmentalService.JPG';
import CommunityServiceImage from '../../Images/Home/CommunityService.jpg';
import ClubServiceImage from '../../Images/Home/ClubService.jpg';
import SportsServiceImage from '../../Images/Home/SportsService.jpg';
import President from '../../Images/nuhansi gunawardena president.png'; // Corrected image path
import ProfessionalDevelopmentImage from '../../Images/Home/ProfessionalDevelopment.jpg';
import firsthero from '../../Images/Home/Hero/01.jpg';
import secondhero from '../../Images/Home/Hero/02.jpg';
import thirdhero from '../../Images/Home/Hero/03.jpg';
import fourthero from '../../Images/Home/Hero/04.jpg';

import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from 'countup.js';
import '../../App.css';
import { Globe2, Users, Award, Sparkles, ArrowRight, Quote ,BookOpenCheck,Network,HeartHandshake} from 'lucide-react';


const heroImages = [
    firsthero,
   secondhero,
    thirdhero,
    fourthero
];

const AnimatedShape = ({ className }) => (
    <motion.div
        className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 ${className}`}
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
        }}
    />
);

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.img
                        src={images[currentIndex]}
                        alt="Featured"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const BounceCard = ({ className, children, style, description }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[400px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
            style={style}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"></div>
            <div className="absolute top-4 left-4 right-4 z-10">
                {children}
            </div>
            <div className="absolute bottom-0 left-4 right-4 top-full rounded-2xl bg-gradient-to-br from-gray-700 to-gray-500 p-4 transition-all duration-[250ms] ease-in-out group-hover:top-32 group-hover:rotate-[2deg]">
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
                        duration: 5
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
            threshold: 0.5
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
        <div className="relative container mx-auto flex justify-center items-center my-20 bg-white">
            <div className="relative z-10 w-full max-w-6xl  text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
                    <div className="flex flex-col items-center">
                        <h3 className="text-5xl text-red-500 font-extrabold leading-tight" id="countto1" data-count-to="26">
                            26
                        </h3>
                        <p className="text-base text-gray-500 font-medium leading-7">Successful Projects</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-5xl text-red-500 font-extrabold leading-tight" id="countto2" data-count-to="250">
                            250
                        </h3>
                        <p className="text-base text-gray-500 font-medium leading-7">Active Members</p>
                    </div>
                    <div className="flex flex-col  items-center">
                        <h3 className="text-5xl font-extrabold text-red-500 leading-tight" id="countto3" data-count-to="9">
                            9
                        </h3>
                        <p className="text-base text-gray-500 font-medium leading-7">Faculties</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CardTitle = ({ children }) => {
    return (
        <h3 className="mx-auto text-center text-4xl text-white font-semibold">{children}</h3>
    );
};
const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
    >
        <Icon className="h-8 w-8 text-red-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);
const cardData = [
    {
        image: InternationalServiceImage,
        title: 'International Service Avenue',
        description: 'This avenue connects the Rotaract club to the global community, enhancing cross cultural understanding and collaboration. It promoted international friendships through partnerships, twin club initiatives and service projects that address global issues. This avenue strengthens connections with Rotaract clubs worldwide through cultural exchanges, language programs and networking events. It inspires members to broaden their perspectives and work together for meaningful change, uniting Rotaractors in a shared mission of service and friendship.',
        gradientFrom: 'violet-400',
        gradientTo: 'black'
    },
    {
        image: EnvironmentalServiceImage,
        title: 'Environmental Service Avenue',
        description: 'This avenue is dedicated to promoting sustainability and environmental responsibility within the Rotaract club and community. It focuses on creating awareness, driving action and encouraging eco-friendly projects to protect and preserve the environment. By advocating to climate action and conservation efforts, it empowers Rotaractors to be responsible global citizens, ensuring a greener and healthier future for generations to come. ',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: CommunityServiceImage,
        title: 'Community Service Avenue',
        description: 'This avenue focuses on making a positive impact within local communities by addressing their needs improving the quality of life. It encourages Rotaractors to engage in projects that support education, health, poverty alleviation and social development. This avenue conducts charity-related projects, educational initiatives and awareness programs and fund raising projects. By actively, it empowers Rotaractors to create lasting change, build stronger communities, and inspire others to contribute towards social well-being.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: ClubServiceImage,
        title: 'Club Service Avenue',
        description: 'The club service avenue serves as the heart of the Rotaract Club, dedicated to enhancing fellowships, leadership and teamwork among members. It ensures that every member has equal opportunities to participate in Rotaract activities, develop their skills and build meaningful connections. This avenue plays a key role in strengthening club engagement through organizing, interactive meetings, team building events and collaborative projects with other Rotaract clubs. From member inductions to social gatherings, it creates a welcoming and lively club culture that keeps members motivated and involved. Beyond strengthening internal bonds, Club service avenue also actively recognizes and appreciated members’ contributions to club activities, ensuring they feel valued and acknowledged and also enhances the Rotaract experience, empowering members to grow as leaders while forming lasting friendships.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: SportsServiceImage,
        title: 'Sports Service Avenue',
        description: 'This is the avenue that reminds the members that physical fitness, teamwork and sports are just as important as studies. It encourages members to take part in various sports and recreational actives, helping them stay active, build friendships, and enjoy a healthy balance between learning and fun.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
    {
        image: ProfessionalDevelopmentImage,
        title: 'Professional Development Avenue',
        description: 'Empowers Rotaractors by enhancing their skills, knowledge and career growth through learning opportunities and mentorship. It focuses on equipping members with leadership, communication and technical skills essential for personal and professional success. This avenue organizes workshops, training sessions, networking events and mentorship programs, connecting members with industry experts and professionals. By encouraging continuous learning and career development, it prepares Rotaractors to excel in their fields. Through professional growth it strengthens both the members and the club, ensuring lasting impact beyond Rotaract.',
        gradientFrom: 'amber-400',
        gradientTo: 'orange-400'
    },
];
export default function Home(props) {
    return (
        <div className={Home}>

            <div
                className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br ">
                {/* Animated background shapes */}
                <AnimatedShape className="bg-red-300 w-72 h-72 -top-10 -left-10"/>
                <AnimatedShape className="bg-blue-200 w-96 h-96 top-1/2 -right-20"/>
                <AnimatedShape className="bg-yellow-200 w-64 h-64 bottom-0 left-1/3"/>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: 0.4}}
                            >
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
                                    Lead Serve Inspire
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                                    Join hands with Rac Ruhuna,Where every small act of kindness leads to a big impact
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        href="/explore/member-application"
                                        className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
                                    >
                                        Join Now <ArrowRight className="h-5 w-5"/>
                                    </motion.a>
                                    <motion.a
                                        whileHover={{scale: 1.05}}
                                        whileTap={{scale: 0.95}}
                                        href="/about-us"
                                        className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-lg hover:text-white font-semibold hover:bg-gray-50 transition-all duration-300"
                                    >
                                        Learn More
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.8, delay: 0.6}}
                            className="hidden md:block"
                        >
                            <ImageCarousel images={heroImages}/>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* President's Message */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            <div className="md:w-1/3">
                                <img
                                    src={President}
                                    alt="President"
                                    className="w-full rounded-2xl shadow-xl"

                                />
                            </div>
                            <div className="md:w-2/3">
                                <Quote className="h-12 w-12 text-red-600 mb-6"/>
                                <p className="text-xl text-gray-600 mb-8 italic">
                                    "As President of RACRUH, I am proud to lead an organization that empowers youth to
                                    become agents of positive change. Our commitment to service, leadership, and
                                    fellowship creates lasting impact in our communities."
                                </p>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">Rtr. Nuhansi Gunawardana</h3>
                                    <p className="text-gray-600">President, RACRUH 2024/25</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>


                </div>
            </div>
            {/* Features Section */}
            <div className="py-24 ">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join RACRUH?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Discover the opportunities that await you at the Rotaract Club of University of Ruhuna
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Globe2}
                            title="Be part of a global movement"
                            description="Join a global network of Rotaract clubs under Rotary international, contributing to worldwide initiatives and enhancing international friendships"
                        />
                        <FeatureCard
                            icon={Users}
                            title="Develop leadership skills"
                            description="Gain valuable leadership experience through organizing events and taking on key roles within the club"
                        />
                        <FeatureCard
                            icon={Sparkles}
                            title="Make a positive impact "
                            description="Get involved in meaningful community service projects that help people and make a real difference"
                        />
                        <FeatureCard
                            icon={Network}
                            title="Build a strong network"
                            description="Engage with fellow members, professionals and influential community figures, enhancing valuable relationships that open doors to future opportunities and personal growth"
                        />
                        <FeatureCard
                            icon={BookOpenCheck}
                            title="Personal growth and learning"
                            description="Learn new skills, attend training sessions, and challenge yourself to grow in confidence, responsibility and teamwork"
                        />
                        <FeatureCard
                            icon={HeartHandshake}
                            title="Balance fun and service"
                            description="Participate in exciting projects and team-building events, while also making a positive impact on society"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section */}
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
            <div className="py-24 bg-red-500">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready to Make a Difference?</h2>
                    <motion.a
                        whileHover={{scale: 1.05}}
                        href="/explore/member-application"
                        className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
                    >
                        Join RACRUH Today <ArrowRight className="h-5 w-5"/>
                    </motion.a>
                </div>
            </div>

        </div>
    );
}
