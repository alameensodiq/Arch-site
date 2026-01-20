import React from "react";
import Navbar from "../Reusables/Navbar";
import HeroSection from "./HeroSection";
import BottomFooter from "../Reusables/BottomFooter";
import TopFooter from "../Reusables/TopFooter";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Home;
