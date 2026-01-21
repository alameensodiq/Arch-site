import React from "react";
import { NavLink } from "react-router-dom";
import Reliability from "../../assets/Reliability.png";

const AboutExpertiseSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 justify-end items-center h-full md:h-[70vh] pt-15 pb-2 md:px-18 px-4 relative">
      <div className="md:w-[50%]">
        <div className="md:px-18 md:py-15 flex flex-col gap-20">
          <div className="flex flex-col items-start justify-start text-left gap-2">
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
                Our expertise in number
              </span>
            </div>
            <div className="flex flex-wrap  justify-between">
              <div className="flex flex-col items-start md:w-[50%]">
                <span className="text-[15px] md:text-[45px] text-[#133475]">
                  20+
                </span>
                <span className="text-[18px] text-[#101828]">
                  Years of Experience
                </span>
                <span className="text-[14px] text-[#000000]">
                  Proven industry expertise
                </span>
              </div>
              <div className="flex flex-col items-start md:w-[50%]">
                <span className="text-[15px] md:text-[45px] text-[#133475]">
                  25+
                </span>
                <span className="text-[18px] text-[#101828]">
                  Completed Projects
                </span>
                <span className="text-[14px] text-[#000000]">
                  Client satisfaction guaranteed
                </span>
              </div>
              <div className="flex flex-col items-start md:w-[50%]">
                <span className="text-[15px] md:text-[45px] text-[#133475]">
                  100+
                </span>
                <span className="text-[18px] text-[#101828]">
                  Skilled Professionals
                </span>
                <span className="text-[14px] text-[#000000]">
                  Expert-driven team
                </span>
              </div>
              <div className="flex flex-col items-start md:w-[50%]">
                <span className="text-[15px] md:text-[45px] text-[#133475]">
                  95%
                </span>
                <span className="text-[18px] text-[#101828]">
                  Satisfaction rate
                </span>
                <span className="text-[14px] text-[#000000]">
                  Successfully delivered projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-6 md:w-[50%]">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start md:leading-9">
            <span className="text-[14px] md:text-[23px]   text-[#000000]">
              With years of experience in the construction industry, Arch &
              Build Engineering limited has earned a strong reputation as a
              trusted partner for residential, commercial, and renovation
              projects.{" "}
              <span className="text-[#00AAE8]">
                Backed by years of construction expertise, we stand as a trusted
                name in residential, commercial, and renovation developments
              </span>
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-[#000000] text-[15px]">
              Our team of skilled professionals combines expert craftsmanship,
              modern technology, and attention to detail to consistently deliver
              exceptional results.
            </span>
          </div>
        </div>
        <NavLink
          //   to="/contact"
          className="
                      md:text-[14px] text-[10px] font-medium !text-[#FFFFFF]
                      bg-[#133475]
                      px-8 py-5
                      rounded-[50px]
                       border-[#133475]
                      shadow-[0px_1px_2px_0px_#1018280D]
                      hover:bg-[#133475]
                      transition-all duration-300
                      flex items-center gap-2 border-0
                    "
        >
          Learn More
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_91_525)">
              <g clip-path="url(#clip1_91_525)">
                <g clip-path="url(#clip2_91_525)">
                  <g clip-path="url(#clip3_91_525)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.38499 9.52979L11.62 1.52979L9.502 1.52979L5.26699 9.52979L1.502 1.52979H-0.380005L3.385 9.52979H7.38499Z"
                      fill="#00AAE8"
                    />
                  </g>
                </g>
              </g>
            </g>
            <defs>
              <clipPath id="clip0_91_525">
                <rect
                  width="10"
                  height="12"
                  fill="white"
                  transform="matrix(0 1 -1 0 12 0)"
                />
              </clipPath>
              <clipPath id="clip1_91_525">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="matrix(0 1 -1 0 11.62 -0.470215)"
                />
              </clipPath>
              <clipPath id="clip2_91_525">
                <rect
                  width="12"
                  height="12"
                  fill="white"
                  transform="matrix(0 1 -1 0 11.62 -0.470215)"
                />
              </clipPath>
              <clipPath id="clip3_91_525">
                <rect
                  width="8"
                  height="12"
                  fill="white"
                  transform="matrix(0 1 -1 0 11.62 1.52979)"
                />
              </clipPath>
            </defs>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default AboutExpertiseSection;
