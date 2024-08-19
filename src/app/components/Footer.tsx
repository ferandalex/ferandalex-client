"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="mx-auto">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 lg:gap-[20px] gap-[46px] py-[89px] md:px-[70px] sm:px-[30px] px-[20px] max-w-[1280px] mx-auto"
          data-aos="fade-up"
        >
          <div
            className="flex flex-col sm:gap-[25px] xs:gap-[22px] gap-[15px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              className="md:w-[230px] sm:w-[200px]"
              src="/assets/footer-logo.svg"
              alt="Ferandalex logo"
            />
            <p className="text-[#0B2131] md:text-[20px] xs:text-[16px] text-[12px] font-[400] leading-[30px] tracking-[2%] font-clashdisplay-regular md:pe-0 sm:pe-8 pe-0">
              Sinergie la fiecare proiect. Ne straduim sa va oferim rezultatele dorite,
              deoarece obiectivul nostru este colaborarea pe termen lung.
            </p>
          </div>
          <div
            className="font-clashdisplay-regular leading-[24px] flex flex-col xs:gap-[22px] gap-[15px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
          <h3 className="text-[#071A34] xs:text-[#071A34] xs:text-[20px] text-[18px] md:text-[25px] font-[600]">
            Company
          </h3>
            <ul className="font-[500] md:text-[20px] xs:text-[16px] text-[14px] text-[#090914] flex flex-col xs:gap-[16px] gap-[10px]">
              <li>
                <a href="/about" className="text-[#090914] font-[500]">
                  Despre noi
                </a>
              </li>
              <li>
                <a href="/service" className="text-muted-foreground">
                  Servicii
                </a>
              </li>
            </ul>
          </div>
          <div
            className="font-clashdisplay-regular leading-[24px] flex flex-col xs:gap-[22px] gap-[15px]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-[#071A34] md:text-[25px] xs:text-[20px] text-[18px] font-[600]">
              Help
            </h3>
            <ul className="font-[500] md:text-[20px] xs:text-[16px] text-[12px] text-[#090914] flex flex-col xs:gap-[16px] gap-[10px]">
              <li>
                <a href="#" className="text-muted-foreground">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div
            className="font-clashdisplay-regular leading-[24px] flex flex-col xs:gap-[16px] gap-[10px]"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-[#071A34] md:text-[25px] xs:text-[20px] text-[18px] font-[600]">
              Newsletter
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="sm:p-[16px] p-[10px] border border-[#E4E4E7] rounded-[10px] font-[500] md:text-[20px] text-[16px] leading-[24px]"
              />
              <button className="sm:p-[16px] p-[10px] bg-black text-white rounded-[9px] md:text-[20px] text-[14px] font-[500] leading-[24px]">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <div
          className="lg:hidden flex gap-[24px] mx-auto justify-center py-[14px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/*<a href="#" aria-label="X" className="my-auto">
            <BsTwitterX size={28} color="#000" />
          </a>*/}
          <a href="#" aria-label="Instagram">
            <FaInstagram size={30} color="#000" />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook size={30} color="#000" />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin size={30} color="#000" />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube size={30} color="#000" />
          </a>
        </div>
        <div className="mx-auto border "></div>
        <div className="flex md:flex-row flex-col justify-between items-center md:pe-[30px]">
          <div className="xs:mx-0 mx-auto flex xs:justify-start xs:w-fit w-full justify-center md:h-[103px] h-[120px] md:w-[353px]">
            <img
              width="100%"
              height="100%"
              className="object-cover capitalmerce-logo"
              src="/assets/CB Shaped by Signature.png"
              alt="Logo"
            />
          </div>
          <p className="text-[#090914] lg:text-[20px] text-[16px] md:mx-0 mx-auto xs:text-left text-center xs:px-0 px-1 text-[16px] pb-6 md:pt-6 font-[400] leading-[22px] font-clashdisplay-regular">
            © 2024 FERANDALEX SRL, Toate drepturile rezervate.
          </p>
          <div className="lg:flex hidden gap-[24px]">
            {/*<a href="#" aria-label="X" className="my-auto">
              <BsTwitterX size={28} color="#000" />
            </a>*/}
            <a href="#" aria-label="Instagram">
              <FaInstagram size={30} color="#000" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook size={30} color="#000" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={30} color="#000" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={30} color="#000" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
