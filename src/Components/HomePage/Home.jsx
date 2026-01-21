import React from "react";
import Navbar from "../Reusables/Navbar";
import HeroSection from "./HeroSection";
import BottomFooter from "../Reusables/BottomFooter";
import TopFooter from "../Reusables/TopFooter";
import HomeReliabilitySection from "./HomeReliabilitySection";
import cardone from "../../assets/Cardone.png";
import cardtwo from "../../assets/Cardtwo.png";
import cardthree from "../../assets/Cardthree.png";
import homeprojectone from "../../assets/homeprojectone.png";
import homeprojecttwo from "../../assets/homeprojecttwo.png";
import homeprojectthree from "../../assets/homeprojectthree.png";
import homehouse from "../../assets/homeestate.png";
import Bauhaus from "../../assets/Bauhaus.png";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <HomeReliabilitySection />
      <div className="px-18 py-15 flex flex-col gap-11  md:h-[93vh]">
        <div className="flex flex-col md:flex-row justify-between items-start text-left gap-2">
          <span className="text-[#000000] text-[34px] md:w-[45%]">
            Your <span className="text-[#00AAE8]">Success</span> Is Our
            Priority: Delivering Engineering Excellence at
          </span>
          <span className="text-[#000000] text-[15px] md:w-[45%]">
            From building design and construction to structural assessments and
            telecom tower management, we approach every project with
            professionalism, technical excellence, and a deep understanding of
            our clients’ objectives.
          </span>
        </div>
        <img src={homehouse} className="w-full h-full object-cover" />
      </div>
      <div className="px-18 py-20 flex flex-col gap-20">
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
              Our Services
            </span>
          </div>
          <span className="text-[#343434] text-[20px] md:text-[34px]">
            Expert Engineering Solutions You Can Trust
          </span>
          <span className="text-[#000000] text-[15px] md:w-[61%]">
            Our services are delivered with precision, safety, and
            professionalism to ensure durable, efficient, and cost-effective
            outcomes for every project.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[33%]">
            <img src={cardone} className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-[33%]">
            <img src={cardtwo} className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-[33%]">
            <img src={cardthree} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="px-18 py-15 flex flex-col md:flex-row justify-between gap-20 bg-[#133475] md:h-[68vh] relative">
        <img
          src={Bauhaus}
          className="absolute hidden md:block lg:h-auto left-0  bottom-0 z-10"
        />
        <div className="flex flex-col justify-start items-start md:w-[27%]">
          <span className="text-[14px] text-[#FFFFFF]">
            At Arch & Build Engineering Limited, we pride ourselves on building
            lasting partnerships with a diverse range of clients across the
            construction, telecommunications, and infrastructure sectors.
          </span>
        </div>
        <div className="flex flex-col items-start text-left md:w-[55%] gap-4">
          <span className="text-[#FFFFFF] text-[15px] md:text-[24px]">
            From private homeowners developing bespoke residential spaces to
            corporate and institutional clients delivering complex commercial,
            industrial, and telecom projects,
            <span className="text-[#00AAE8]">
              we work closely with every client to fully understand their unique
              vision & long-term goals.
            </span>
          </span>
          <span className="text-[14px] text-[#FFFFFF]">
            With a proven track record across Nigeria, we have successfully
            designed, managed, and delivered residential, commercial, and
            industrial developments.
          </span>
          <div className="flex flex-col md:flex-row justify-between md:w-[83%]">
            <div className="flex flex-col items-start">
              <span className="text-[46px] text-[#FFFFFF]">100+</span>
              <span className="text-[15px] text-[#FFFFFF]">
                Skilled professionals
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[46px] text-[#FFFFFF]">500+</span>
              <span className="text-[15px] text-[#FFFFFF]">
                Trusted Clients
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[46px] text-[#FFFFFF]">99%</span>
              <span className="text-[15px] text-[#FFFFFF]">
                Satisfaction rate
              </span>
            </div>
          </div>
        </div>
      </div>
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
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[33%] flex flex-col items-start gap-2">
            <img
              src={homeprojectone}
              className="w-full  h-[400px] object-cover"
            />
            <div className="flex flex-col items-start gap-2">
              <span className="text-[#101828] text-[16px] md:text-[25px]">
                Renovation/Upgrade of Ikoyi Club Clinic
              </span>
              <div className="bg-[#ECFDF3] flex flex-row rounded-[16px] items-center justify-center text-[#12B76A] text-[12px] p-2 gap-2">
                <div className="rounded-full w-[8px] h-[8px] bg-[#12B76A]"></div>
                Completed Project
              </div>
            </div>
          </div>
          <div className="w-full md:w-[33%] flex flex-col items-start gap-2">
            <img
              src={homeprojecttwo}
              className="w-full h-[400px] object-cover"
            />
            <div className="flex flex-col items-start gap-2">
              <span className="text-[#101828] text-[16px] md:text-[25px]">
                Residential Apartments at Surulere, Lagos.
              </span>
              <div className="bg-[#FEF6EE] flex flex-row rounded-[16px] items-center justify-center text-[#B93815] text-[12px] p-2 gap-2">
                <div className="rounded-full w-[8px] h-[8px] bg-[#B93815]"></div>
                Ongoing Project
              </div>
            </div>
          </div>
          <div className="w-full md:w-[33%] flex flex-col items-start gap-2">
            <img
              src={homeprojectthree}
              className="w-full  h-[400px] object-cover"
            />
            <div className="flex flex-col items-start gap-2">
              <span className="text-[#101828] text-[16px] md:text-[25px]">
                Residential Development at Mbaise, Imo State.
              </span>
              <div className="bg-[#ECFDF3] flex flex-row rounded-[16px] items-center justify-center text-[#12B76A] text-[12px] p-2 gap-2">
                <div className="rounded-full w-[8px] h-[8px] bg-[#12B76A]"></div>
                Completed Project
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Home;
