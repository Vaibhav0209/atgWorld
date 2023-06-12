import React from "react";

const Sidebar = () => {
  return (
    <>
      <span className="lg:flex lg:justify-end h-10 items-center space-x-3 pb-2 mt-4">
        <box-icon name="location-plus" color="#5C5C5C"></box-icon>
        <input
          type="text"
          placeholder="Enter your location"
          name="location"
          id=""
          className="h-full border-none outline-none"
          value="Noida India"
        />
        <box-icon name="x" color="#5C5C5C"></box-icon>
      </span>
      <div className="lg:flex lg:justify-end h-10 items-center space-x-4 mt-5">
        <box-icon name="info-circle" color="#5C5C5C"></box-icon>
        <p className="w-56 text-[12px] text-[#c0bdbd]">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
    </>
  );
};

export default Sidebar;
