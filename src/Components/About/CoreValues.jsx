import React from "react";
import { NavLink } from "react-router-dom";
import core from "../../assets/core.png";

const CoreValues = () => {
  return (
    <div className="bg-[#133475] flex flex-col justify-between  w-full gap-30 md:h-[75vh] h-full">
      <div className="flex flex-col md:flex-row justify-between h-full">
        <div className="md:w-[50%] flex flex-row gap-8 items-start justify-end md:p-36 py-15 px-18">
          <div className="h-[100%] hidden md:block">
            <div className="h-[50%] bg-[#00AAE8] w-[2px]"></div>
            <div className="h-[50%] bg-[#FFFFFF26] w-[2px]"></div>
          </div>
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex flex-col items-start">
              <span className="text-[28px] md:text-[38px] text-[#FFFFFF]">
                Mission
              </span>
              <span className="text-[16px] text-[#FFFFFF]">
                To develop lasting client relationship by providing innovative
                and exceptional Engineering solutions in an environment of trust
                and respect.
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[28px] md:text-[38px] text-[#FFFFFF]">
                Vision
              </span>
              <span className="text-[16px] text-[#FFFFFF]">
                To become a name synonymous with Engineering Management in
                Nigeria, Africa and beyond.
              </span>
            </div>
          </div>
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
      url(${core})
    `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          className="md:w-[50%] flex flex-col justify-start items-start py-22 md:py-35 px-18"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-[20px] md:text-[34px] text-[#FFFFFF]">
                Our Core Values
              </span>
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="text-[#FFFFFF] text-[10px] md:text-[16px]">
                We uphold honesty, transparency, and strong ethical standards in
                every decision and project we deliver.
              </span>
            </div>
            <ul className="list-disc">
              <li className="list-inside text-[10px] md:text-[16px] text-white">
                Integrity
              </li>
              <li className="list-inside text-[10px] md:text-[16px] text-white">
                Quality
              </li>
              <li className="list-inside text-[10px] md:text-[16px] text-white">
                Reliability
              </li>
              <li className="list-inside text-[10px] md:text-[16px] text-white">
                Teamwork
              </li>
              <li className="list-inside text-[10px] md:text-[16px] text-white">
                Trust
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
