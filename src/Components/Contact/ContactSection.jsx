import React from "react";
import InputText from "../Reusables/InputText";

const ContactSection = ({ title, title2, pic, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } md:px-20 md:py-30 gap-10 py-4 px-4`}
    >
      <div className="md:w-[50%] flex flex-col items-start gap-9 pb-3">
        <div className="flex flex-col items-start leading-10">
          <span className="text-[#101828] text-[33px] font-semibold">
            {title}
          </span>
          <span className="text-[#101828] text-[33px] font-semibold">
            {title2}
          </span>
          <span className="text-[#000000] text-[15px]">
            You can reach us anytime via{" "}
            <span className="text-[#00AAE8]">
              archandbuildengineering@gmail.com
            </span>
          </span>
        </div>
        <div className="flex flex-col items-start gap-5 w-[75%]">
          <InputText label="Name" placeholder="Your name" />
          <InputText label="Email" placeholder="you@gmail.com" />
          <InputText label="Phone number" placeholder="+234 (555) 000-0000" />
          <InputText
            label="How can we help"
            placeholder="Enter message here..."
            textarea
          />
        </div>
        <div className="w-[75%] bg-[#133475] text-white text-[16px] rounded-[40px] py-3 px-6 border border-transparent flex flex-row justify-center items-center">
          Get Started
        </div>
      </div>
      <div className="md:w-[50%]">
        <img src={pic} />
      </div>
    </div>
  );
};

export default ContactSection;
