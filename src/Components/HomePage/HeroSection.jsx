import React from "react";
import { NavLink } from "react-router-dom";
import heroVideo from "../../assets/hero.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh]  w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover transform scale-100"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(256.77deg, rgba(0, 0, 0, 0) -21.63%, #000000 89.82%)"
        }}
      />
      <div
        className="relative z-20 flex flex-col justify-end h-full mx-auto 
  px-6 md:px-20 
  pt-200 sm:pt-32 md:pt-0 
  w-full gap-10 pb-16"
      >
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-[#FAFAFA] lg:w-[40%] lg:text-[50px] md:text-[25px] sm:text-[15px]">
            Building Excellence. Engineering the Future.
          </h1>
          <p className="text-[#FAFAFA] text-[15px] lg:w-[47%]">
            Arch & Build Engineering Limited delivers innovative, reliable, and
            professional engineering solutions across construction,
            telecommunications, and oil & gas sectors.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <NavLink
              to="/contact"
              className="
                text-[14px] font-medium !text-[#344054]
                bg-white
                px-8 py-5
                rounded-[50px]
                shadow-[0px_1px_2px_0px_#1018280D]
                hover:bg-white
                transition-all duration-300
                flex items-center gap-2
              "
            >
              Request a Consultation
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.52979 4.61501L1.52979 0.380005V2.498L9.52979 6.73301L1.52979 10.498V12.38L9.52979 8.615V4.61501Z"
                  fill="#00AAE8"
                />
              </svg>
            </NavLink>

            <div className="flex items-center gap-2 underline cursor-pointer py-5 border-b-[1px] border-b-[#FFFFFF]">
              <span className="text-white text-[14px]">Learn More</span>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17_148)">
                  <g clip-path="url(#clip1_17_148)">
                    <g clip-path="url(#clip2_17_148)">
                      <g clip-path="url(#clip3_17_148)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.38499 9.52979L11.62 1.52979L9.502 1.52979L5.26699 9.52979L1.502 1.52979H-0.380005L3.385 9.52979H7.38499Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_17_148">
                    <rect
                      width="10"
                      height="12"
                      fill="white"
                      transform="matrix(0 1 -1 0 12 0)"
                    />
                  </clipPath>
                  <clipPath id="clip1_17_148">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="matrix(0 1 -1 0 11.62 -0.470215)"
                    />
                  </clipPath>
                  <clipPath id="clip2_17_148">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="matrix(0 1 -1 0 11.62 -0.470215)"
                    />
                  </clipPath>
                  <clipPath id="clip3_17_148">
                    <rect
                      width="8"
                      height="12"
                      fill="white"
                      transform="matrix(0 1 -1 0 11.62 1.52979)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:mr-2">
            <div className="border-[0.84px] border-[#FFFFFF40] backdrop-blur-[0.84px] bg-white/10 py-8 px-13 flex flex-col justify-center items-center">
              <span className="text-white text-[33.87px] font-semibold">
                20+
              </span>
              <span className="text-white text-[11.87px] block">
                Years of experience
              </span>
            </div>
            <div className="border-[0.84px] border-[#FFFFFF40] backdrop-blur-[0.84px] bg-white/10 py-8 px-13 flex flex-col justify-center items-center">
              <span className="text-white text-[33.87px] font-semibold">
                25+
              </span>
              <span className="text-white text-[11.87px] block">
                Completed Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
