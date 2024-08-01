"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <h2
        className="pt-[200px] lg:ps-[120px] md:ps-[80px] ps-[25px] text-[#F26A45] md:text-[64px] sm:text-[35px] text-[30px] font-[700] md:leading-[86.24px] leading-[50px] tracking-[1%] font-clashdisplay-regular"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Viziunea noastra
      </h2>
      <div
        className="flex lg:flex-row flex-col lg:order-1 order-2 items-end  mb-auto h-full text-[#EFE8E9] md:text-[30px] text-[22px] font-[400] leading-[30px] md:leading-[40.42px] tracking-[9%] font-clashdisplay-regular"
        data-aos="fade-up"
      >
        <div
          className="flex  flex-col gap-[60px] lg:ps-[81px] md:ps-[80px] ps-[25px] pe-[25px] lg:pe-0 md:pe-[80px] md:py-[250px] py-[50px] w-full lg:w-[60%]"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p>
            Viziunea noastra asupra arhitecturii moderne se bazeaza pe eleganta
            si simplitate. Credem ca designul bine gandit îmbunatateste atat
            estetica, cat și functionalitatea spatiilor, creand armonie și
            confort.
          </p>
          <p>
            Abordam fiecare proiect respectand calitatea materialelor, combinand
            tehnologia avansata cu maiestria traditionala. Colaboram strans cu
            clientii pentru a transforma viziunea lor în realitate, asigurand o
            executie perfecta a lucrarii.
          </p>
        </div>

        <div
          className="relative  me-auto h-[1268px] w-full lg:w-1/2 lg:order-2 order-1 vision-large "
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="absolute z-[999] lg:top-[14%] lg:right-0 w-[820px]">
            <img
              className="h-fit lg:w-[464px] w-[400px] ms-[5px]"
              src="/assets/MODERN.svg"
              alt="modern"
              data-aos="zoom-in"
              data-aos-delay="800"
            />
            <img
              className="lg:w-[1276px] md:w-[768px] mt-[-25px]"
              src="/assets/architectureText.svg"
              alt="architecture"
              data-aos="zoom-in"
              data-aos-delay="900"
            />
          </div>
          <img
            className="object-cover h-full w-full"
            height={"100%"}
            src="/assets/architecture.svg"
            alt="architecture"
            data-aos="fade-up"
            data-aos-delay="1000"
          />
        </div>

        <div
          className="relative me-auto md:h-[1268px] h-[600px] w-full lg:w-1/2 lg:order-2 order-1 vision-small"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="absolute z-[999] lg:top-[14%] top-[35%] lg:right-0 lg:w-[820px] md:w-[740px] sm:w-[600px] w-[300px] mx-auto left-1/2 transform -translate-x-1/2">
            <img
              className="md:block hidden h-fit lg:w-[464px] md:w-[400px] sm:w-[332px] w-[200px] md:ms-[16px] sm:ms-[10px] ms-[5px]"
              src="/assets/MODERN.svg"
              alt="modern"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <img
              className="md:block hidden lg:w-[1276px] md:w-[758px] sm:mt-[-11px] mt-[-7px]"
              src="/assets/architectureText.svg"
              alt="architecture"
              data-aos="zoom-in"
              data-aos-delay="600"
            />
            <svg
              className="md:hidden block"
              width="auto"
              height="auto"
              viewBox="0 0 1087 191"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <path
                d="M19.5 101V2.46H51.48L67.08 63.95L82.68 2.46H114.53V101H92.69V36.91L76.44 101H57.59L41.34 36.91V101H19.5ZM184.474 0.379994C215.674 0.379994 233.354 23.52 233.354 51.73C233.354 79.68 215.284 103.08 184.474 103.08C153.664 103.08 135.594 79.68 135.594 51.73C135.594 23.78 153.664 0.379994 184.474 0.379994ZM184.474 83.71C202.544 83.71 210.734 66.94 210.734 51.73C210.734 36.52 202.544 19.75 184.474 19.75C166.274 19.75 158.084 36.52 158.084 51.73C158.084 66.94 166.274 83.71 184.474 83.71ZM292.237 101H254.277V2.46L292.237 2.59C316.417 2.59 333.187 22.48 333.187 51.08C333.187 80.98 316.807 101 292.237 101ZM310.697 51.08C310.697 35.22 302.507 22.48 288.597 22.48H276.117V80.98H288.597C302.897 80.98 310.697 68.37 310.697 51.08ZM419.983 101H354.463V2.32999L419.983 2.46L496.423 2.32999C514.103 2.32999 525.933 13.51 525.933 30.15C525.933 40.81 520.603 49.26 511.893 53.81C521.253 56.02 525.933 61.61 525.933 71.1V94.11L527.753 101H506.433L504.093 94.11V72.4C504.093 67.59 502.013 63.95 494.213 63.95H454.173V101H432.203V45.62H489.663C498.893 45.62 503.443 41.07 503.443 33.53C503.443 25.21 499.153 20.66 489.663 20.66L419.983 20.79H376.303V42.5H414.783V60.83H376.303V82.67H419.983V101ZM549.737 101V2.46H573.527L604.597 64.21V2.46H626.437V101H602.647L571.577 39.25V101H549.737Z"
                fill="white"
              />
              <path
                d="M24.01 188H0.74L32.98 89.46H59.11L91.35 188H68.08L60.54 162.78H31.55L24.01 188ZM45.98 114.55L37.01 144.58H55.08L45.98 114.55ZM109.337 188V89.46H155.357C172.907 89.46 184.867 100.64 184.867 117.28C184.867 127.81 179.407 136.39 170.697 140.81C180.057 143.02 184.867 148.61 184.867 158.23V181.11L186.557 188H165.367L162.897 181.11V159.53C162.897 154.59 160.817 150.95 153.017 150.95H131.177V188H109.337ZM131.177 132.75H148.597C157.697 132.75 162.247 128.2 162.247 120.53C162.247 112.34 157.957 107.79 148.597 107.79H131.177V132.75ZM248.804 190.08C219.424 190.08 205.384 168.63 205.384 138.73C205.384 108.7 219.424 87.38 248.804 87.38C271.424 87.38 288.714 102.85 289.104 125.6H269.474C267.914 115.07 260.114 107.79 250.364 107.79C233.984 107.79 227.874 124.04 227.874 138.73C227.874 153.42 233.984 169.67 250.364 169.67C260.114 169.67 267.914 162.39 269.474 151.86H289.104C288.714 174.61 271.424 190.08 248.804 190.08ZM310.471 89.46H332.311V128.98H371.051V89.46H393.021V188H371.051V147.18H332.311V188H310.471V89.46ZM439.607 188H417.767V89.46H439.607V188ZM457.619 89.46H533.019V107.79H506.239V188H484.399V107.79H457.619V89.46ZM550.981 188V89.46L616.501 89.59V107.79H572.821V129.63H611.301V147.83H572.821V169.67H616.501V188H550.981ZM677.881 190.08C648.501 190.08 634.461 168.63 634.461 138.73C634.461 108.7 648.501 87.38 677.881 87.38C700.501 87.38 717.791 102.85 718.181 125.6H698.551C696.991 115.07 689.191 107.79 679.441 107.79C663.061 107.79 656.951 124.04 656.951 138.73C656.951 153.42 663.061 169.67 679.441 169.67C689.191 169.67 696.991 162.39 698.551 151.86H718.181C717.791 174.61 700.501 190.08 677.881 190.08ZM732.787 89.46H808.187V107.79H781.407V188H759.567V107.79H732.787V89.46ZM825.11 153.42V89.46H846.95V153.42C846.95 161.61 851.5 170.71 861.38 170.71C871.26 170.71 875.68 161.61 875.68 153.42V89.46H897.65V153.42C897.65 176.17 884.26 190.08 861.38 190.08C838.5 190.08 825.11 176.17 825.11 153.42ZM921.258 188V89.46H967.278C984.828 89.46 996.788 100.64 996.788 117.28C996.788 127.81 991.328 136.39 982.618 140.81C991.978 143.02 996.788 148.61 996.788 158.23V181.11L998.478 188H977.288L974.818 181.11V159.53C974.818 154.59 972.738 150.95 964.938 150.95H943.098V188H921.258ZM943.098 132.75H960.518C969.618 132.75 974.168 128.2 974.168 120.53C974.168 112.34 969.878 107.79 960.518 107.79H943.098V132.75ZM1020.56 188V89.46L1086.08 89.59V107.79H1042.4V129.63H1080.88V147.83H1042.4V169.67H1086.08V188H1020.56Z"
                fill="#F26A45"
              />
            </svg>
          </div>
          <img
            className="object-cover h-full w-full"
            height={"100%"}
            src="/assets/architecture.svg"
            alt="architecture"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
