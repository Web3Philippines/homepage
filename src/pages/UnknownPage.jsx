import React from 'react';

const UnknownPage = () => {
   
    return (
        <div className="products flex flex-col text-center justify-center items-center bg-bg-gray w-full rounded-[32px] p-10 gap-5 max-md:mt-28">
            <h1 className="futura-bold-text text-6xl p-2 max-md:text-xl">
               Uh oh.
            </h1>
            <p className="font-poppins font-normal text-xl p-2 max-md:text-xs">
               We ran into an issue, but don't worry, we'll take care of it for sure.
            </p>
            <a href="/" className="w-full"><button className="bg-bg-purple text-white cursor-pointer w-1/2 rounded-2xl py-6 max-md:text-xs max-md:w-[120px] max-md:h-[50px] max-md:py-2">
                Back to Homepage
            </button></a>
        </div>
    );
}

export default UnknownPage