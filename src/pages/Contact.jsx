import React from "react";
import contactData from "../data/contactData";

const Contact = () => {
  let gradientText =
    "bg-gradient-to-r from-purple-700 to-blue-500 inline-block text-transparent bg-clip-text";
  return (
    <div className="custom-shadow flex flex-col items-center justify-center text-center bg-bg-gray w-full rounded-[32px] p-10 gap-5 max-md:mt-28 max-lg:mt-28">
      <h2 className={`${gradientText} text-2xl font-inter font-bold`}>
        Contact Us
      </h2>
      <h1 className="header-color futura-bold-text text-4xl p-2 max-md:text-sm">
        Get in touch with the Web3 Philippines
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-24 mt-10 mx-auto max-md:grid-cols-2 max-md:gap-4 max-md:pb-5 max-xl:gap-8 max-2xl:gap-16">
          {contactData.map((contact, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-3xl w-[375px] h-[400px] bg-[#f9f9f9] gap-y-8 max-md:w-[130px] max-md:h-[180px] max-md:gap-y-2 max-lg:w-[165px] max-lg:h-[270px] max-lg:gap-y-4 max-xl:w-[220px] max-xl:h-[300px]  max-xl:gap-y-6 max-2xl:w-[280px]"
              >
                <div className="w-40 flex justify-center rounded-full max-sm:w-9 max-md:w-12 max-lg:w-24 max-xl:w-28">
                  <img src={contact.icon} alt={contact.name} />
                </div>
                <div className="flex flex-col items-center gap-y-4 text-center">
                  <h1 className="header-color text-2xl font-medium font-poppin max-md:text-xs max-lg:text-sm max-xl:text-xl">
                    {contact.name}
                  </h1>
                </div>
                <div>
                  <button className="w-[240px] bg-[#7B3FE4] text-[#f9f9f9] px-[30px] py-[16px] rounded-lg text-base cursor-pointer text-center max-md:text-xs max-md:flex max-md:justify-center max-md:w-[110px] max-md:py-[3px] max-lg:text-sm max-lg:w-[115px] max-lg:py-[10px] max-lg:flex max-lg:justify-center max-xl:text-sm max-xl:w-[200px] max-xl:py-[10px] max-xl:flex max-xl:justify-center">
                    <a href={contact.url} target="_blank">
                      {contact.buttonText}
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Contact;
