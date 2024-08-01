"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { IoPauseOutline, IoPlayOutline } from "react-icons/io5";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <div className="w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="/assets/hero.mp4"
            className="h-screen"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay for video */}
      <div className="gradident absolute inset-0 h-screen" />

      {/* Content on top of video */}
      <div className="absolute inset-0 flex items-center justify-center mt-40">
        <div className="text-white flex flex-col gap-5 lg:gap-10 w-full 2xl:px-[100px] lg:px-[50px] px-4 pt-[100px] pb-[100px]">
          <Image
            src="/assets/des.svg"
            alt="title"
            width={1000}
            className=""
            height={10}
            data-aos="fade-up"
            data-aos-delay="500"
          />
          <div className="flex items-end justify-end max-w-[1000px] ">
            <div
              className="relative max-w-[1000px] flex items-start justify-end lg:justify-between  w-full"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Image
                src="/assets/sroll.svg"
                alt="Image"
                width={80}
                height={10}
                className="lg:block hidden cursor-pointer"
                // onClick={handleGoToTop}
              />
              <div className="relative">
                <Image
                  src="/assets/IMPREUNA.svg"
                  alt="text"
                  width={400}
                  height={10}
                  className="lg:w-[400px] w-[200px]"
                />
                <Image
                  src="/assets/line.svg"
                  alt="text"
                  width={100}
                  height={10}
                  className="absolute -bottom-14 lg:-bottom-20 lg:w-[400px] w-[200px]"
                />
              </div>
            </div>
          </div>

          <div
            className="w-full flex lg:flex-row flex-col-reverse justify-between mt-10"
            data-aos="fade-up"
          >
            <Link href="/contact">
              <h1 className="text-[20px] md:text-[30px] lg:text-[35px] leading-[49px] font-clashdisplay-regular flex items-center gap-1.5">
                Hai sa discutam proiectul tau
                <IoIosArrowRoundForward className="text-3xl lg:text-5xl" />
              </h1>
            </Link>
            <div className="flex items-center gap-1">
              <button
                className="font-clashdisplay-regular hover:scale-110 duration-300 flex items-center text-[25px] md:text-[35px] leading-[49px]"
                onClick={togglePlayPause}
              >
                {!isPlaying ? "Play" : "Pause"}

                {!isPlaying ? (
                  <IoPlayOutline className="h-[34px] md:h-[54px] w-auto" />
                ) : (
                  <IoPauseOutline className="h-[34px] md:h-[54px] w-auto" />
                )}
              </button>
            </div>
          </div>

          <button
            className="flex items-center justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/assets/sroll.svg"
              alt="Image"
              width={50}
              height={10}
              className="block lg:hidden"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
