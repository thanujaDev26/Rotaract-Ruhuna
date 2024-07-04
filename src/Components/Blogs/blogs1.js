import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className="w-full md:flex md:items-center md:justify-center mb-10">
            <div className="md:w-2/3 h-[450px] mx-auto mr-3 relative rounded-md shadow-lg">
                <Slider {...settings}>
                    {
                        images.map((img, index) => (
                            <div key={index}
                                 style={{backgroundImage: `url(${img})`}}
                                 className="rounded-md"
                            >
                                <img src={img} alt="Slide 1"
                                     className="w-full h-[440px] bg-cover bg-center rounded-t-md"/>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <div className="md:w-1/3 h-[450px] mx-auto flex md:flex-col justify-between items-center">
                <div className="w-full h-1/2 bg-trans relative shadow-lg overflow-hidden transform
                                            transition-transform duration-300 hover:scale-105 border-2 border-red rounded-lg"></div>
                <div className="w-full h-1/2 bg-trans relative shadow-lg overflow-hidden transform
                                            transition-transform duration-300 hover:scale-105 border-2 border-red rounded-lg"></div>
            </div>
        </div>
    );
};

export default BlogsOne;