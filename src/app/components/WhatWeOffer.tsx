"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -right-52 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/assets/arrow-right.svg"
        alt="Right Arrow"
        width={150}
        height={50}
      />
    </div>
  );
};

const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 -left-52 z-30 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src="/assets/arrow-lef.svg"
        alt="Left Arrow"
        width={150}
        height={50}
      />
    </div>
  );
};

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-black px-4 lg:px-[40px] 2xl:px-[60px] text-white py-[100px] overflow-hidden">
      <h1
        className="text-[#F26A45] font-clashdisplay-bold text-[50px] leading-[86px]"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        CE OFERIM
      </h1>

      {/* Slick slider */}
      <div
        className="flex flex-col justify-center max-w-[900px] mx-auto "
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <Slider {...settings}>
          <div className="slide-content">
            <Image
              src="/assets/what-we-offer.svg"
              alt="Slide 1"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
            <div className="text-content mt-4">
              <h2
                className="sm:text-[40px] text-[31px] leading-[67px] tracking-[0.09em] font-clashdisplay-semibold"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                CONSTRUCTII
              </h2>
              <p
                className="sm:text-[35px] text-[20px] sm:leading-[50px] leading-[40px] tracking-[0.09em] font-clashdisplay-regular"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Transformam viziunea in realitate. Oferim servicii complete de
                constructii si amenajari, de la primele idei pana la predarea
                cheii.
              </p>
            </div>
          </div>
          <div className="slide-content">
            <Image
              src="/assets/what-we-offer.svg"
              alt="Slide 2"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
            <div className="text-content mt-4">
              <h2
                className="sm:text-[40px] text-[31px] leading-[67px] tracking-[0.09em] font-clashdisplay-semibold"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                PROIECTARE
              </h2>
              <p
                className="sm:text-[35px] text-[20px] sm:leading-[50px] leading-[40px] tracking-[0.09em] font-clashdisplay-regular"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Oferim solutii complete de proiectare si design, personalizate
                in functie de nevoile si dorintele tale.
              </p>
            </div>
          </div>
          <div className="slide-content">
            <Image
              src="/assets/what-we-offer.svg"
              alt="Slide 3"
              width={1000}
              height={600}
              className="w-full h-auto"
            />
            <div className="text-content mt-4">
              <h2
                className="sm:text-[40px] text-[31px] leading-[67px] tracking-[0.09em] font-clashdisplay-semibold"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                CONSULTANTA
              </h2>
              <p
                className="sm:text-[35px] text-[20px] sm:leading-[50px] leading-[40px] tracking-[0.09em] font-clashdisplay-regular"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Te consiliem la fiecare pas, pentru a asigura succesul
                proiectului tau.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      {/* End */}
    </div>
  );
};

export default WhatWeOffer;
