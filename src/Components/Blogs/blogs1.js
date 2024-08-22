import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./data2.json";

const images = [
    'https://img.freepik.com/free-photo/activists-hugging-walking-with-trash-bags-woods_23-2147826354.jpg?t=st=1720120084~exp=1720123684~hmac=bfea9c5a1bcfdef080c4186ea48fded8454150ed1228ba013dec599a7995063f&w=740',
    'https://img.freepik.com/free-photo/helping-hands-volunteer-support-community-service-graphic_53876-64956.jpg?t=st=1720120110~exp=1720123710~hmac=cc15fb6d963a6e7f5411a008b5f9871d2419b4e9107e380c22cc3608c2e87bbd&w=740',
    'https://img.freepik.com/free-photo/cross-flames-playing-with-sparklers-rooftop-group-young-beautiful-friends_146671-14637.jpg?t=st=1720120205~exp=1720123805~hmac=20af44c1dd5b4b427b69430efde6b4391fcb400745b05b652301a03a5c04e8ab&w=740',
];

const BlogsOne = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="w-full lg:flex lg:items-center lg:justify-center mb-10 gap-3">
            <div className="lg:w-2/3 h-auto mx-auto relative rounded-md shadow-lg mb-8 lg:mb-0">
                <Slider {...settings}>
                    {
                        images.map((img, index) => (
                            <div
                                key={index}
                                style={{backgroundImage: `url(${img})`}}
                                className="rounded-md"
                            >
                                <img src={img} alt="Slide 1"
                                     className="w-full h-[250px] sm:h-[300px] md:h-[440px] 2xl:h-[600px] bg-cover bg-center rounded-t-md"/>
                            </div>
                        ))
                    }
                </Slider>
                <div className="w-full h-full p-2 absolute inset-0 bg-opacity-50 text-white-1 bg-text-b rounded-md
                                    opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold my-2">Blogs</h1>
                    <p className="text-base leading-4 my-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <button className="bg-pink px-5 py-1 rounded-xl my-2">
                        See more...
                    </button>
                </div>
            </div>
            <div className="lg:w-1/3 relative grid grid-cols-1 gap-3 blog1-outer">
                {Data.map((data, index) => (
                    <div key={index} className="h-auto rounded-md bg-trans relative shadow-lg overflow-hidden transform
                                            transition-transform duration-300 hover:scale-105">
                        <div
                            className="w-full h-52 lg:h-[217px] 2xl:h-[294px] bg-no-repeat bg-cover bg-center rounded-t-md"
                            style={{backgroundImage: `url(${data.img})`}}>
                        </div>
                        <div className="w-full h-full text-center p-2 absolute inset-0 bg-opacity-75 bg-text-b text-white-1
                        opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                            <h1 className="text-xl font-bold my-2">{data.name}</h1>
                            <p className="text-base leading-4 my-2">{data.description}</p>
                            <button className="bg-pink px-5 py-1 rounded-xl my-2">See more...</button>
                        </div>
                    </div>))}
            </div>
        </div>
    );
};

export default BlogsOne;