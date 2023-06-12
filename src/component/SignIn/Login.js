import React from "react";
import vector from "../../assets/Group 3.png";

const Login = () => {
  return (
    <div className="conatiner flex justify-center items-center h-screen w-screen main-container">
      <span className="absolute top-[60px] right-[380px] p-2 bg-[#F7F8FA] rounded-full flex justify-center items-center">
        <box-icon name="x"></box-icon>
      </span>
      <div className="w-[736px] h-[513px] rounded-xl border">
        <h2 className="text-center text-[#008A45] text-[14px] bg-[#EFFFF4] p-3 rounded-t-xl">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </h2>
        <div className="flex justify-around items-center mt-6">
          <h3 className="font-bold text-2xl">Sign In</h3>
          <p className="text=[#3D3D3D] text-[12px]">
            Don’t have an account yet?{" "}
            <span className="text-[#2F6CE5] cursor-pointer">
              Create new for free!
            </span>
          </p>
        </div>
        <div className="w-full flex">
          <div className="flex flex-col ml-4">
            <div className="grid grid-cols-2 p-4 ">
              {/* <input
                type="text"
                name="fname"
                id=""
                placeholder="First Name"
                className="col-span-1 bg-[#F7F8FA] h-10 border"
              />
              <input
                type="text"
                name="lname"
                id=""
                placeholder="Last Name"
                className="col-span-1 bg-[#F7F8FA] h-10 border"
              /> */}
              <input
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="col-span-2 bg-[#F7F8FA] h-10 border"
              />
              <input
                type="password"
                name="pass"
                id=""
                placeholder="password"
                className="col-span-2 bg-[#F7F8FA] h-10 border"
              />
              {/* <input
                type="password"
                name="Cpass"
                id=""
                placeholder="Confirm Password"
                className="col-span-2 bg-[#F7F8FA] h-10 border"
              /> */}
            </div>
            <button
              type="button"
              className="col-span-2 bg-[#2F6CE5] text-white text-center p-2 mt-5 w-80 mx-auto rounded-3xl"
            >
              Sign In
            </button>
            <button
              type="button"
              className="col-span-2  text-black text-center p-2 mt-5 w-80 mx-auto rounded-lg border flex space-x-1 justify-center"
            >
              <box-icon
                type="logo"
                name="facebook-square"
                color="blue"
              ></box-icon>
              <span>Sign up with Facebook</span>
            </button>
            <button
              type="button"
              className="col-span-2  text-black text-center p-3 mt-2 w-80 mx-auto rounded-lg border flex space-x-1 justify-center"
            >
              <box-icon name="google" type="logo"></box-icon>
              <span>Sign up with Google</span>
            </button>
            <p className="text-center mt-5 cursor-pointer">forgot Pasword?</p>
          </div>
          <div className="ml-6">
            <img src={vector} alt="vector" />
            <p className="text-[10px] opacity-[.6]">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
