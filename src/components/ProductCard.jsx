import React from "react";

const ProductCard = ({ product, index, width }) => {
  return (
    <div
      key={index}
      className={`flex flex-col justify-between bg-bg-black-2 shadow-lg rounded-lg pt-5 px-5 ${width} ? ${width} : w-auto`}
    >
      <div className="flex justify-between max-lg:flex-col pb-5">
        <div className="w-9/12 max-lg:w-full">
          <h2 className="future-bold-text text-white text-2xl max-md:text-base max-lg:text-base font-semibold">
            {product.title}
          </h2>
          <p className="font-poppins w-10/12 max-lg:w-full text-text-gray text-sm max-md:text-xs">
            {product.briefDescription}
          </p>
        </div>
        <a
          className="flex w-3/12 max-lg:w-full my-auto items-center justify-center text-center max-lg:mt-5 p-3 max-lg:p-1 max-md:p-1 rounded-lg max-md:rounded-md text-white text-sm max-lg:text-xs max-md:text-xs max-xl:text-center font-poppins font-medium bg-bg-purple bg-opacity-25 border border-bg-purple"
          href={product.url}
          target="_blank"
        >
          {product.buttonValue}
        </a>
      </div>
      <img className="w-full " src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductCard;
