import React from "react";
import logo from "../../assets/Union 1.png";
import profile from "../../assets/profile.png";
// import "boxicons";
const Navbar = () => {
  return (
    <>
      <div className="container w-full lg:flex hidden lg:space-x-80 justify-center px-2 py-4 ">
        <div className="flex ">
          <span className="text-[#27A365] lg:text-2xl">ATG</span>
          <span className="h-[7px] mx-1 w-1 bg-[#27A365] mt-5 rounded-sm"></span>
          <img src={logo} className="h-6 mt-1" alt="logo" />
          <span className="text-[#5C5D5D] text-2xl">WORLD</span>
        </div>
        <div className="flex h-11 w-96 bg-[#F2F2F2] rounded-3xl items-center p-3 space-x-2">
          <box-icon
            name="search"
            className="my-auto"
            size="sm"
            color="#7A7A7A"
          ></box-icon>
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search for your favorite groups in ATG"
            className="bg-[#F2F2F2] w-80 h-7 outline-none"
          />
        </div>
        <div className="flex w-60 justify-center items-center space-x-2">
          <img src={profile} alt="" />
          <span>
            siddharth Goyal{" "}
            <span className="ml-1">
              <box-icon name="down-arrow" size="xs" type="solid"></box-icon>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
