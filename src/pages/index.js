import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InfoSection from "../components/InfoSection";
import Service from "../components/Service";
import Footer from "../components/Footer";
import Komposisi from "../components/Komposisi";
import Slider from "../components/ImageSlider";
import Kontak from "../components/Kontak";
import {
  homeObj,
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  productOne,
  productTwo,
} from "../components/InfoSection/Data";
import AboutPage from "../components/InfoSection/AboutPage";
import kontak from "../components/Kontak";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} togle={togle} />
      <Navbar togle={togle} />
      <InfoSection {...homeObj} />
      {/* <InfoSection {...homeObjOne} /> */}
      <AboutPage />
      <Komposisi />
      <InfoSection {...homeObjTwo} />
      <Service />
      <InfoSection {...productOne} />
      <InfoSection {...productTwo} />
      <Slider />
      <Kontak />

      {/* <InfoSection {...homeObjThree} /> */}
      <Footer />
    </>
  );
};

export default Home;
