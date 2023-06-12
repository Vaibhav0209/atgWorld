import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero-patterns h-[440px] relative">
        <span className="text-white pt-6 flex justify-around items-center sm:space-x-44 space-x-28 md:space-x-60 lg:hidden">
          <box-icon name="left-arrow-alt" color="white"></box-icon>
          <button className="border-2 border-white p-2 rounded-lg">
            Join Group
          </button>
        </span>
        <span className="left-10  top-72 sm:left-60 absolute">
          <h3 className="text-white text-[17px] sm:text-4xl font-bold">
            Computer Engineering
          </h3>
          <p className="text-white text-[12px] sm:text-[16px]">
            142,765 Computer Engineers follow this
          </p>
        </span>
      </div>
    </>
  );
};

export default Hero;
