import React from "react";

const Contact = () => {
  let gradientText =
    "bg-gradient-to-r from-purple-700 to-blue-500 inline-block text-transparent bg-clip-text";
  return (
    <div className="custom-shadow flex flex-col text-center bg-bg-gray w-full rounded-[32px] p-10 gap-5 max-md:mt-28 max-lg:mt-28">
      <h2 className={`${gradientText} text-2xl font-inter font-bold`}>
        Get in Touch
      </h2>
      <h1 className="header-color futura-bold-text text-4xl p-2 max-md:text-sm">
        Your Voice Matters to Us
      </h1>
      <p className="content-color font-poppins font-thin text-lg max-md:text-xs max-lg:text-sm">
        Reach out and let's start a conversation!
      </p>
      <form className="flex flex-col w-full mx-auto gap-5" action="">
        <div className="flex gap-5">
          <input
            className="w-1/2 rounded-2xl py-6 pr-2 pl-10 max-md:h-[60px] max-md:pl-5 max-md:pr-0 max-md:text-xs"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            className="w-1/2 rounded-2xl py-6 pr-2 pl-10 max-md:h-[60px] max-md:pl-5 max-md:pr-0 max-md:text-xs"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <textarea
          className="w-full rounded-2xl py-6 pr-2 pl-10 max-md:pl-5 max-md:text-xs"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input
          className="bg-bg-purple text-white cursor-pointer w-full rounded-2xl py-6 max-md:w-full max-md:py-4 max-md:text-sm"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Contact;
