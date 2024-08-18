"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerOpinion = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  // const handleGoToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Optional: smooth scrolling animation
  //   });
  // };

  return (
    <div className="bg-white flex flex-col md:gap-[80px] gap-[10px] md:py-[100px] py-[80px] lg:px-[157px] md:px-[70px] px-[25px] font-clashdisplay-regular">
      <h2
        className="font-[700] text-[#F26A45] md:text-[64px] text-[30px] tracking-[9%] md:leading-[86.24px] leading-[60px]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        OPINIA CLIENTILOR
      </h2>
      <span
        className="flex flex-col font-[400] text-black max-w-[780px] md:items-center items-start md:justify-center justify-start"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h3 className="md:text-[64px] text-[25px] md:leading-[86.24px] leading-[32px] tracking-[9%]">
          “Printre putinele firme serioase ramase pe piata”
        </h3>
        <p className="flex items-end justify-end md:ms-auto ms-0 md:me-0 me-auto italic md:text-[30px] text-[18px] md:leading-[40.42px] leading-[27px] tracking-[9%]">
          Paul Andrei
        </p>
      </span>
      {/* <div className="flex w-full justify-end ms-auto">
        <button onClick={handleGoToTop} data-aos="fade-up" data-aos-delay="900">
          <img src="/assets/up-arrow.svg" alt="Go to top" width="68.38px" />
        </button>
      </div> */}
    </div>
  );
};

export default CustomerOpinion;
