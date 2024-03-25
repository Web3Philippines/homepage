import React from "react";
import Arrow from "../assets/icons/arrow.svg";
import blogData from "../data/blogData";

const Blog = () => {
  let gradientText =
    "bg-gradient-to-r from-purple-700 to-blue-500 inline-block text-transparent bg-clip-text";
  return (
    <div className="blog-contents flex flex-col w-full">
      <div className="rounded-[32px] bg-bg-gray w-full h-full flex flex-col items-center justify-center gap-y-4 p-10 max-md:mt-28 max-lg:mt-28">
        <div className="flex flex-col gap-y-4 w-full text-center">
          <h3
            className={`${gradientText} text-xl font-poppins font-semibold max-md:text-sm`}
          >
            Blog Section
          </h3>
          <h2 className="futura-bold-text text-4xl max-md:text-sm max-lg:text-2xl max-xl:text-3xl">
            Dive Into Our Latest Insights
          </h2>
          <p className="font-poppins font-thin text-xl max-md:text-xs max-lg:text-sm max-xl:text-lg">
            Eager for more? Visit our blog page for the full story.
          </p>
        </div>

        <div className="flex flex-col items-center rounded-[32px] bg-bg-gray w-full p-10 max-md:p-0 max-lg:p-0 max-xl:p-0">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-32 max-md:grid-cols-1 max-md:gap-4 max-lg:gap-6 max-xl:gap-7 max-2xl:gap-16">
            {blogData.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center rounded-3xl w-[300px] bg-[#f9f9f9] gap-y-6 p-5 max-md:w-full max-md:gap-y-4 max-lg:w-[170px] max-lg:gap-y-4 max-xl:w-[240px] max-xl:gap-y-4"
                >
                  <div className="w-full">
                    <img className="rounded-md" src={blog.image} />
                  </div>
                  <div className="w-full flex gap-x-4 font-poppins max-md:hidden">
                    <div className="badge badge-ghost max-md:text-[8px] max-lg:text-[9px]">
                      Blockchain
                    </div>
                    <div className="badge badge-ghost max-md:text-[8px] max-lg:text-[9px]">
                      Web3
                    </div>
                  </div>
                  <div className="w-full flex gap-y-4">
                    <h1 className="text-lg futura-bold-text font-normal max-md:text-xs max-lg:text-sm">
                      What is Data Availability in<br></br> BlockChain? A
                      5-Minutes<br></br> Explainer
                    </h1>
                  </div>
                  <div className="font-poppins w-full flex justify-between max-md:text-[9px] max-lg:text-[12px]">
                    <button>Discover more</button>
                    <img
                      className="max-md:w-5 max-lg:w-8"
                      src={Arrow}
                      alt="Arrow Icon"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
