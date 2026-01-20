import React from "react";

const InputText = ({ label, placeholder, textarea }) => {
  return (
    <div className="flex flex-col items-start w-full">
      <span className="text-[14px] text-[#000000]">{label}</span>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className="border border-[#D0D5DD] rounded-[8px] px-2 py-3 text-[#667085] text-[16px] w-full"
        />
      ) : (
        <input
          placeholder={placeholder}
          className="border border-[#D0D5DD] rounded-[8px] px-2 py-3 text-[#667085] text-[16px] w-full"
        />
      )}
    </div>
  );
};

export default InputText;
