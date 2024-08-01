"use client";
import React from "react";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GoToTopButton from "../components/GoToTopButton";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="text-white font-clashdisplay-regular">
      <section className="relative h-[400px] md:h-full w-full">
        <img
          src="/assets/section-shape.png"
          alt=""
          className="absolute md:hidden top-0 md:-top-10 left-0 h-[400px] md:h-full w-full"
        />
        <div className="md:hidden h-[400px] w-full overflow-hidden">
          <img
            src="/assets/about-section-bg.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="hidden md:block h-full w-full overflow-hidden">
          <img
            src="/assets/about-background.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <img
          src="/assets/DESPRE NOI.svg"
          alt=""
          className="absolute top-[65%] lg:top-[60%]  ml-[5%] w-[60%] lg:w-[70%]"
          data-aos="fade-up"
        />
      </section>

      <section
        className="grid md:grid-cols-2 lg:pt-[200px] items-center justify-center gap-[80px] px-[5%] lg:px-0 lg:pl-[5%] max-h-[850px] py-[5%]"
        data-aos="fade-up"
      >
        <div>
          <h3
            className="text-[40px] lg:text-[100px] leading-[123px]"
            data-aos="fade-up"
          >
            Misiunea noastra
          </h3>
          <p
            className="text-[20px] lg:text-[40px] leading-[30px] md:leading-[50px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Suntem o echipa de profesionisti pasionati, dedicati sa construim
            viitorul. Cu o experienta bogata, ne angajam sa depasim asteptarile
            si sa transformam visele in realitate.
          </p>
        </div>

        <div
          className="hidden lg:block px-0 h-full w-full lg:rounded-l-[77px] overflow-hidden"
          data-aos="fade-up"
        >
          <img
            src="/assets/about-section-bg1.jpeg"
            className="h-full w-full object-contain"
          />
        </div>

        <div
          className="lg:hidden w-[90%] h-full rounded-[50px] mx-auto overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="/assets/about-section-bg1.jpeg"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section
        className="space-y-[40px] lg:pt-[300px] md:space-y-[60px] lg:space-y-[150px] px-[10%]"
        data-aos="fade-up"
      >
        <h2
          className="text-[40px] lg:text-[100px] leading-[123px] text-center"
          data-aos="fade-up"
        >
          Cine suntem
        </h2>
        <p
          className="text-[20px] lg:text-[40px] leading-[30px] md:leading-[50px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Ferandalex, o companie fondată în 2018 de un grup de profesioniști
          pasionați, a pornit cu o viziune clară: construirea unui viitor mai
          bun. <br /> <br /> De la început, Ferandalex s-a concentrat pe
          calitatea excepțională a lucrărilor și pe abordarea transparentă a
          proiectelor. Cu o echipă de arhitecți, ingineri și tehnicieni
          altamente calificați, compania a reușit să construiască case,
          apartamente, clădiri de birouri și spații comerciale care au depășit
          așteptările clienților.
          <br />
          <br />
          La Ferandalex, suntem mai mult decât o companie; suntem o familie - o
          familie unită de pasiune, profesionalism și dorința de a face o
          diferență.
        </p>

        <div
          className="relative w-full overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src="/assets/about-section-bg2.jpeg"
            alt="Background"
            className="w-full h-auto"
            style={{ height: "auto" }}
          />
          <img
            src="/assets/family.svg"
            alt=""
            className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
          />
        </div>

        <h2
          className="text-[40px] lg:text-[100px] leading-[50px] lg:leading-[123px] text-center"
          data-aos="fade-up"
        >
          Angajamentul nostru
        </h2>
      </section>

      <section>
        <div className="relative w-full h-[500px] lg:h-[900px] xl:h-[1000px] 2xl:h-[1100px]  overflow-hidden">
          <img
            src="/assets/about-section-bg3.jpeg"
            alt="About Section Background"
            className="absolute top-0 left-0 w-full h-full object-cover "
          />
        </div>

        <div>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[20px] px-[10%] py-[15%] lg:text-[40px] leading-[30px] md:leading-[50px]"
          >
            La Ferandalex, ne angajăm să oferim mai mult decât simple
            construcții. Garantăm excelență în fiecare aspect al muncii noastre,
            de la proiectare până la finalizare. <br /> <br /> Calitatea
            excepțională este asigurată prin utilizarea materialelor premium și
            a tehnologiilor de ultimă generație, în timp ce inovația continuă ne
            permite să găsim soluții eficiente și durabile pentru fiecare
            proiect.
          </p>
        </div>
      </section>

      <GoToTopButton />
      <Footer />
    </div>
  );
};

export default Page;
