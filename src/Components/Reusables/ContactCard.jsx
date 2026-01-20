import React from "react";

const ContactCard = ({ text1, text2, text3, text4 }) => {
  return (
    <div className="bg-[#EEF2FC] rounded-[8px] px-6 pt-6 pb-15 gap-15 justify-between flex flex-col items-start md:w-[32%] w-full">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="6" fill="#00AAE8" />
        <path
          d="M33 23.5C33.0034 24.8199 32.6951 26.1219 32.1 27.3C31.3944 28.7118 30.3098 29.8992 28.9674 30.7293C27.6251 31.5594 26.0782 31.9994 24.5 32C23.1801 32.0035 21.8781 31.6951 20.7 31.1L15 33L16.9 27.3C16.3049 26.1219 15.9966 24.8199 16 23.5C16.0006 21.9218 16.4406 20.3749 17.2707 19.0326C18.1008 17.6903 19.2883 16.6056 20.7 15.9C21.8781 15.305 23.1801 14.9966 24.5 15H25C27.0843 15.115 29.053 15.9948 30.5291 17.4709C32.0052 18.947 32.885 20.9157 33 23V23.5Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="flex flex-col items-start gap-3">
        <span className="text-[20px] text-[#000000]">{text1}</span>
        <span className="text-[16px] text-[#000000]">{text2}</span>
        <span className="text-[16px] text-[#000000]">{text3}</span>
        <span className="text-[15px] text-[#00AAE8]">{text4}</span>
      </div>
    </div>
  );
};

export default ContactCard;
