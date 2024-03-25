import React from "react";

const InputWithButton = () => {
  return (
    <form
      className="flex justify-around bg-white w-[480px] max-md:w-10/12 mx-auto py-[10px] max-md:py-1 rounded-full"
      action=""
    >
      <input
        className="bg-none font-poppins font-normal text-lg max-md:text-xs p-2 max-md:p-1 text-text-gray-2 w-7/12 rounded-full"
        type="email"
        placeholder="name@example.com"
      />
      <input
        className="bg-bg-purple rounded-full px-10 max-md:px-5 py-[10px] max-md:py-[5px] cursor-pointer font-poppins font-normal text-lg max-md:text-sm text-white"
        type="submit"
        value="Subscribe"
      />
    </form>
  );
};

export default InputWithButton;
