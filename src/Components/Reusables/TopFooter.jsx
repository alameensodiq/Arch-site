import React from "react";
import { NavLink } from "react-router-dom";
import Topfootimage from "../../assets/topfooter.png";

const TopFooter = () => {
  return (
    <div className="bg-[#133475] flex flex-col justify-between  w-full gap-30 md:h-[65vh] h-screen">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[50%] flex flex-col gap-8 items-start justify-end md:p-29 py-15 px-18">
          <div className="flex flex-col items-start gap-1">
            <div className="flex flex-col items-start">
              <span className="text-[20px] md:text-[34px] text-[#FFFFFF]">
                Building with purpose.
              </span>
              <span className="text-[20px] md:text-[34px] text-[#FFFFFF]">
                Delivering with precision.
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[#FFFFFF] text-[10px] md:text-[15px]">
                Partner with a team of experienced engineers committed to
              </span>
              <span className="text-[#FFFFFF] text-[10px] md:text-[15px]">
                delivering reliable, innovative, and high-quality solutions
                tailored to
              </span>{" "}
              <span className="text-[#FFFFFF] text-[10px] md:text-[15px]">
                your project needs.
              </span>
            </div>
          </div>
          <NavLink
            //   to="/contact"
            className="
      md:text-[14px] text-[10px] font-medium !text-white
      bg-[#00AAE8]
      px-8 py-5
      rounded-[50px]
       border-[#00AAE8]
      shadow-[0px_1px_2px_0px_#1018280D]
      hover:bg-[#00AAE8]
      transition-all duration-300
      flex items-center gap-2 border-0
    "
          >
            Request a Consultation
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_63_252)">
                <g clip-path="url(#clip1_63_252)">
                  <g clip-path="url(#clip2_63_252)">
                    <g clip-path="url(#clip3_63_252)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.52979 4.61488L1.52979 0.379883V2.49788L9.52979 6.73288L1.52979 10.4979V12.3799L9.52979 8.61488V4.61488Z"
                        fill="#133475"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_63_252">
                  <rect width="10" height="12" fill="white" />
                </clipPath>
                <clipPath id="clip1_63_252">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(-0.470215 0.379883)"
                  />
                </clipPath>
                <clipPath id="clip2_63_252">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(-0.470215 0.379883)"
                  />
                </clipPath>
                <clipPath id="clip3_63_252">
                  <rect
                    width="8"
                    height="12"
                    fill="white"
                    transform="translate(1.52979 0.379883)"
                  />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
        </div>
        <div
          style={{
            background: `
      linear-gradient(0deg, rgba(19, 52, 117, 0.8), rgba(19, 52, 117, 0.8)),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
    `,
            backgroundImage: `
      linear-gradient(0deg, rgba(19, 52, 117, 0.25), rgba(19, 52, 117, 0.25)),
      linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${Topfootimage})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          className="md:w-[50%] flex flex-col justify-end items-start leading-30 py-15 px-18"
        >
          <span className="text-[#FFFFFF] text-[14px]">
            Years of trusted expertise.
          </span>
          <span className="text-[#FFFFFF] md:text-[150px] text-[120px] font-bold">
            20+
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
