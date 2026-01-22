import React from "react";
import Edges from "../../assets/edges.png";

const AboutEdges = ({ title, listItems, pic, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row  bg-[#ffffff]${
        reverse ? "md:flex-row-reverse" : ""
      } md:px-20 md:py-30 gap-10 py-4 px-4`}
    >
      <div className="md:w-[50%] flex flex-col items-start gap-8">
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
              Our Edges
            </span>
          </div>
          <span className="text-[#343434] text-[20px] md:text-[34px]">
            Built on Excellence
          </span>
          <span className="text-[#000000] text-[15px]">
            Our strength lies in experience, craftsmanship, safety, and a
            client-first approach.
          </span>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-row gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="14" fill="#EEF2FC" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9458 8.62169L11.5925 16.6834L9.37583 14.315C8.9675 13.93 8.32583 13.9067 7.85916 14.2334C7.40416 14.5717 7.27583 15.1667 7.55583 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                fill="#00AAE8"
              />
            </svg>
            <div className="flex flex-col gap-2 items-start text-left">
              <span className="text-[#101828] text-[20px]">
                Proven Track Record
              </span>
              <span className="text-[#000000] text-[14px]">
                Over a decade track record, satisfying clients with quality
                engineering designs, construction works and project management.
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="14" fill="#EEF2FC" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9458 8.62169L11.5925 16.6834L9.37583 14.315C8.9675 13.93 8.32583 13.9067 7.85916 14.2334C7.40416 14.5717 7.27583 15.1667 7.55583 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                fill="#00AAE8"
              />
            </svg>
            <div className="flex flex-col gap-2 items-start text-left">
              <span className="text-[#101828] text-[20px]">
                Exceptional Workmanship
              </span>
              <span className="text-[#000000] text-[14px]">
                Every piece of our workforce is an exceptional professional,
                committed to top-notch delivery, without making excuses.
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="14" fill="#EEF2FC" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9458 8.62169L11.5925 16.6834L9.37583 14.315C8.9675 13.93 8.32583 13.9067 7.85916 14.2334C7.40416 14.5717 7.27583 15.1667 7.55583 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                fill="#00AAE8"
              />
            </svg>
            <div className="flex flex-col gap-2 items-start text-left">
              <span className="text-[#101828] text-[20px]">
                Commitment To Safety
              </span>
              <span className="text-[#000000] text-[14px]">
                With strict adherence to professional standards, we ensure
                safety of our workers, site visitors, and that of the future
                users of our works.
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="28" height="28" rx="14" fill="#EEF2FC" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.9458 8.62169L11.5925 16.6834L9.37583 14.315C8.9675 13.93 8.32583 13.9067 7.85916 14.2334C7.40416 14.5717 7.27583 15.1667 7.55583 15.645L10.1808 19.915C10.4375 20.3117 10.8808 20.5567 11.3825 20.5567C11.8608 20.5567 12.3158 20.3117 12.5725 19.915C12.9925 19.3667 21.0075 9.81169 21.0075 9.81169C22.0575 8.73836 20.7858 7.79336 19.9458 8.61002V8.62169Z"
                fill="#00AAE8"
              />
            </svg>
            <div className="flex flex-col gap-2 items-start text-left">
              <span className="text-[#101828] text-[20px]">
                Personalized Approach
              </span>
              <span className="text-[#000000] text-[14px]">
                We first seek to understand our clients needs and preferences,
                then prepare tailor-made strategy to address them.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <img src={Edges} loading="lazy" decoding="async" />
      </div>
    </div>
  );
};

export default AboutEdges;
