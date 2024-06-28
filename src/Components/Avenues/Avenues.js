import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import 'intersection-observer';
import '../components.css';


import InternationalServiceImage from '../../Images/InternationalService.png';
import EnvironmentalServiceImage from '../../Images/EnvironmentalService.png';
import CommunityServiceImage from '../../Images/CommunityService.png';
import ClubServiceImage from '../../Images/ClubService.png';
import SportsServiceImage from '../../Images/SportsService.png';
import PublicRelationsImage from '../../Images/PublicRelations.png';
import ProfessionalDevelopmentImage from '../../Images/ProfessionalDevelopment.png';

export default function Avenues(props) {
  const sectionsRef = useRef([]);

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
    { imageUrl: InternationalServiceImage, avenue: 'International Service Avenue' , to:'../avenues/international-service'},
    { imageUrl: EnvironmentalServiceImage, avenue: 'Environmental Service Avenue' },
    { imageUrl: CommunityServiceImage, avenue: 'Community Service Avenue' },
    { imageUrl: ClubServiceImage, avenue: 'Club Service Avenue' },
    { imageUrl: SportsServiceImage, avenue: 'Sports Service Avenue' },
    { imageUrl: PublicRelationsImage, avenue: 'Public Relations Avenue' },
    { imageUrl: ProfessionalDevelopmentImage, avenue: 'Professional Development Avenue' },
  ];

  return (
      <div className="blogs">
        {services.map((service, index) => (
            <div
                key={index}
                className="mx-5 sm:mx-10 md:mx-5 lg:mx-5 mb-10 flex flex-col md:flex-row section"
                ref={(el) => (sectionsRef.current[index] = el)}
            >
              {index % 2 === 0 ? (
                  <>
                    <div className="bg-slate-800 w-full md:w-1/2 h-96 flex items-center justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                      <img src={service.imageUrl} alt={service.avenue} className="h-full w-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />
                    </div>
                    <div className="bg-white w-full md:w-1/2 h-96 flex flex-col justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none p-5">
                      <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                      <p className="mt-5 text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <div className="mt-10">
                        <Link
                            to={service.to}
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          Projects
                        </Link>
                      </div>
                    </div>
                  </>
              ) : (
                  <>
                    <div className="bg-white w-full md:w-1/2 h-96 flex flex-col justify-center rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-5">
                      <h1 className="font-semibold text-4xl">{service.avenue}</h1>
                      <p className="mt-5 text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </p>
                      <div className="mt-10">
                        <Link
                            to={'/blog'}
                            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        >
                          Projects
                        </Link>
                      </div>
                    </div>
                    <div className="bg-slate-800 w-full md:w-1/2 h-96 flex items-center justify-center rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                      <img src={service.imageUrl} alt={service.avenue} className="h-full w-full object-cover rounded-b-xl md:rounded-r-xl md:rounded-bl-none" />
                    </div>
                  </>
              )}
            </div>
        ))}
        <div className="h-20 mt-20"></div>
      </div>
  );
}
