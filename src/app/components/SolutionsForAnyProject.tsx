"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const SolutionsForAnyProject: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div
      className="bg-white px-4 lg:px-[40px] 2xl:px-[60px] py-[100px]"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h1 className="text-[35px] md:text-[50px] leading-[50px] sm:leading-[60px] lg:leading-[86px] text-[#F26A45] tracking-[0.09em] font-clashdisplay-bold uppercase">
        Solutii pentru ORICE PROIECT
      </h1>
      <div
        className="mt-[70px] flex justify-between lg:items-start items-center lg:flex-row flex-col gap-[60px]"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Image
          src="/assets/solutions-for-any-project.svg"
          alt="Image"
          width={500}
          height={754}
          className=""
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        <div data-aos="fade-up" data-aos-delay="500">
          <p className="font-clashdisplay-regular text-[24px] md:text-[28px] tracking-[0.07em] mt-10">
            <span className="font-clashdisplay-bold text-[30px] md:text-[40px]">
              Ferandalex
            </span>{" "}
            ofera servicii complete si adaptate nevoilor fiecarui client, pentru
            proiecte de constructii si amenajari interioare si exterioare.
            Abordarea noastra holistica acopera toate etapele, de la concept si
            proiectare, la executie si finalizare.
          </p>
          <p className="font-clashdisplay-regular text-[24px] md:text-[28px] tracking-[0.07em] mt-10">
            Echipa noastra de specialisti cu experienta vasta in domeniu
            utilizeaza materiale de calitate superioara si tehnologii moderne
            pentru a asigura rezultatele dorite. Suntem dedicati sa transformam
            viziunea dumneavoastra într-un spatiu functional si elegant, adaptat
            perfect stilului si nevoilor dumneavoastra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionsForAnyProject;
