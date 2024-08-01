"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const Contact = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [jobFunction, setJobFunction] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log(name, company, phone, jobFunction, description);
  };

  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animations
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-[#000000] h-full relative">
      <div className="absolute h-full w-full z-[1]">
        <img
          data-aos="fade-in" // AOS animation
          data-aos-delay="200" // Delay before the animation starts
          height={"100%"}
          width={"100%"}
          className="object-cover h-full w-full lg:p-[30px] md:p-[20px] p-[10px]"
          src="/assets/contact-img2.svg"
          alt="contact-img"
        />
      </div>
      <div className="flex lg:flex-row flex-col items-start lg:items-center relative lg:ps-[50px] md:ps-[50px] sm:ps-[35px] ps-[25px] z-[2] pt-[200px] pb-[178px]">
        <form
          onSubmit={handleSubmit}
          className="lg:w-2/3 md:w-[57%] sm:w-[65%] w-[95%] flex flex-col justify-center text-white"
        >
          <div className="flex flex-col md:gap-[91px] gap-[50px]">
            <div
              data-aos="fade-up" // AOS animation
              data-aos-delay="200" // Delay before the animation starts
              className="flex lg:flex-row flex-col lg:gap-[130px] gap-[50px]"
            >
              <div className="flex flex-col flex-1 lg:gap-[26px] gap-[20px]">
                <label
                  htmlFor="name"
                  className="block md:text-[40px] sm:text-[30px] text-[26px] font-[400] md:leading-[49.2px] leading-[10px]"
                >
                  Nume
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow backdrop-blur-sm appearance-none sm:h-[73px] h-[50px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 md:gap-[26px] gap-[20px]">
                <label
                  htmlFor="phone"
                  className="block md:text-[40px] sm:text-[30px] text-[26px] font-[400] md:leading-[49.2px] leading-[10px]"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none sm:h-[73px] h-[50px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div
              data-aos="fade-up" // AOS animation
              data-aos-delay="300" // Delay before the animation starts
              className="flex lg:flex-row flex-col lg:gap-[130px] gap-[50px]"
            >
              <div className="flex flex-col flex-1 md:gap-[26px] gap-[20px]">
                <label
                  htmlFor="company"
                  className="block md:text-[40px] sm:text-[30px] text-[26px] font-[400] md:leading-[49.2px] leading-[10px]"
                >
                  Companie
                </label>
                <input
                  type="text"
                  id="company"
                  className="shadow backdrop-blur-sm appearance-none sm:h-[73px] h-[50px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-col flex-1 md:gap-[26px] gap-[20px]">
                <label
                  htmlFor="jobFunction"
                  className="block md:text-[40px] sm:text-[30px] text-[26px] font-[400] md:leading-[49.2px] leading-[10px]"
                >
                  Funcție
                </label>
                <input
                  type="text"
                  id="jobFunction"
                  className="shadow backdrop-blur-sm appearance-none sm:h-[73px] h-[50px] border-2 border-[#FFFFFF1A] rounded-[70px] bg-[#FFFFFF4D] w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={jobFunction}
                  onChange={(e) => setJobFunction(e.target.value)}
                />
              </div>
            </div>
            <div
              data-aos="fade-up" // AOS animation
              data-aos-delay="0" // Delay before the animation starts
              className="flex flex-grow"
            >
              <div className="flex flex-col md:gap-[26px] gap-[20px] flex-grow">
                <label
                  htmlFor="description"
                  className="block md:text-[40px] sm:text-[30px] text-[26px] font-[400] md:leading-[49.2px] leading-[10px]"
                >
                  Descriere proiect
                </label>
                <textarea
                  id="description"
                  className="shadow resize-none backdrop-blur-sm appearance-none border-2 border-[#FFFFFF1A] sm:rounded-[70px] rounded-[20px] bg-[#FFFFFF4D] sm:h-[251px] h-[230px] w-full py-[20px] px-[30px] leading-tight focus:outline-none focus:shadow-outline"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
        <div className="lg:flex items-center justify-center lg:mx-auto lg:py-0 py-[40px]">
          <Link
            href="/contact/thankyou"
            data-aos="fade-up" // AOS animation
            data-aos-delay="0" // Delay before the animation starts
            className="md:text-[70px] text-[50px] font-[400] leading-[69.02px] text-white "
          >
            Trimite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
