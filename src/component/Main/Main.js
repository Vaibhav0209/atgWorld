import React from "react";
import Post from "../Post/Post";
import Sidebar from "../Sidebar/Sidebar";
const Main = () => {
  return (
    <div className="lg:px-48 md:px-40 lg:grid lg:grid-cols-12 mt-7 mb-20">
      <div className="lg:col-span-8 md:col-span-12">
        <Post />
      </div>
      <div className="col-span-4 lg:block hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Main;
