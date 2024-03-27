import React from "react";
import HomeContents from "../components/HomeContents";
// import Faqs from "../components/Faqs";
import ProductCard from "../components/ProductCard";
import productsData from "../data/productsData";
import arrow from "../assets/images/placeholder3.png";
import FooterAction from "../components/FooterAction";
import GradientButton from "../components/GradientButton";
import InputWithButton from "../components/InputWithButton";

const Home = () => {
  let gradientText =
    "bg-gradient-to-r from-purple-700 to-blue-500 inline-block text-transparent bg-clip-text";
  return (
    <div className="home flex flex-col gap-y-16 w-full max-lg:mt-36">
      <div className="custom-shadow rounded-[32px] border bg-hero bg-cover h-[720px] flex justify-center items-center max-md:h-[400px]">
        <div className="w-8/12 text-white text-center">
          <h1 className="futura-bold-text text-7xl font-black tracking-wide max-sm:text-lg max-md:text-2xl max-lg:text-4xl max-xl:text-5xl max-2xl:text-6xl">
            Be a World-Class
            <br />
            Blockchain Developer
          </h1>
          <p className="font-poppins font-normal text-xl my-6 max-md:text-xs">
            Master the skills to innovate and lead in the web3 landscape.
          </p>
          <GradientButton
            buttonValue="Connect with us"
            gradientText={gradientText}
          />
        </div>
      </div>

      <HomeContents gradientText={gradientText} />

      <div className="custom-shadow products bg-bg-black rounded-[32px] w-full">
        <div className="custom-shadow products-header text-white text-center mt-16 max-md:mt-8">
          <h2
            className={`${gradientText} text-2xl max-md:text-lg font-inter font-bold p-2`}
          >
            Boost Entrepreneurs
          </h2>
          <h1 className="futura-bold-text text-4xl max-md:text-xl p-2 max-xl:text-3xl">
            Empowering Filipino Web3 Startup Founders
          </h1>
        </div>
        <div className="products-contents p-10 grid grid-cols-4 max-md:grid-cols-2 gap-5">
          {productsData.map((product, index) => {
            const itemsToRender = ["Directory", "Imbakan", "Matuto"];

            if (itemsToRender[2].includes(product.title)) {
              return (
                <ProductCard
                  width={"col-span-4 max-md:col-span-4 row-span-1"}
                  key={index}
                  product={product}
                />
              );
            } else if (itemsToRender.includes(product.title)) {
              return (
                <ProductCard
                  width={"col-span-3 max-md:col-span-4 row-span-1"}
                  key={index}
                  product={product}
                />
              );
            } else {
              return null;
            }
          })}
          <div className="bg-bg-black-2 shadow-lg rounded-lg p-5 flex flex-col items-center justify-center gap-y-10 max-md:gap-y-1 max-md:col-span-4">
            <img
              className="w-[240px] max-md:w-[120px] mx-auto"
              src={arrow}
              alt="arrow"
            />
            <a
              className="flex items-center justify-center p-3 max-md:p-2 rounded-lg text-white text-sm max-md:text-xs font-poppins font-medium bg-bg-purple bg-opacity-25 border border-bg-purple"
              href={"/products"}
            >
              See all products
            </a>
          </div>
        </div>
      </div>

      {/* <Faqs /> */}
      {/* <FooterAction
        title="Stay Ahead in Web3"
        description="Join our 2,000+ members. Subscribe for free updates!"
        element={<InputWithButton />}
      /> */}
    </div>
  );
};

export default Home;
