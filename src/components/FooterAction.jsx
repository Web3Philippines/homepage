import React from "react";

const FooterAction = ({ title, description, element }) => {
  return (
    <div className="flex flex-col justify-center gap-5 rounded-[32px] w-full h-96 max-md:h-72 text-center bg-gradient-to-t from-[#450097] to-[#A166FF]">
      <h1 className="futura-bold-text font-medium text-[40px] max-md:text-2xl max-md:p-4 text-white">
        {title}
      </h1>
      <p className="font-poppins font-normal text-lg max-md:text-sm text-white">
        {description}
      </p>
      <div>{element}</div>
    </div>
  );
};

export default FooterAction;
