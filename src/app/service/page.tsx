"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GotoTopButton from "../components/GoToTopButton";

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform text-[40px] font-bold -translate-y-1/2 -right-52 cursor-pointer"
      onClick={onClick}
    >
      <img src="/assets/NEXT.svg" alt="next" />
    </div>
  );
};
const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 text-[40px] font-bold -left-52 z-30 rounded-full p-2 cursor-pointer"
      onClick={onClick}
    >
      <img src="/assets/BACK.svg" alt="back" />
    </div>
  );
};

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const settings2 = {
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

  const [settings1, setSettings1] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSettings1((prevSettings) => ({
          ...prevSettings,
          vertical: false,
          verticalSwiping: false,
        }));
      } else {
        setSettings1((prevSettings) => ({
          ...prevSettings,
          vertical: true,
          verticalSwiping: true,
        }));
      }
    };

    handleResize(); // Call once on mount to set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-white font-clashdisplay-regular">
      <section
        data-aos="fade-down"
        data-aos-delay="10"
        className="relative h-[400px] md:h-full w-full"
      >
        <img
          src="/assets/section-shape2.png"
          alt=""
          className="absolute md:hidden top-0 bottom-0 md:-top-10 left-0 h-[400px] md:h-full w-full"
        />
        <img
          src="/assets/service-bg.jpg"
          alt=""
          className="h-[400px] md:hidden w-full object-cover"
        />
        <img
          src="/assets/service-background.png"
          alt=""
          className="hidden md:block h-full object-cover w-full"
        />

        <img
          src="/assets/SERVICII.svg"
          alt=""
          className="absolute top-[68%] sm:top-[67%] lg:top-2/3 lg:ml-[5%] md:ml-[5%] ml-[10%] sm:w-[150px] w-24 h-auto lg:w-auto uppercase"
          data-aos="fade-up"
        />
      </section>

      <section
        className="px-[5%] lg:px-[10%] py-[10%] space-y-[15%] mx-[5%] lg:mx-[15%] border-l border-r border-white"
        data-aos="fade-in"
      >
        <Slider {...settings1} className="max-h-[900px] custom-slider">
          <div className="relative">
            <div
              className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/service-section-bg.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <div
                data-aos="fade-down"
                className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm"
              >
                Constructii
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/service-section-bg.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <div
                data-aos="fade-down"
                className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm"
              >
                Constructii
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              className="relative max-h-[900px] rounded-3xl lg:rounded-[140px] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/assets/service-section-bg.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <div
                data-aos="fade-down"
                className="absolute bottom-0 w-full bg-white/20 rounded-t-3xl lg:rounded-t-[140px] h-[50%] flex items-center justify-center text-[40px] lg:text-[120px] text-center backdrop-blur-sm"
              >
                Constructii
              </div>
            </div>
          </div>
        </Slider>
        <p
          data-aos="fade-up"
          className="px-[5%] lg:px-[20%] text-[15px] lg:text-[30px] leading-[20px] lg:leading-[37px]"
        >
          Ferandalex ofera servicii complete de constructii, de la planificare
          si proiectare la executie si finisare. Echipa noastra de specialisti
          cu vasta experienta se ocupa de toate etapele procesului de
          constructie, adaptandu-se nevoilor specifice ale fiecarui client.{" "}
          <br /> <br />
          Fie ca doriti sa construiti o casa noua, sa renovati o cladire veche
          sau sa implementati proiecte de amenajare exterioara, Ferandalex este
          partenerul de incredere de care aveti nevoie.
        </p>
      </section>

      <section className="border-t border-white">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r border-white">
          <div className="relative">
            <div
              className="relative hidden lg:block overflow-hidden"
              data-aos="fade-in"
            >
              <img
                src="/assets/service-section-bg2.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/interior-design.svg"
                alt=""
                data-aos="fade-up"
                className="absolute top-[15%] right-0"
              />
            </div>

            <div
              className="relative lg:hidden h-[500px] overflow-hidden"
              data-aos="fade-in"
            >
              <img
                src="/assets/service-section-bg2.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/interior-design.svg"
                alt=""
                className="absolute top-[15%] right-0 w-[90%] h-auto"
              />
            </div>
          </div>
          <p
            data-aos="fade-up"
            className="px-[10%] lg:px-[20%] text-[15px] lg:text-[30px] leading-[20px] lg:leading-[37px] py-[12%]"
          >
            Cu o abordare personalizata si o atentie meticuloasa la detalii,
            echipa noastra va va ajuta sa va descoperiti stilul, nevoile si
            aspiratiile pentru a le transpune in designul casei dumneavoastra.
            Avem capacitatea de a vedea potentialul ascuns in fiecare spatiu si
            de a-l transforma intr-un paradis personalizat, cu o functionalitate
            impecabila. <br /> <br /> Lasati-ne pe noi sa va ghidam in aceasta
            calatorie, sa va transformam visul intr-o realitate palpabila,
            vibranta si plina de inspiratie. De la proiectarea si alegerea
            materialelor, la gestionarea proiectelor si supravegherea
            lucrarilor, vom fi alaturi de dumneavoastra la fiecare pas. La
            Ferandalex, credem cu pasiune ca acasa ar trebui sa fie o reflectare
            a identitatii dumneavoastra, un loc unde va puteti exprima liber si
            va puteti simti cu adevarat bine.
          </p>
        </div>
      </section>

      <section className="border-t border-white">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r border-white">
          <div className="relative">
            <div
              className="relative hidden lg:block overflow-hidden"
              data-aos="zoom-in"
            >
              <img
                src="/assets/service-section-bg3.jpeg"
                alt="Service Background"
                data-aos="zoom-out"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/clen.svg"
                alt="Cleaning"
                data-aos="fade-up"
                width={883}
                height={150}
                className="absolute top-[15%] right-0"
              />
              {/* <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="867"
                  height="143"
                  viewBox="0 0 867 143"
                  fill="red"
                >
                  <path
                    d="M60.62 142.88C19.94 142.88 0.5 113.18 0.5 71.78C0.5 30.2 19.94 0.679991 60.62 0.679991C91.94 0.679991 115.88 22.1 116.42 53.6H89.24C87.08 39.02 76.28 28.94 62.78 28.94C40.1 28.94 31.64 51.44 31.64 71.78C31.64 92.12 40.1 114.62 62.78 114.62C76.28 114.62 87.08 104.54 89.24 89.96H116.42C115.88 121.46 91.94 142.88 60.62 142.88ZM216.925 140H129.805V3.56H160.045V114.62H216.925V140ZM225.957 140V3.56L316.677 3.73999V28.94H256.197V59.18H309.477V84.38H256.197V114.62H316.677V140H225.957ZM353.934 140H321.714L366.354 3.56H402.534L447.174 140H414.954L404.514 105.08H364.374L353.934 140ZM384.354 38.3L371.934 79.88H396.954L384.354 38.3ZM455.879 140V3.56H488.819L531.839 89.06V3.56H562.079V140H529.139L486.119 54.5V140H455.879ZM610.572 140H580.332V3.56H610.572V140ZM628.672 140V3.56H661.612L704.632 89.06V3.56H734.872V140H701.932L658.912 54.5V140H628.672ZM839.885 129.38C832.685 138.02 821.885 142.88 806.405 142.88C769.505 142.88 748.625 113.18 748.625 71.78C748.625 30.2 768.425 0.679991 809.105 0.679991C840.425 0.679991 864.005 22.1 864.545 53.6H837.365C835.205 39.02 824.765 28.94 811.265 28.94C788.585 28.94 779.765 51.44 779.765 71.78C779.765 92.12 788.225 114.62 810.545 114.62C825.125 114.62 835.745 105.98 839.165 93.56H801.905V68.18H866.705V140H843.485L839.885 129.38Z"
                    fill="white"
                  />
                </svg>
              </div> */}
              <div
                data-aos="fade-up"
                className="absolute bottom-0 w-full bg-black/30 py-[15%] px-[5%] flex items-center justify-center text-[30px] leading-[37px] text-start backdrop-blur-sm"
              >
                Pasiunea noastra pentru curatenie se traduce in spatii
                impecabile si confortabile pentru dumneavoastra. Echipa noastra
                de profesionisti se dedica utilizarii celor mai performante
                produse si echipamente pentru a oferi o gama completa de
                servicii de curatenie, adaptate nevoilor individuale. <br />{" "}
                <br /> Fie ca doriti o curatenie generala saptamanala, o
                pregatire minutioasa pentru mutare sau o intretinere atenta a
                suprafetelor delicate, suntem aici sa va oferim solutii
                personalizate. Flexibilitatea programului nostru si angajamentul
                pentru calitate ne fac partenerul ideal pentru a mentine un
                mediu curat si sanatos in locuintele si birourile dumneavoastra.
                Contactati-ne astazi pentru a experimenta diferenta Ferandalex!
              </div>
            </div>

            <div
              className="relative lg:hidden h-[1000px] overflow-hidden"
              data-aos="fade-in"
            >
              <img
                src="/assets/service-section-bg3.jpeg"
                alt="Service Background"
                className="object-cover w-full h-full"
              />
              <img
                src="/assets/clen.svg"
                alt=""
                className="absolute top-[15%] w-[90%] h-auto right-0"
              />
              <div className="absolute bottom-0 w-full bg-black/30 py-[15%] px-[5%] flex items-center justify-center text-[15px] leading-[20px] text-start backdrop-blur-sm">
                Pasiunea noastra pentru curatenie se traduce in spatii
                impecabile si confortabile pentru dumneavoastra. Echipa noastra
                de profesionisti se dedica utilizarii celor mai performante
                produse si echipamente pentru a oferi o gama completa de
                servicii de curatenie, adaptate nevoilor individuale. <br />{" "}
                <br /> Fie ca doriti o curatenie generala saptamanala, o
                pregatire minutioasa pentru mutare sau o intretinere atenta a
                suprafetelor delicate, suntem aici sa va oferim solutii
                personalizate. Flexibilitatea programului nostru si angajamentul
                pentru calitate ne fac partenerul ideal pentru a mentine un
                mediu curat si sanatos in locuintele si birourile dumneavoastra.
                Contactati-ne astazi pentru a experimenta diferenta Ferandalex!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white max-h-[1400px] overflow-hidden">
        <div className="mx-[5%] lg:mx-[15%] border-l border-r  border-white ">
          <div className="flex py-[2%] pt-[4%] justify-end items-end">
            <img
              src="/assets/GALLERY.svg"
              alt=""
              className="w-[90%] lg:w-auto"
            />
          </div>
          {/* <h1 className="gradient-text text-[70px] lg:text-[180px] leading-[180px] font-extrabold flex justify-end">
            GALLERY
          </h1> */}
          {/* Slick slider */}
          <div className="flex flex-col justify-center w-full mx-auto ">
            <Slider {...settings2}>
              <div>
                <Image
                  src="/assets/service-section-carousel-img.svg"
                  alt="Slide 1"
                  width={600}
                  height={600}
                  className="  w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/assets/service-section-carousel-img.svg"
                  alt="Slide 1"
                  width={600}
                  height={600}
                  className="  w-full h-auto"
                />
              </div>

              <div>
                <Image
                  src="/assets/service-section-carousel-img.svg"
                  alt="Slide 1"
                  width={600}
                  height={600}
                  className="  w-full h-auto"
                />
              </div>
            </Slider>
          </div>
          {/* End  */}
        </div>
      </section>

      <GotoTopButton />
      <Footer />
    </div>
  );
};

export default Page;
