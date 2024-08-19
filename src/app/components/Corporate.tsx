"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Corporate: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="bg-[#F26A45]">
      <div className="overflow-hidden">
        <h2
          className="font-clashdisplay-bold md:pt-[160px] pt-[100px] sm:pb-[80px] pb-[70px] lg:ps-[120px] sm:ps-[25px] ps-[20px] lg:pe-0 md:px-[81px] sm:px-[50px] px-[40px] text-white md:text-[64px] sm:text-[43px] text-[33px] font-[700] md:leading-[86.24px] leading-[50px] tracking-[0.09em]"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          CORPORATE
        </h2>
        <div
          className="flex lg:flex-row flex-col items-end justify-between mb-auto h-full md:text-[30px] sm:text-[24px] text-[22px] text-[#EFE8E9] font-[400] md:leading-[40.42px] sm:leading-[35px] leading-[30px] tracking-[9%] font-clashdisplay-regular"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <div
            className="relative flex me-auto lg:h-[1268px] w-full lg:w-1/2 lg:order-1 order-2"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="md:hidden block z-30 absolute md:top-[13%] sm:top-[14%] top-[25%] lg:left-[30%] left-2 w-[820px]">
              <span className="relative z-30 md:z-0">
                <img
                  className="md:block hidden h-fit lg:w-[1052px]  md:w-[750px] sm:w-[620px] w-[300px]"
                  src="/assets/CORPORATE.svg"
                  alt="modern"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </span>
              <span className="relative z-30">
                <img
                  className="md:block hidden lg:w-[700px] md:w-[650px] sm:w-[540px] w-[260px] md:mt-[-15px] sm:mt-[-10px] mt-[-5px]"
                  src="/assets/PROJECTS.svg"
                  alt="architecture"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
                <svg
                  className="md:hidden block sm:w-[540px] w-[260px]"
                  width="auto"
                  height="auto"
                  viewBox="0 0 1007 221"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.85 119.4C16.95 119.4 0.75 94.65 0.75 60.15C0.75 25.5 16.95 0.899993 50.85 0.899993C76.95 0.899993 96.9 18.75 97.35 45H74.7C72.9 32.85 63.9 24.45 52.65 24.45C33.75 24.45 26.7 43.2 26.7 60.15C26.7 77.1 33.75 95.85 52.65 95.85C63.9 95.85 72.9 87.45 74.7 75.3H97.35C96.9 101.55 76.95 119.4 50.85 119.4ZM174.054 0.899993C210.054 0.899993 230.454 27.6 230.454 60.15C230.454 92.4 209.604 119.4 174.054 119.4C138.504 119.4 117.654 92.4 117.654 60.15C117.654 27.9 138.504 0.899993 174.054 0.899993ZM174.054 97.05C194.904 97.05 204.354 77.7 204.354 60.15C204.354 42.6 194.904 23.25 174.054 23.25C153.054 23.25 143.604 42.6 143.604 60.15C143.604 77.7 153.054 97.05 174.054 97.05ZM254.596 117V3.3H307.696C327.946 3.3 341.746 16.2 341.746 35.4C341.746 47.55 335.446 57.45 325.396 62.55C336.196 65.1 341.746 71.55 341.746 82.65V109.05L343.696 117H319.246L316.396 109.05V84.15C316.396 78.45 313.996 74.25 304.996 74.25H279.796V117H254.596ZM279.796 53.25H299.896C310.396 53.25 315.646 48 315.646 39.15C315.646 29.7 310.696 24.45 299.896 24.45H279.796V53.25ZM394.37 117H369.17V3.3H422.27C442.52 3.3 456.32 17.7 456.32 39.3C456.32 59.85 442.22 74.25 422.27 74.25H394.37V117ZM394.37 24.45V53.25H414.47C424.97 53.25 430.22 48 430.22 39.15C430.22 29.7 425.27 24.45 414.47 24.45H394.37ZM531.107 0.899993C567.107 0.899993 587.507 27.6 587.507 60.15C587.507 92.4 566.657 119.4 531.107 119.4C495.557 119.4 474.707 92.4 474.707 60.15C474.707 27.9 495.557 0.899993 531.107 0.899993ZM531.107 97.05C551.957 97.05 561.407 77.7 561.407 60.15C561.407 42.6 551.957 23.25 531.107 23.25C510.107 23.25 500.657 42.6 500.657 60.15C500.657 77.7 510.107 97.05 531.107 97.05ZM611.648 117V3.3H664.748C684.998 3.3 698.798 16.2 698.798 35.4C698.798 47.55 692.498 57.45 682.448 62.55C693.248 65.1 698.798 71.55 698.798 82.65V109.05L700.748 117H676.298L673.448 109.05V84.15C673.448 78.45 671.048 74.25 662.048 74.25H636.848V117H611.648ZM636.848 53.25H656.948C667.448 53.25 672.698 48 672.698 39.15C672.698 29.7 667.748 24.45 656.948 24.45H636.848V53.25ZM745.273 117H718.423L755.623 3.3H785.773L822.973 117H796.123L787.423 87.9H753.973L745.273 117ZM770.623 32.25L760.273 66.9H781.123L770.623 32.25ZM823.329 3.3H910.329V24.45H879.429V117H854.229V24.45H823.329V3.3ZM931.055 117V3.3L1006.65 3.45V24.45H956.255V49.65H1000.65V70.65H956.255V95.85H1006.65V117H931.055Z"
                    fill="white"
                  />
                  <path
                    d="M29.7 218H4.5V104.3H57.6C77.85 104.3 91.65 118.7 91.65 140.3C91.65 160.85 77.55 175.25 57.6 175.25H29.7V218ZM29.7 125.45V154.25H49.8C60.3 154.25 65.55 149 65.55 140.15C65.55 130.7 60.6 125.45 49.8 125.45H29.7ZM114.387 218V104.3H167.487C187.737 104.3 201.537 117.2 201.537 136.4C201.537 148.55 195.237 158.45 185.187 163.55C195.987 166.1 201.537 172.55 201.537 183.65V210.05L203.487 218H179.037L176.187 210.05V185.15C176.187 179.45 173.787 175.25 164.787 175.25H139.587V218H114.387ZM139.587 154.25H159.687C170.187 154.25 175.437 149 175.437 140.15C175.437 130.7 170.487 125.45 159.687 125.45H139.587V154.25ZM281.011 101.9C317.011 101.9 337.411 128.6 337.411 161.15C337.411 193.4 316.561 220.4 281.011 220.4C245.461 220.4 224.611 193.4 224.611 161.15C224.611 128.9 245.461 101.9 281.011 101.9ZM281.011 198.05C301.861 198.05 311.311 178.7 311.311 161.15C311.311 143.6 301.861 124.25 281.011 124.25C260.011 124.25 250.561 143.6 250.561 161.15C250.561 178.7 260.011 198.05 281.011 198.05ZM393.803 220.4C374.153 220.4 354.803 210.95 354.803 173.15H380.753C380.753 192.05 385.553 196.85 393.353 196.85C402.953 196.85 405.503 189.35 405.503 182.6V104.3H431.453V182.6C431.453 204.65 420.053 220.4 393.803 220.4ZM459.135 218V104.3L534.735 104.45V125.45H484.335V150.65H528.735V171.65H484.335V196.85H534.735V218H459.135ZM605.557 220.4C571.657 220.4 555.457 195.65 555.457 161.15C555.457 126.5 571.657 101.9 605.557 101.9C631.657 101.9 651.607 119.75 652.057 146H629.407C627.607 133.85 618.607 125.45 607.357 125.45C588.457 125.45 581.407 144.2 581.407 161.15C581.407 178.1 588.457 196.85 607.357 196.85C618.607 196.85 627.607 188.45 629.407 176.3H652.057C651.607 202.55 631.657 220.4 605.557 220.4ZM668.911 104.3H755.911V125.45H725.011V218H699.811V125.45H668.911V104.3ZM820.137 148.55C834.687 152.45 862.887 156.35 862.887 183.65C862.887 208.85 839.787 220.4 817.437 220.4C790.437 220.4 774.687 206.75 772.737 184.4H795.537C796.887 194.3 804.087 198.05 818.787 198.05C830.337 198.05 836.937 194.6 836.937 187.7C836.937 179.6 830.187 177.65 816.237 173.75C798.237 168.65 773.487 165.35 773.487 138.65C773.487 113.6 795.537 101.9 817.887 101.9C847.587 101.9 858.387 118.85 859.587 137.9H836.937C835.887 127.85 829.737 124.25 816.987 124.25C806.487 124.25 799.587 128 799.587 134.6C799.587 141.8 804.537 144.35 820.137 148.55Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <div className="md:block hidden absolute md:top-[13%] sm:top-[14%] top-[25%] lg:left-[30%] left-2 w-[820px]">
              <span className="relative z-30 md:z-0">
                <img
                  className="h-fit lg:w-[1052px]  md:w-[750px] sm:w-[620px] w-[300px]"
                  src="/assets/CORPORATE.svg"
                  alt="modern"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                />
              </span>
              <span className="relative z-30">
                <img
                  className="lg:w-[700px] md:w-[650px] sm:w-[540px] w-[260px] md:mt-[-15px] sm:mt-[-10px] mt-[-5px]"
                  src="/assets/PROJECTS.svg"
                  alt="architecture"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              </span>
            </div>
            <img
              className="object-cover lg:h-full lg:w-full w-[80%] md:h-[80%] sm:h-[50%] h-[10%] md:w-full z-10"
              src="/assets/corporate.png"
              alt="corporate"
              data-aos="fade-up"
              data-aos-delay="600"
            />
          </div>
          <div
            className="flex flex-col gap-[60px] leading-[22px] md:leading-normal lg:px-[30px] md:px-[81px] sm:px-[25px] px-[20px] lg:pt-[120px] md:pt-[80px] pt-[40px] lg:pb-[100px] pb-0 w-full lg:w-[60%] lg:order-2 order-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              Echipa noastra de experti in constructii si amenajari interioare
              ofera servicii complete pentru companiile care îsi doresc sa
              creeze un mediu de lucru modern si eficient. De la proiectarea si
              construirea cladirilor de birouri pana la amenajarea interioara si
              exterioara a spatiilor, ne adaptam nevoilor si bugetului fiecarui
              client.
            </p>
            <p>
              Indiferent daca aveti nevoie de un spatiu nou construit sau doriti
              sa renovati si sa modernizati birourile existente, suntem aici
              pentru a va ajuta sa creati un mediu de lucru care sa inspire si
              sa motiveze angajatii.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
