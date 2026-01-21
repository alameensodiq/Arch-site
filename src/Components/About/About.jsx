import React from "react";
import Navbar from "../Reusables/Navbar";
import TopFooter from "../Reusables/TopFooter";
import BottomFooter from "../Reusables/BottomFooter";
import Teamone from "../../assets/Teamone.png";
import Teamtwo from "../../assets/Teamtwo.png";
import Teamthree from "../../assets/Teamthree.png";
import AboutEdges from "./AboutEdges";
import Reliability from "../../assets/AboutReliability.png";
import Section from "../../assets/Section.png";
import AboutExpertiseSection from "./AboutExpertiseSection";
import CoreValues from "./CoreValues";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-[#133475] h-[70vh] flex flex-row items-start justify-between md:px-20 px-4 md:pt-30 pt-10 pb-40 relative">
        <div className="flex flex-col items-start justify-start text-left md:gap-6 gap-2 md:h-[25vh] h-full">
          <div className="flex flex-row gap-2 md:items-center items-start justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00075 15.9985L16 7.99928L8.00078 1.77786e-05L2.79227e-05 3.8147e-06L0 15.9985L8.00075 15.9985Z"
                fill="white"
              />
            </svg>
            <span className="text-[14px] text-[#ffffff] font-semibold">
              About us
            </span>
          </div>
          <span className="text-[#FAFAFA] text-[20px] md:text-[56px] md:w-[45%] leading-17">
            A Legacy of Smart Engineering Solutions
          </span>
          <span className="text-[#FAFAFA] text-[15px] md:w-[47%]">
            We provide end-to-end engineering, construction, and telecom
            infrastructure solutions with professionalism at the core. Combining
            experience, innovation, and precision to deliver projects that stand
            the test of time.
          </span>
        </div>
        <img
          src={Reliability}
          className="absolute hidden md:block lg:h-auto right-20  top-20 z-10"
        />
      </div>
      <div>
        <img src={Section} className="h-auto" />
      </div>
      <AboutExpertiseSection />
      <CoreValues />
      <AboutEdges />
      <div className="px-18 py-20 flex flex-col gap-20">
        <div className="flex flex-col items-center justify-start text-center gap-2 h-[25vh]">
          <div className="flex flex-row gap-2 items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00075 15.9993L16 8.00001L8.00078 0.000750201L2.79227e-05 0.000736237L0 15.9992L8.00075 15.9993Z"
                fill="#00AAE8"
              />
            </svg>
            <span className="text-[14px] text-[#00AAE8] font-bold">
              Our Team
            </span>
          </div>
          <span className="text-[#343434] text-[20px] md:text-[34px]">
            The People Behind Our Work
          </span>
          <span className="text-[#000000] text-[15px] md:w-[61%]">
            A team of seasoned engineers and professionals committed to quality
            and innovation.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[33%]">
            <img
              src={Teamone}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full md:w-[33%]">
            <img
              src={Teamtwo}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="w-full md:w-[33%]">
            <img
              src={Teamthree}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default About;
