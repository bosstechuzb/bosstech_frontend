import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import OurServices from "../../components/OurServices";
import SeoSolution from "../../components/SeoSolution";
import WhyChooseUs from "../../components/WhyChooseUs";
import Portfolio from "../../components/Portfolio";
import OurTeam from "../../components/OurTeam";
import HowWeWork from "../../components/HowWeWork";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <OurServices />
      <SeoSolution />
      <WhyChooseUs />
      <Portfolio />
      <OurTeam />
      <HowWeWork />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
