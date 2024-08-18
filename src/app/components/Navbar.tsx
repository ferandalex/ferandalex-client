"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

    // Toggle body scroll lock
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "visible";
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <header className="w-full h-auto max-w-[1920px] mx-auto">
      {/* Navbar */}
      <nav
        className={`fixed max-w-[1920px] mx-auto top-0 left-0 right-0 z-10 md:bg-[#FFFFFF2B] md:border md:border-[#FFFFFF1A] text-white px-4 lg:px-[40px] 2xl:px-[90px] md:h-[100px] h-[70px] ${
          isScrolled ? "backdrop-blur-sm" : ""
        }`}
        data-aos="fade-down"
      >
        <div className="flex w-full justify-between items-center my-auto h-full">
          <Link
            href="/"
            className="flex items-center md:w-[200px] w-[160px]"
            aria-label="Homepage"
            onClick={closeMobileMenu}
          >
            <Image src="/assets/Logo.svg" alt="Logo" width={200} height={31} />
          </Link>
          <div className="hidden xlg:flex items-center">
            <ul className="flex">
              <li data-aos="fade-up">
                <Link
                  href="/about"
                  className="font-clashdisplay-light text-[30px] leading-[40px] px-5"
                  aria-label="About Us"
                  onClick={closeMobileMenu}
                >
                  Despre noi
                </Link>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <Link
                  href="/service"
                  className="font-clashdisplay-light text-[30px] leading-[40px] px-5"
                  aria-label="Services"
                  onClick={closeMobileMenu}
                >
                  Servicii
                </Link>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <Link
                  href="/contact"
                  className="font-clashdisplay-light text-[30px] leading-[40px] px-5"
                  aria-label="Contact Us"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="border-2 border-[#FFFFFF] rounded-[45px] px-8 py-3 text-[30px] leading-[40px] font-clashdisplay-regular"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discuta cu noi
            </button>
          </div>
          <div className="xlg:hidden flex">
            <button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              data-aos="fade-in"
            >
              <Image
                src="/assets/menu.svg"
                alt="Menu"
                width={60}
                height={60}
                className="md:w-[60px] md:h-[60px] w-[45px] h-[45px]"
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 min-h-[100vh] z-50 mobile-menu-bg text-white p-5 md:px-14 md:py-10"
            aria-labelledby="mobile-menu"
            data-aos="fade-in"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
                data-aos="fade-out"
              >
                <Image
                  src="/assets/close.svg"
                  alt="Close"
                  width={60}
                  height={60}
                  className="md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
                />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-16 h-full my-auto">
              <ul className="flex flex-col items-center justify-center gap-10">
                <li data-aos="fade-up">
                  <Link
                    href="/"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                    aria-label="Home"
                    onClick={() => {
                      closeMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <Link
                    href="/about"
                    onClick={() => {
                      closeMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                    aria-label="About Us"
                  >
                    Despre noi
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <Link
                    onClick={() => {
                      closeMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    href="/service"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                    aria-label="Services"
                  >
                    Servicii
                  </Link>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <Link
                    onClick={() => {
                      closeMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    href="/contact"
                    className="font-clashdisplay-light text-[35px] md:text-[50px] leading-[40px] py-2"
                    aria-label="Contact Us"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => {
                  closeMobileMenu();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="border-2 border-[#FFFFFF] rounded-[45px] px-10 md:px-14 py-5 md:py-8 text-[35px] md:text-[50px] leading-[40px] font-clashdisplay-regular mt-4"
              >
                Discuta cu noi
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
