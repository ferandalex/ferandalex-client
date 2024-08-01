"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SolutionsForAnyProject from "./components/SolutionsForAnyProject";
import WhatWeOffer from "./components/WhatWeOffer";
import OurVision from "./components/OurVision";
import Corporate from "./components/Corporate";
import CustomerOpinion from "./components/CustomerOpinion";
import GoToTopButton from "./components/GoToTopButton";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <SolutionsForAnyProject />
      <OurVision />
      <Corporate />
      <WhatWeOffer />
      <CustomerOpinion />
      <Footer />
      <GoToTopButton />
    </div>
  );
};

export default Home;
