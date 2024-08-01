"use client";
import Link from "next/link";
import React from "react";
import "aos/dist/aos.css"; // Import AOS styles if needed
import AOS from "aos"; // Import AOS
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="flex items-center bg-[#000000] h-screen overflow-x-hidden relative">
      <div className="w-full h-screen flex items-center justify-end relative">
        <div className="w-full h-screen">
          <img
            data-aos="fade-in" // AOS animation
            data-aos-delay="200" // Delay before the animation starts
            height={"100%"}
            width={"100%"}
            className="object-cover md:p-[30px] sm:p-[20px] p-[10px] h-[125%] w-full"
            src="/assets/contact-img2.svg"
            alt="contact-img"
          />
          <div
            data-aos="fade-up" // AOS animation
            data-aos-delay="500" // Delay before the animation starts
            className="w-full h-[125%] absolute top-0 flex flex-col items-center justify-center sm:gap-[30px] gap-[18px] px-[30px]"
          >
            <h1
              data-aos="zoom-in" // AOS animation
              data-aos-delay="700" // Delay before the animation starts
              className="max-w-[800px] text-center justify-center text-white lg:text-[121px] md:text-[105px] sm:text-[89px] text-[40px] font-[400] lg:leading-[119.31px] md:leading-[110.31px] sm:leading-[100px] leading-[50px]"
            >
              Iti multumim pentru interes!
            </h1>
            <p
              data-aos="zoom-in" // AOS animation
              data-aos-delay="900" // Delay before the animation starts
              className="text-white lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px] lg:leading-[49.2px] md:leading-[35px] leading-[25px] font-[400] font-clashdisplay-regular"
            >
              Te vom contacta in curand.
            </p>
            <Link
              href="/contact"
              className="font-clashdisplay-regular lg:px-[40px] sm:px-[30px] px-[20px] lg:py-[20px] md:py-[15px] sm:py-[15px] py-[10px] text-white md:text-[40px] sm:text-[34px] text-[28px] border-2 border-[#FFFFFF1A] font-[400] leading-[49.2px] bg-[#FFFFFF52] hover:bg-[#ffffff62] rounded-[70px] transition duration-300 ease-in-out"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
