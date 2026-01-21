import React from "react";
import { NavLink } from "react-router-dom";
import Reliability from "../../assets/Reliability.png";

const HomeReliabilitySection = () => {
  return (
    <div className="bg-[#133475] flex flex-row justify-end items-center h-[70vh] pt-15 pb-2 px-18 relative">
      <img
        src={Reliability}
        className="absolute hidden md:block lg:h-auto left-20  bottom-20 z-10"
      />
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start md:leading-9">
            <span className="text-[14px] md:text-[26px]   text-[#FFFFFF]">
              Arch & Build Engineering Limited is a firm which specializes in
            </span>
            <span className="text-[14px] md:text-[26px]   text-[#FFFFFF]">
              Engineering Project Management, Procurement and Design in
            </span>
            <span className="text-[14px] md:text-[26px]   text-[#FFFFFF]">
              the construction, telecommunications and oil and gas industry.
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-[#FFFFFF] text-[15px]">
              We have designed and successfully carried out the construction of
              several residential, commercial and
            </span>
            <span className="text-[#FFFFFF] text-[15px]">
              industrial buildings in different parts of the country.
            </span>{" "}
          </div>
        </div>
        <NavLink
          //   to="/contact"
          className="
                      md:text-[14px] text-[10px] font-medium !text-[#133475]
                      bg-[#ffffff]
                      px-8 py-5
                      rounded-[50px]
                       border-[#D0D5DD]
                      shadow-[0px_1px_2px_0px_#1018280D]
                      hover:bg-[#ffffff]
                      transition-all duration-300
                      flex items-center gap-2 border-0
                    "
        >
          Learn More
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_17_141)">
              <g clip-path="url(#clip1_17_141)">
                <g clip-path="url(#clip2_17_141)">
                  <g clip-path="url(#clip3_17_141)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.52979 4.61501L1.52979 0.380005V2.498L9.52979 6.73301L1.52979 10.498V12.38L9.52979 8.615V4.61501Z"
                      fill="#00AAE8"
                    />
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_17_141">
                <rect width="10" height="12" fill="white" />
              </clipPath>
              <clipPath id="clip1_17_141">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(-0.470215 0.380005)"
                />
              </clipPath>
              <clipPath id="clip2_17_141">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="translate(-0.470215 0.380005)"
                />
              </clipPath>
              <clipPath id="clip3_17_141">
                <rect
                  width="8"
                  height="12"
                  fill="white"
                  transform="translate(1.52979 0.380005)"
                />
              </clipPath>
            </defs>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default HomeReliabilitySection;
