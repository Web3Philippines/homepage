import React from "react";
import aboutData from "../data/aboutData";
import membersData from "../data/membersData";
import FooterAction from "../components/FooterAction";
import GradientButton from "../components/GradientButton";

import LinkedIn from "../assets/icons/linkedin_black.svg";
import Twitter from "../assets/icons/x_black.svg";

const About = () => {
  const coreTeamData = membersData.filter(
    (member) => member.coreteam == "true"
  );
  const nonCoreTeamData = membersData.filter(
    (member) => member.coreteam == "false"
  );
  let gradientText =
    "bg-gradient-to-t from-purple-700 to-blue-500 inline-block text-transparent bg-clip-text";
  return (
    <div className="about flex flex-col max-md:mt-28 max-lg:mt-40">
      {aboutData.map((about, index) => {
        return (
          <div
            key={index}
            className="custom-shadow flex flex-col rounded-[32px] bg-bg-gray w-full p-10 gap-5 mb-20 max-md:mb-14"
          >
            <h3
              className={`${gradientText} text-xl font-poppins font-semibold max-md:text-2xl`}
            >
              {about.title}
            </h3>
            {/* <h2 className="header-color futura-bold-text text-4xl max-md:text-lg">
              {about.subtitle}
            </h2> */}
            <p
              className="content-color font-poppins font-thin text-xl max-md:text-xs"
              dangerouslySetInnerHTML={{ __html: about.description }}
            ></p>
          </div>
        );
      })}

      <div className="custom-shadow flex flex-col items-center rounded-[32px] bg-bg-gray w-full p-10 gap-5 mb-20 max-md:p-0 max-md:gap-5">
        <h3
          className={`${gradientText} text-4xl futura-bold-text flex justify-center py-5 mb-10 max-md:text-2xl`}
        >
          Our People
        </h3>
        <h3 className="header-color text-4xl futura-bold-text flex justify-center py-5 max-md:text-2xl">
          Core Team
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-32 max-md:grid-cols-2 max-md:gap-4 max-xl:gap-8 max-2xl:gap-16">
          {coreTeamData.map((member, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-3xl w-[375px] h-[400px] bg-[#f9f9f9] gap-y-8 max-md:w-[150px] max-md:h-[190px] max-md:gap-y-2 max-lg:w-[165px] max-lg:h-[300px] max-lg:gap-y-4 max-xl:w-[240px] max-xl:gap-y-6 max-2xl:w-[280px]"
              >
                <div className="w-40 rounded-full max-md:w-14 max-lg:w-24 max-xl:w-28">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="flex flex-col items-center gap-y-4 text-center">
                  <h1 className="header-color text-2xl font-medium font-poppins max-md:text-sm max-lg:text-sm max-xl:text-xl">
                    {member.name}
                  </h1>
                  <p className="content-color text-lg font-normal font-poppins max-md:text-xs max-lg:text-xs max-xl:text-sm">
                    {member.position}
                  </p>
                  <div>
                    <ul className="w-full flex flex-row gap-x-8">
                      <li className="w-6 max-md:w-4">
                        <a href={member.twitter} target="_blank">
                          <img src={Twitter} alt="LinkedIn" />
                        </a>
                      </li>
                      <li className="w-6 max-md:w-4">
                        <a href={member.linkedin} target="_blank">
                          <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="header-color text-4xl futura-bold-text flex justify-center py-5 max-md:text-2xl">
          Biz Ops
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-32 max-md:grid-cols-2 max-md:gap-4 max-md:pb-5 max-xl:gap-8 max-2xl:gap-16">
          {nonCoreTeamData.map((member, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-3xl w-[375px] h-[400px] bg-[#f9f9f9] gap-y-8 max-md:w-[150px] max-md:h-[190px] max-md:gap-y-2 max-lg:w-[165px] max-lg:h-[300px] max-lg:gap-y-4 max-xl:w-[220px] max-xl:gap-y-6 max-2xl:w-[280px]"
              >
                <div className="w-40 rounded-full max-md:w-14 max-lg:w-24 max-xl:w-28">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="flex flex-col items-center gap-y-4 text-center">
                  <h1 className="header-color text-2xl font-medium font-poppins max-md:text-sm max-lg:text-sm max-xl:text-xl">
                    {member.name}
                  </h1>
                  <p className="content-color text-lg font-normal font-poppins max-md:text-xs max-lg:text-xs max-xl:text-sm">
                    {member.position}
                  </p>
                  <div>
                    <ul className="w-full flex flex-row gap-x-8">
                      <li className="w-6 max-md:w-4">
                        <a href={member.twitter} target="_blank">
                          <img src={Twitter} alt="LinkedIn" />
                        </a>
                      </li>
                      <li className="w-6 max-md:w-4">
                        <a href={member.linkedin} target="_blank">
                          <img src={LinkedIn} alt="LinkedIn" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <FooterAction
        title="Join the team"
        description="Join and contribute"
        element={
          <GradientButton
            gradientText={gradientText}
            buttonValue="Connect with us"
          />
        }
      /> */}
    </div>
  );
};

export default About;
