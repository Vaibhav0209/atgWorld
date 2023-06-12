import React, { useState } from "react";
import "./Tab.css";
import Main from "./Main";

const Article = () => {
  return (
    <h2 className="text-center mt-6 font-bold text-red-600 h-80">
      Article is not availabel
    </h2>
  );
};
const Education = () => {
  return (
    <h2 className="text-center mt-6 font-bold text-red-600 h-80">
      Education is not availabel
    </h2>
  );
};
const Event = () => {
  return (
    <h2 className="text-center mt-6 font-bold text-red-600 h-80">
      Event is not availabel
    </h2>
  );
};
const Job = () => {
  return (
    <h2 className="text-center mt-6 font-bold text-red-600 h-80">
      Job is not availabel
    </h2>
  );
};
const Tab = () => {
  const [toggleState, setToggleSet] = useState(1);
  const toggleTab = (index) => {
    setToggleSet(index);
  };

  return (
    <>
      <div className="flex justify-between items-center lg:mx-48 mt-3 border-b">
        <div className="lg:flex hidden space-x-10  h-11 justify-center items-center">
          <div
            className={
              toggleState === 1
                ? "h-full py-2 active-tabs cursor-pointer"
                : "h-full py-2 not-active cursor-pointer"
            }
            onClick={() => {
              toggleTab(1);
            }}
          >
            All Posts(32)
          </div>
          <div
            className={
              toggleState === 2
                ? "h-full py-2 active-tabs cursor-pointer"
                : "h-full py-2 not-active cursor-pointer"
            }
            onClick={() => {
              toggleTab(2);
            }}
          >
            Article
          </div>
          <div
            className={
              toggleState === 3
                ? "h-full py-2 active-tabs cursor-pointer"
                : "h-full py-2 not-active cursor-pointer"
            }
            onClick={() => {
              toggleTab(3);
            }}
          >
            Event
          </div>
          <div
            className={
              toggleState === 4
                ? "h-full py-2 active-tabs cursor-pointer"
                : "h-full py-2 not-active cursor-pointer"
            }
            onClick={() => {
              toggleTab(4);
            }}
          >
            Education
          </div>
          <div
            className={
              toggleState === 5
                ? "h-full py-2 active-tabs cursor-pointer"
                : "h-full py-2 not-active cursor-pointer"
            }
            onClick={() => {
              toggleTab(5);
            }}
          >
            Job
          </div>
        </div>
        <span className="hidden lg:flex space-x-3">
          <button
            type="button"
            className="bg-[#EDEEF0] text-black px-4 py-2 rounded-sm mb-1"
          >
            Write a Post{" "}
            <span className="ml-2">
              <box-icon name="down-arrow" size="xs" type="solid"></box-icon>
            </span>
          </button>
          <button
            type="button"
            className="flex bg-white text-[#6A6A6B] px-4 py-2 rounded-[4px] border-2 mb-1"
          >
            <box-icon name="log-in" color="#6A6A6B"></box-icon>
            <span className="ml-[6px]">Join Group</span>
          </button>
        </span>
        <p className="inline lg:hidden">Posts(368)</p>
        <span className="flex space-x-1 justify-center items-center lg:hidden  bg-[#F1F3F5] py-1 px-2 mb-1 rounded-md">
          <p className="lg:hidden">Filter:</p>
          <select
            className="inline h-full py-2 lg:hidden bg-[#F1F3F5] border-none"
            name="filter"
            id=""
          >
            <option value="All">All</option>
            <option value="Article">Article</option>
            <option value="Event">Event</option>
            <option value="Education">Education</option>
            <option value="Job">Job</option>
          </select>
        </span>
      </div>
      {toggleState === 1 ? (
        <Main />
      ) : toggleState === 2 ? (
        <Article />
      ) : toggleState === 3 ? (
        <Event />
      ) : toggleState === 4 ? (
        <Education />
      ) : (
        <Job />
      )}
    </>
  );
};

export default Tab;
