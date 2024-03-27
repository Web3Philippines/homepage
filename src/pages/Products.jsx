import React from "react";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";
import FooterAction from "../components/FooterAction";
import GradientButton from "../components/GradientButton";

const Products = () => {
  let gradientText =
    "bg-gradient-to-r from-purple-700 to-blue-500 inline-block text-transparent bg-clip-text";
  return (
    <div className="products flex flex-col gap-16 w-full max-md:mt-28 max-lg:mt-28">
      <div className="custom-shadow bg-bg-black rounded-[32px] w-full">
        <div className="products-header text-white text-center mt-16 max-md:mt-8">
          <h2
            className={`${gradientText} text-2xl max-md:text-lg font-inter font-bold p-2`}
          >
            Our Builds
          </h2>
          <h1 className="futura-bold-text text-4xl max-md:text-2xl p-2">
            Crafted for the Web3 Innovator
          </h1>
          <p className="text-lg max-md:text-xs text-text-gray font-inter font-normal p-2">
            Pioneering projects designed with web3 builders in mind.
          </p>
        </div>
        <div className="products-contents p-10 grid grid-cols-2 max-md:grid-cols-1 gap-5">
          {productsData.map((product, index) => {
            return <ProductCard key={index} product={product} index={index} />;
          })}
        </div>
      </div>
      <FooterAction
        title="Shape the Future with Us"
        description="Make an impact, and share your expertise."
        element={
          <GradientButton
            gradientText={gradientText}
            buttonValue="Become a Contributor"
            url="https://github.com/Web3Philippines"
            targetValue="_blank"
          />
        }
      />
    </div>
  );
};

export default Products;
