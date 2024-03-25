import React from "react";
import cylinder from "../assets/images/placeholder1.png";
import cube from "../assets/images/placeholder2.png";
import arrow from "../assets/images/placeholder3.png";

const HomeContents = ({ gradientText }) => {
  return (
    <div className="home-contents flex flex-col gap-y-16">
      <div className="custom-shadow rounded-[32px] bg-bg-gray w-full h-[650px] flex justify-center items-center max-md:h-full max-lg:h-full max-lg:p-2 max-xl:h-full max-xl:p-4">
        <div className="flex flex-col gap-y-4 w-[480px] text-left max-md:p-4 max-xl:p-8">
          <h3
            className={`${gradientText} text-xl font-poppins font-semibold max-md:text-sm`}
          >
            Community
          </h3>
          <h2 className="header-color futura-bold-text text-4xl max-md:text-sm max-lg:text-3xl max-xl:text-3xl">
            Building Together for a Better Web3
          </h2>
          <p className="content-color font-poppins font-thin text-lg max-md:text-xs max-lg:text-sm">
            Discover the power of community in the evolution of web3 technology
            with Web3 Philippines. The true potential of web3 isn't just rooted
            in its groundbreaking technical features but in the vibrant
            community of builders, innovators, and thinkers who drive this
            technology forward.
            <br />
            <br />
            At Web3 Philippines, we're committed to creating a nurturing and
            holistic environment—whether you're a seasoned developer with years
            of coding experience, a visionary founder at the helm of a startup,
            an innovative engineer breaking new ground, or a professional in any
            technical role within the web3 ecosystem.
          </p>
        </div>
        <div className="w-[540px] flex justify-center max-md:hidden max-lg:w-[350px] max-xl:w-[400px]">
          <img src={cylinder} alt="Cylinder Image" />
        </div>
      </div>

      <div className="custom-shadow rounded-[32px] border bg-bg-gray w-full h-[650px] flex justify-center items-center max-md:h-full max-lg:h-full max-lg:p-2 max-xl:h-full max-xl:p-4">
        <div className="w-[540px] flex justify-center max-md:hidden max-lg:w-[350px] max-xl:w-[400px]">
          <img src={cube} alt="Cube Image" />
        </div>
        <div className="flex flex-col gap-y-4 w-[480px] text-left max-md:p-4 max-xl:p-8">
          <h3
            className={`${gradientText} text-xl font-poppins font-semibold max-md:text-sm`}
          >
            Education
          </h3>
          <h2 className="header-color futura-bold-text text-4xl max-md:text-sm max-lg:text-3xl max-xl:text-3xl">
            Your Ultimate Web3 Knowledge Hub
          </h2>
          <p className="content-color font-poppins font-thin text-lg max-md:text-xs max-lg:text-sm">
            Dive into the vibrant world of blockchain and web3 with Web3
            Philippines, where we're more than just a community — we're a
            treasure trove of knowledge and resources tailored for developers,
            founders, innovators, and thinkers eager to make their mark in the
            web3 space.
            <br />
            <br />
            Our commitment? To arm you with the insights and tools essential for
            excelling and innovating in this dynamic industry. From
            comprehensive guides for developers to strategic insights for
            founders, our content is designed to propel your projects and ideas
            to new heights.
          </p>
        </div>
      </div>

      <div className="custom-shadow rounded-[32px] border bg-bg-gray w-full h-[650px] flex justify-center items-center max-md:h-full max-lg:h-full max-lg:p-2 max-xl:h-full max-xl:p-4">
        <div className="flex flex-col gap-y-4 w-[480px] text-left max-md:p-4 max-xl:p-8">
          <h3
            className={`${gradientText} text-xl font-poppins font-semibold max-md:text-sm`}
          >
            Technology
          </h3>
          <h2 className="header-color futura-bold-text text-4xl max-md:text-sm max-lg:text-3xl max-xl:text-3xl">
            Pioneering Products for Web3 Development
          </h2>
          <p className="content-color font-poppins font-thin text-lg max-md:text-xs max-lg:text-sm">
            Jump into the heart of innovation with Web3 Philippines, we are on a
            mission to make the web3 space accessible, exciting, and innovative
            for everyone involved. Our technology initiatives are designed to
            empower developers, innovators thinkers, and anyone enthusiastic
            about blockchain.
            <br />
            <br />
            We provide top-notch, user-friendly tools and resources that
            simplify the development process, boost productivity, and encourage
            creativity across the entire blockchain ecosystem. It's all about
            breaking down barriers and opening up new possibilities for
            innovation, making it easier to bring your groundbreaking ideas to
            life.
          </p>
        </div>
        <div className="w-[540px] flex justify-center max-md:hidden max-lg:w-[300px] max-xl:w-[400px]">
          <img src={arrow} alt="Arrow Image" />
        </div>
      </div>
    </div>
  );
};

export default HomeContents;
