import React from "react";

const ServiceSections = ({ title, listItems, pic, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } md:px-20 md:py-30 gap-10 py-4 px-4`}
    >
      <div className="md:w-[50%] flex flex-col items-start">
        <span className="text-[#101828] text-[20px]">{title}</span>
        <ul className="list-disc list-inside mt-4 space-y-2">
          {listItems?.map((item, index) => (
            <li key={index} className="text-black text-[15px]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-[50%]">
        <img src={pic} loading="lazy" decoding="async" />
      </div>
    </div>
  );
};

export default ServiceSections;
