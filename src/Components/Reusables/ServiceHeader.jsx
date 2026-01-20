import React from "react";
import Sectionimage from "../../assets/sectionimage.png";

const ServiceHeader = ({ name, header, statement }) => {
  return (
    <div>
      {/* <div
        className="absolute inset-0 z-10"
        style={{
          background: `
      linear-gradient(0deg, rgba(19, 52, 117, 0.8), rgba(19, 52, 117, 0.8)),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
    `
        }}
      /> */}
      <div
        style={{
          background: `
      linear-gradient(0deg, rgba(19, 52, 117, 0.8), rgba(19, 52, 117, 0.8)),
      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))
    `,
          backgroundImage: `
          linear-gradient(0deg, rgba(19, 52, 117, 0.25), rgba(19, 52, 117, 0.25)),
          linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
          url(${Sectionimage})
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="flex flex-col items-center justify-center text-center gap-2 h-[50vh]"
      >
        <div className="flex flex-row gap-2 items-center justify-center">
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
          <span className="text-[14px] text-[#FFFFFF]">{name}</span>
        </div>
        <span className="text-[#FAFAFA] text-[20px] md:text-[50px]">
          {header}
        </span>
        <span className="text-[#FAFAFA] text-[15px] md:w-[40%]">
          {statement}
        </span>
      </div>
    </div>
  );
};

export default ServiceHeader;
