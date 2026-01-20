import React from "react";
import BottomFooter from "../Reusables/BottomFooter";
import TopFooter from "../Reusables/TopFooter";
import Navbar from "../Reusables/Navbar";
import ServiceHeader from "../Reusables/ServiceHeader";
import contentone from "../../assets/contentone.png";
import contenttwo from "../../assets/contenttwo.png";
import contentthree from "../../assets/contentthree.png";
import contentfour from "../../assets/contentfour.png";
import contentfive from "../../assets/contentfive.png";
import contentsix from "../../assets/contentsix.png";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServiceHeader
        name="Our Projects"
        header="What We’ve Built"
        statement="Delivering excellence through carefully executed engineering and construction projects across Nigeria."
      />
      <div className="px-18 py-15 flex flex-col gap-20">
        <div className="flex flex-col items-start justify-start text-left gap-2 h-[25vh]">
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
              Our Projects
            </span>
          </div>
          <span className="text-[#343434] text-[20px] md:text-[34px]">
            Discover Our Past & Ongoing Projects
          </span>
          <span className="text-[#000000] text-[15px] md:w-[61%]">
            Our services are delivered with precision, safety, and
            professionalism to ensure durable, efficient, and cost-effective
            outcomes for every project.
          </span>
        </div>
        <img src={contentone} className="w-full h-full object-cover" />
        <img src={contenttwo} className="w-full h-full object-cover" />
        <img src={contentthree} className="w-full h-full object-cover" />
        <img src={contentfour} className="w-full h-full object-cover" />
        <img src={contentfive} className="w-full h-full object-cover" />
        <img src={contentsix} className="w-full h-full object-cover" />
      </div>
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Projects;
