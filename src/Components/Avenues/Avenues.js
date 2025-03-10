import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import 'intersection-observer';
import '../components.css';

// Importing images
import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.JPG';
import CommunityServiceImage from '../../Images/CommunityService.jpg';
import ClubServiceImage from '../../Images/ClubService.jpg';
import SportsServiceImage from '../../Images/SportsService.jpg';
import PublicRelationsImage from '../../Images/PublicRelations.png';
import ProfessionalDevelopmentImage from '../../Images/ProfessionalDevelopment.jpg';
import cs_seaturtel1 from "../../Images/SeaTurl 2.0/1.JPG";
import cs_seaturtel2 from "../../Images/SeaTurl 2.0/2.JPG";
import cs_seaturtel3 from "../../Images/SeaTurl 2.0/3.JPG";
import cs_seaturtel4 from "../../Images/SeaTurl 2.0/4.JPG";
import cs_seaturtel5 from "../../Images/SeaTurl 2.0/5.JPG";
import cs_seaturtel6 from "../../Images/SeaTurl 2.0/6.JPG";
import cs_seaturtel7 from "../../Images/SeaTurl 2.0/7.JPG";
import cs_seaturtel8 from "../../Images/SeaTurl 2.0/8.JPG";
import cs_seaturtel9 from "../../Images/SeaTurl 2.0/9.JPG";
import cs_seaturtel10 from "../../Images/SeaTurl 2.0/10.JPG";
import cs_seaturtel11 from "../../Images/SeaTurl 2.0/11.JPG";
import es_ctopia1 from "../../Images/cTopia/1.jpg";
import es_ctopia2 from "../../Images/cTopia/2.jpg";
import es_ctopia3 from "../../Images/cTopia/3.jpg";
import es_ctopia4 from "../../Images/cTopia/4.jpg";
import es_ctopia5 from "../../Images/cTopia/5.jpg";
import es_ctopia6 from "../../Images/cTopia/6.jpg";
import es_ctopia7 from "../../Images/cTopia/7.jpg";
import cbs_witchfest1 from "../../Images/WitchFest/1.jpg"
import cbs_witchfest2 from "../../Images/WitchFest/2.jpg"
import cbs_witchfest3 from "../../Images/WitchFest/3.jpg"
import cbs_witchfest4 from "../../Images/WitchFest/4.jpg"
import cbs_witchfest5 from "../../Images/WitchFest/5.jpg"
import cbs_witchfest6 from "../../Images/WitchFest/6.jpg"
import cbs_witchfest7 from "../../Images/WitchFest/7.jpg"
import cbs_witchfest8 from "../../Images/WitchFest/8.jpg"
import cbs_witchfest9 from "../../Images/WitchFest/9.jpg"
import cs_anamnesis1 from "../../Images/Anamnesis/1.jpg"
import cs_anamnesis2 from "../../Images/Anamnesis/2.jpg"
import cs_anamnesis3 from "../../Images/Anamnesis/3.jpg"
import cs_anamnesis4 from "../../Images/Anamnesis/4.jpg"
import cs_anamnesis5 from "../../Images/Anamnesis/5.jpg"
import cs_anamnesis6 from "../../Images/Anamnesis/6.jpg"
import cs_anamnesis7 from "../../Images/Anamnesis/7.jpg"
import cs_anamnesis8 from "../../Images/Anamnesis/8.jpg"
import cs_anamnesis9 from "../../Images/Anamnesis/9.jpg"
import cs_anamnesis10 from "../../Images/Anamnesis/10.jpg"
import cs_anamnesis11 from "../../Images/Anamnesis/11.jpg"
import cs_1ic1 from "../../Images/First Installation Ceremony/1.jpg"
import cs_1ic2 from "../../Images/First Installation Ceremony/2.jpg"
import cs_1ic3 from "../../Images/First Installation Ceremony/3.jpg"
import cs_1ic4 from "../../Images/First Installation Ceremony/4.jpg"
import cs_1ic5 from "../../Images/First Installation Ceremony/5.jpg"
import cs_1ic6 from "../../Images/First Installation Ceremony/6.jpg"
import cs_1ic7 from "../../Images/First Installation Ceremony/7.jpg"
import cs_1ic8 from "../../Images/First Installation Ceremony/8.jpg"
import cs_1ic9 from "../../Images/First Installation Ceremony/9.jpg"
import cs_1ic10 from "../../Images/First Installation Ceremony/10.jpg"
import cs_1ic11 from "../../Images/First Installation Ceremony/11.jpg"
import cs_1ic12 from "../../Images/First Installation Ceremony/12.jpg"





const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const generateSquares = (images) => {
    return shuffle(images).map((src, index) => (
        <motion.div
            key={index}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = ({ images }) => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares(images));

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares(images));

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 h-[700px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default function Avenues(props) {
    const sectionsRef = useRef([]);

    const [activeContent, setActiveContent] = useState(null);

    const showContent = (contentId) => {
        setActiveContent(contentId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const gotoavenues = () => {
        setActiveContent(null);
        console.log(activeContent);
        document.location.reload();
    }
    useEffect(() => {
        const sections = sectionsRef.current;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((section) => {
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    const services = [
        {
            id: 0,
            imageUrl: InternationalServiceImage,
            avenue: 'International Service Avenue',
            description: 'The International Service Avenue exemplifies global reach, going beyond boundaries to help the international community. Projects in this avenue focus on cultural exchange, facilitating mutual understanding, and engaging in international service projects. By connecting globally, this avenue contributes to positive change on a broader scale.',
            projects: [
                {
                    title: 'culSpace',
                    description: '"culSpace" project was held via an online platform through the International Service Avenue. The main purpose of this project was to let the members explore cultural differences with the help of interactive activities. Project objective was to enhance engagement of the avenue members with international clubs.',
                    images: [
                        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'SoulSync',
                    description: '“SoulSync” was a project initiated through the International Service Avenue of the Rotaract Club of the University of Ruhuna. It was successfully conducted through the online platform via zoom with more than 60 participants on 12th of November 2023. The main purpose was to raise awareness about mental health with the help of professionals. Rotaract club of Dhaka North Bangladesh was the co-partner for this project. Project objectives were to raise awareness about mental health issues through open conversations, to provide connection with professionals, and to create a safe and supportive background for individuals who want to share their experiences.',
                    images: [
                        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
            ]
        },
        {
            id: 1,
            imageUrl: EnvironmentalServiceImage,
            avenue: 'Environmental Service Avenue',
            description: '',
            projects: [
                {
                    title: 'cTopia',
                    description: '“cTopia” was a mangrove tree plantation campaign organized by the Environmental Service Avenue of the club. The main goal was to protect the areas which were too exposed from the waves and erosion. The key objectives were to create an eco-friendly environment for future generations by reducing the emission of carbon by planting mangroves. The project was successfully completed.',
                    images: [
                        es_ctopia1,es_ctopia2,es_ctopia3,es_ctopia4,es_ctopia5,es_ctopia6,es_ctopia7,
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'Seaturl',
                    description: '“Seaturl” was another project conducted under the Community Service Avenue. This project was completed in three main phases. There were an awareness session, a field visit to Induruwa Turtle Conservation Centre, and a beach cleanup. Project objectives were to reduce the plastic usage in Sri Lanka and to save the lives of the turtles.',
                    images: [
                        cs_seaturtel1, cs_seaturtel2,cs_seaturtel3,cs_seaturtel4,cs_seaturtel5,cs_seaturtel6,cs_seaturtel7,cs_seaturtel8,cs_seaturtel9,cs_seaturtel10,cs_seaturtel11,
                        // add more URLs as needed
                    ]
                },
            ]
        },
        {
            id: 2,
            imageUrl: CommunityServiceImage,
            avenue: 'Community Service Avenue',
            description: 'The Community Service Avenue identifies critical societal issues and customizes projects to meet people’s needs, creating a better and happier society regardless of demographic differences to improve the quality of life for the local community or university campuses, involving all or most club members. The Environmental Service Avenue also operates under the Community Service Avenue, providing the opportunity to engage with nature, aiming to establish sustainable initiatives and preserve sensitive ecosystems. This avenue fosters community growth and environmental awareness within the club and society.',
            projects: [
                {
                    title: 'Mom',
                    description: 'Project “Mom” was the first project conducted by the Community Service Avenue of University of Ruhuna for the Rotaract year 2023-24. It was such a heartwarming project focusing on health, safety, and community wellbeing. The main goal was to provide hampers of necessity for selected pregnant mothers in Matara district who were suffering from economic and financial challenges. The project was successfully wrapped with a physical event held on 23rd of September 2023 in the Shrine of Our Lady of Matara.',
                    images: [
                        "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'සුවර්ෂා',
                    description: 'Project “සුවර්ෂා” was organized by the Rotaract Club of University of Ruhuna to improve the infrastructure facilities in rural schools. This project was carried out in three phases. First phase was done through a shramadana campaign & a book donation campaign in collaboration with project “අලුත් පාඨකයා” at a selected rural school. In the second phase, a street musical performance at three different locations in the Southern Province were organized. As the final phase, there was a shramadana campaign & donated some infrastructure facilities to the selected rural school. The objectives of the project were to improve the quality of education for students in rural areas by providing better infrastructure facilities in selected schools, to promote community involvement in the improvement of rural schools, to raise awareness about the importance of education in rural areas, to provide additional learning resources to selected schools and promote literacy, to provide access to modern educational technologies and resources for students in rural areas and to foster a sense of social responsibility and civic engagement among project participants and stakeholders.',
                    images: [
                        "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'EDUQUOR 2.0',
                    description: 'Another successful project which was conducted under Community Service Avenue was “EDUQUOR 2.0” aimed to share the knowledge and provide quality learning opportunities to students who will face the ordinary-level examinations in 2023 under low facilities through a series of seminars on subjects of Mathematics, English & Science. Two schools in the Matara district were selected. They are Kamburupitiya Maha Vidyalaya & Kekanadura Wijayabha Vidyalaya. Four seminars were conducted among those schools. Objectives of this project were to engage the club with the community, to support students who studies under low facilities, to bring confidence to those who are facing GCE ordinary level examination, to enhance the academic skills of the students and to improve their performances in these subjects, to instill the students a sense of curiosity and enthusiasm towards education and learning, to create a positive impact in the community by empowering young students to succeed in their academic pursuits.',
                    images: [
                        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
                        "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
                        // add more URLs as needed
                    ]
                },
            ]
        },
        {
            id: 3,
            imageUrl: ClubServiceImage,
            avenue: 'Club Service Avenue',
            description: 'The Club Service Avenue focuses on the logistical tasks that create an outstanding club experience for both current and newly inducted members. This avenue ensures that our clubs have active, engaged members who can provide service to their communities and attract new members. Under this avenue, the Rotaract Club of the University of Ruhuna organizes activities within our own club, fostering fellowship and leadership development. The Sports and Recreation Service Avenue also operates under the Club Service Avenue, promoting physical well-being, fostering camaraderie, and encouraging an active lifestyle among its members through various sports events, fitness challenges, and recreational activities.',
            projects: [
                {
                    title: 'First Installation Ceremony',
                    description: '“ First installation ceremony ”of the Rotaract club of Ruhuna was held on April & the  board was officially appointed.',
                    images: [
                        cs_1ic1,cs_1ic2,cs_1ic3,cs_1ic4,cs_1ic5,cs_1ic6,cs_1ic7,cs_1ic8,cs_1ic9,cs_1ic10,cs_1ic11,cs_1ic12,
                    ]
                },
                {
                    title: 'Anamnesis',
                    description: 'Project “Anamnesis ” which was conducted under the Club Service Avenue was the first physical gathering conducted under the theme of awakening the hidden child in every undergraduate of the University of Ruhuna. That was conducted on 1st of October 2023 to celebrate the first anniversary of the Rotaract Club of University of Ruhuna with a cake & sharing those blissful moments with others.',
                    images: [
                        cs_anamnesis1, cs_anamnesis2, cs_anamnesis3, cs_anamnesis4, cs_anamnesis5, cs_anamnesis6, cs_anamnesis7,cs_anamnesis8, cs_anamnesis9, cs_anamnesis10, cs_anamnesis11,
                    ]
                },
                {
                    title: 'WITCHFEST',
                    description: 'Project “WITCHFEST” was the Halloween themed party organized by the Club Service Avenue. It was held on University Premises in Wellamadama. The spooky evening was filled with lots of fun activities & sessions. Main objective was to strengthen the bonds among the club members by providing a fun-filled experience.',
                    images: [
                        cbs_witchfest1,cbs_witchfest2,cbs_witchfest3,cbs_witchfest4,cbs_witchfest5,cbs_witchfest6,cbs_witchfest7,cbs_witchfest8,cbs_witchfest9,
                        // add more URLs as needed
                    ]
                },
            ]
        },
        {
            id: 4,
            imageUrl: SportsServiceImage,
            avenue: 'Sports Service Avenue',
            description: '',
            projects: [
                {
                    title: 'Project 1',
                    description: 'Description of Project 1',
                    images: [
                        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'Project 2',
                    description: 'Description of Project 2',
                    images: [
                        "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
                        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'Project 3',
                    description: 'Description of Project 3',
                    images: [
                        "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        // add more URLs as needed
                    ]
                },
            ]
        },
        {
            id: 5,
            imageUrl: PublicRelationsImage,
            avenue: 'Public Relations Avenue',
            description: 'The Public Relations Avenue of the Rotaract Club of the University of Ruhuna is instrumental in shaping the club\'s image and building connections. This avenue raises awareness, promotes initiatives, and collaborates effectively within members of the RACRUHUNA. We leverage top-notch strategies across platforms like WhatsApp, Facebook, Instagram, YouTube, LinkedIn, and TikTok to engage the public and maintain a positive image for the club.',
            projects: [
                {
                    title: 'Project 1',
                    description: 'Description of Project 1',
                    images: [
                        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'Project 2',
                    description: 'Description of Project 2',
                    images: [
                        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'Project 3',
                    description: 'Description of Project 3',
                    images: [
                        "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
                        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        // add more URLs as needed
                    ]
                },
            ]
        },
        {
            id: 6,
            imageUrl: ProfessionalDevelopmentImage,
            avenue: 'Professional Development Avenue',
            description: 'The Professional Development Avenue empowers undergraduate communities to discover and pursue their dream careers, transforming them into qualified professionals with essential skills and competencies. This focus extends beyond individual clubs to include other undergraduate communities in Sri Lanka and beyond.',
            projects: [
                {
                    title: 'Creative Hub Level 02',
                    description: '“Creative Hub Level 02” was a project carried by the Professional Development Avenue of The University of Ruhuna. AI & content creation, branding, graphic designing & video editing were the main topics touched in this workshop. The ultimate goal of Creative Hub Level 02 was to strengthen the knowledge of the undergraduates in the above-mentioned topics as well as other IT-related topics. The key objectives of the project were to widen the knowledge of participants about modern technology and its uses which will be beneficial throughout their career pathways, to make the Rotaract club an arch where rotaractors & non-rotaractors can connect to advance their knowledge in the latest fields. The event was conducted by the experts of the IT industry as a physical workshop in University Premises on the 4th of August 2023.',
                    images: [
                        "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'The regional Tech Summit 2023',
                    description: '“The regional Tech Summit 2023” was a collaborative project between the Professional Development Avenue of the Rotaract Club of the University of Ruhuna & the ICTA (The information and Communication Technology Agency) This project served as a platform for tech enthusiasts who were seeking knowledge in many streams such as Management, Science, Arts and Engineering within the IT domain. The ultimate goal of this project was to give accurate directions for the individuals on their career pathways by offering them numerous opportunities. The main objectives of the project were to provide better career guidance for the participants in the IT industry by enhancing their soft skills and technical skills, to uplift the collaborations between the professionals and participants by creating a network connection, to connect the job seekers with the professionals and create employment opportunities in the IT sector by conveying various sessions and workshops. The project was held successfully on the 26th of August 2023 as a physical event.',
                    images: [
                        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
                        "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
                        // add more URLs as needed
                    ]
                },
                {
                    title: 'Project 3',
                    description: 'Description of Project 3',
                    images: [
                        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
                        "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                        // add more URLs as needed
                    ]
                },
            ]
        },
    ];


    return (
        <div className="blogs">
            {activeContent === null ? (
                <>
                    {services.map((service, index) => (
                        <div
                            id={service.id}
                            key={service.id}
                            className={`mx-5 my-10 sm:mx-10 md:mx-5 lg:mx-28 mb-10 flex flex-col lg:flex-row  ${
                                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            } section`}
                            ref={(el) => (sectionsRef.current[index] = el)}
                        >
                            <div
                                className="bg-slate-800 w-full lg:w-1/2 h-96 flex items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                <img
                                    src={service.imageUrl}
                                    alt={service.avenue}
                                    className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                                />
                            </div>
                            <div
                                className="bg-white w-full lg:w-1/2 h-full flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-5">
                                <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                                <p className="mt-5 text-gray-700">{service.description}</p>
                                <div className="mt-10">
                                    <button
                                        onClick={() => showContent(service.id)}
                                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                services
                    .filter((service) => service.id === activeContent)
                    .map((service, index) => (
                        <div
                            key={service.id}
                            className="mx-5 sm:mx-10 md:mx-5 lg:mx-28 mb-10 flex flex-col "
                        >
                            <div
                                className={`flex flex-col lg:flex-row ${
                                    service.id % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                                ref={(el) => (sectionsRef.current[index] = el)}
                            >
                                <div
                                    className="bg-slate-800 w-full lg:w-1/2 md:h-96 flex items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                                    <img
                                        src={service.imageUrl}
                                        alt={service.avenue}
                                        className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                                    />
                                </div>
                                <div
                                    className="bg-white w-full lg:w-1/2 md:h-96 flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-5">
                                    <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                                    <p className="mt-5 text-gray-700">{service.description}</p>
                                    <div className="mt-10">
                                        <button
                                            onClick={gotoavenues}
                                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                        >
                                            Back
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {service.projects.map((project, idx) => (
                                <section
                                    key={idx}
                                    className="w-full px-10 py-12 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-auto"
                                >
                                    <div>
                                        <h3 className="text-4xl md:text-6xl font-semibold">
                                            {project.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                                            {project.description}
                                        </p>
                                    </div>
                                    <ShuffleGrid images={project.images}/>
                                </section>
                            ))}
                        </div>
                    ))
            )}
        </div>


    );
}
