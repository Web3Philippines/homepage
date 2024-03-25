import React from "react";

const GradientButton = ({ gradientText, buttonValue, url, targetValue }) => {
  return (
    <button className="py-[16px] max-md:py-[8px] px-[40px] max-md:px-[20px] font-extrabold bg-white rounded-full">
      <a
        className={`${gradientText} text-base font-poppins font-semibold`}
        href={url}
        target={targetValue ? targetValue : ""}
      >
        {buttonValue}
      </a>
    </button>
  );
};

export default GradientButton;
