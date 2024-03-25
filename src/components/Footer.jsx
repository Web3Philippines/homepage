import React from "react";
import socialMediaLinks from "../data/socialMediaLinks.js";
import Web3PHIcon from "../assets/icons/web3ph.svg";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="w-10/12 mx-auto py-8 max-md:py-4 flex justify-between items-center my-10">
        <Link to="/home">
          <img
            className="h-[64px] max-md:h-8"
            src={Web3PHIcon}
            alt="web3ph icon"
          />
        </Link>
        <ul className="flex flex-row gap-10 max-md:gap-2">
          {socialMediaLinks.map((socialMedia, index) => (
            <li className="cursor-pointer p-2" key={index}>
              <a
                key={index}
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 max-md:h-4"
                  src={socialMedia.icon}
                  alt={`${socialMedia.alt} icon`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-10/12 mx-auto py-24 max-md:py-12 border-t-2 ">
        <p className="font-poppins font-normal max-md:text-xs max-md:text-center">
          © 2024 Web3 Philippines. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
