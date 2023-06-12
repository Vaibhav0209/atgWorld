import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import cardp1 from "../../assets/cardp1.png";
import cardp2 from "../../assets/cardp2.png";
import cardp3 from "../../assets/cardp3.png";
import cardp4 from "../../assets/profile.png";
const data = [
  {
    id: 1,
    image: card1,
    heading: "✍️ Article",
    subHead: "What if famous brands had regular fonts? Meet RegulaBrands!",
    content:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profile: cardp1,
    name: "Sarthak Kamra",
  },
  {
    id: 2,
    image: card2,
    heading: "🔬️ Education",
    subHead:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    content:
      "I/'ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profile: cardp2,
    name: "Sarah West",
  },
];

const data2 = [
  {
    id: 1,
    image: card3,
    heading: "🗓️ Meetup",
    subHead: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2018",
    loc: "Ahmedabad, India",
    profile: cardp3,
    name: "Ronal Jones",
    color: "#E56135",
    icon: "calendar-event",
    bname: "visit website",
  },
  {
    id: 2,
    image: "",
    heading: "💼️ Job",
    subHead: "Software Developer",
    date: "Innovaccer Analytics Private Ltd.",
    loc: "Noida, India",
    profile: cardp4,
    name: "Joseph Gray",
    color: "#02B875",
    icon: "briefcase-alt",
    bname: "Apply on Timesjobs",
  },
];
const Post = () => {
  return (
    <>
      {data.map((value) => {
        return (
          <div
            key={value.id}
            className="conatiner flex flex-col  border w-full rounded-lg mt-2"
          >
            <div className="w-full">
              <img src={value.image} alt="card" className="w-full" />
            </div>
            <p className="mt-5 ml-5">{value.heading}</p>
            <div className="p-5">
              <div className="flex justify-between mt-[10px]">
                <h4 className="text-xl ">{value.subHead}</h4>
                <box-icon name="dots-horizontal-rounded"></box-icon>
              </div>
              <p className="mt-3 text-[#5C5C5C]">{value.content}</p>
              <div className="flex justify-between items-center mt-8">
                <p className="flex  md:items-center">
                  <img src={value.profile} alt="profile" className="mx-3" />
                  {value.name}
                </p>
                <p className="flex space-x-3 mx-6 w-72 relative justify-center items-center text-[14px] text-[#5C5C5C]">
                  <box-icon name="show" color="#5C5C5C"></box-icon>
                  <span>1.4k views</span>
                  <span className="bg-[#EDEEF0] p-2  flex items-center absolute right-3">
                    <box-icon name="share-alt" type="solid"></box-icon>
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
      {data2.map((val) => {
        return (
          <div className="conatiner flex flex-col  border w-full rounded-lg mt-2">
            {val.image !== "" ? (
              <div className="w-full">
                <img src={val.image} alt="card" className="w-full" />
              </div>
            ) : (
              ""
            )}
            <p className="mt-5 ml-5">{val.heading}</p>
            <div className="p-5">
              <div className="flex justify-between mt-[10px]">
                <h4 className="text-xl ">{val.subHead}</h4>
                <box-icon name="dots-horizontal-rounded"></box-icon>
              </div>
              <div className="flex justify-start space-x-20">
                <p className="flex items-center space-x-2 mt-3">
                  <box-icon name={val.icon}></box-icon>
                  <span>{val.date}</span>
                </p>
                <p className="flex items-center space-x-2 mt-3">
                  <box-icon name="location-plus"></box-icon>
                  <span>{val.loc}</span>
                </p>
              </div>
              <button
                type="button"
                className={`w-full mt-4 border-2 p-2 rounded-lg text-[${val.color}]`}
              >
                {val.bname}
              </button>
              <div className="flex justify-between items-center mt-8">
                <p className="flex  items-center">
                  <img src={val.profile} alt="profile" className="mx-3" />
                  {val.name}
                </p>
                <p className="flex space-x-3 mx-6 w-72 relative justify-center items-center text-[14px] text-[#5C5C5C]">
                  <box-icon name="show" color="#5C5C5C"></box-icon>
                  <span>1.4k views</span>
                  <span className="bg-[#EDEEF0] p-2  flex items-center absolute right-3">
                    <box-icon name="share-alt" type="solid"></box-icon>
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
