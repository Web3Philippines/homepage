import React from "react";
import socialMediaLinks from "../data/socialMediaLinks.js";
import Web3PHIcon from "../assets/icons/web3ph.svg";

const Header = () => {
  return (
    <div className="header w-10/12 mx-auto py-8 max-xl:py-10 flex max-lg:hidden justify-between items-center mb-10">
      <img
        className="h-[64px] max-xl:h-[48px]"
        src={Web3PHIcon}
        alt="web3ph icon"
      />
      <ul className="flex flex-row gap-10 max-xl:gap-3">
        {socialMediaLinks.slice(0, 3).map((socialMedia, index) => (
          <li className="cursor-pointer p-2" key={index}>
            <a
              key={index}
              href={socialMedia.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-10 max-xl:h-8"
                src={socialMedia.icon}
                alt={`${socialMedia.alt} icon`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
