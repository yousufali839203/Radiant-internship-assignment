import React from "react";
import PCImage from "../../assets/pc-image.svg";
import AIcon from "../../assets/ar-icon.svg";
import TIcon from "../../assets/tick-icon.svg";
import CupIcon from "../../assets/cup-icon.svg";
import DimIcon from "../../assets/dimond-icon.svg";

import ReviewTag from "../ReviewTag";

import Tag from "../Tag";

const cards = [
  {
    id: 1,
    head: "Builder 1",
    image: PCImage,
    spanHead: "WixPro 72-Inch Responsive Website Builder-",
    content:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    subhead: "Main highlights",
    desc: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    showMore: "Show more",
    icon: AIcon,
    rating: "9.8",
    grade: "Exceptional",
  },
  {
    id: 2,
    head: "Builder",
    image: PCImage,
    spanHead: "WixPro 72-Inch Responsive Website Builder-",
    content:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    subhead: "Main highlights",
    desc: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    showMore: "Show more",
    icon: AIcon,
    rating: "9.5",
    grade: "Excellent",
  },
  {
    id: 3,
    head: "Builder 1",
    image: PCImage,
    spanHead: "WixPro 72-Inch Responsive Website Builder-",
    content:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    subhead: "Main highlights",
    desc: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    showMore: "Show more",
    icon: AIcon,
    rating: "9.3",
    grade: "Exceptional",
  },
  {
    id: 4,
    head: "CDK",
    image: PCImage,
    spanHead: "WixPro 72-Inch Responsive Website Builder-",
    content:
      " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    subhead: "Main highlights",
    desc: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    showMore: "Show more",
    icon: AIcon,
    rating: "9.1",
    grade: "Very Good",
    descArr: [
      {
        sn: 9.9,
        name: "Building Responsive",
        iconT: TIcon,
        desc: "Documentation",
      },
      {
        sn: 8.9,
        name: "Cool",
        iconT: TIcon,
        desc: "Easy Use",
      },
      {
        sn: 8.9,
        name: "Docs",
        iconT: TIcon,
        desc: "Out of box",
      },
    ],
  },
];

function BuilderCard() {
  return (
    <>
      <div className=" flex flex-col gap-16 px-5 mr-[100px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" relative flex flex-col md:flex-row gap-10"
          >
            {card.id === 1 && <Tag tagIcon={CupIcon} tagName={"Best Choice"} />}
            {card.id === 2 && <Tag tagIcon={DimIcon} tagName={"Best Value"} />}
            <div
              className={`absolute top-0 left-0 flex justify-center items-center ${
                card.id === 1 ? "" : "border"
              } border-[#E1E4E6] w-[40px] h-[40px] rounded-full text-[#626E79]`}
            >
              <p>{card.id}</p>
            </div>

            <div className=" w-full md:w-[25%] flex flex-col items-center gap-5">
              <img src={card.image} alt="pc-img" />
              <h3 className=" text-[#626E79]">{card.head}</h3>
            </div>
            <div className=" w-full md:w-[50%] flex flex-col gap-2 justify-start">
              <div className=" text-[#4B5665]">
                <span className=" text-[#2C384A] text-[16px] font-bold">
                  {card.spanHead}
                </span>
                {card.content}
              </div>
              <h2 className=" text-[#2C384A] text-[16px] font-bold">
                {card.subhead}
              </h2>
              <div
                className={` pl-5 ${
                  card.id === 4 ? "hidden" : ""
                } text-[#4B5665]`}
              >
                {card.desc}
              </div>
              {card.descArr && (
                <div className=" flex flex-col gap-4">
                  <div
                    className={` ml-6 flex flex-col gap-2 text-[#4B5665] bg-[#FFF4ED] p-2 mr-5 rounded-lg`}
                  >
                    {card.descArr.map((item, index) => (
                      <div key={index} className=" text-[#4B5665] flex gap-3">
                        <div className=" w-[30px] h-[24px] bg-white rounded-md text-[#1B88F4] text-center">
                          {item.sn}
                        </div>
                        <div>{item.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className=" flex flex-col gap-3">
                    <p className=" text-[#2C384A] font-medium">
                      Why we love it
                    </p>
                    <div className=" flex flex-col gap-1 text-[#4B5665]">
                      {card.descArr.map((item, index) => (
                        <div key={index} className=" text-[#4B5665] flex gap-3">
                          <img src={item.iconT} />
                          <div>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className=" flex items-center">
                <p className=" cursor-pointer text-[#1B88F4]">
                  {card.showMore}
                </p>
                <img className=" cursor-default" src={card.icon} alt="icon-a" />
              </div>
            </div>
            <div className=" w-full md:w-[25%] flex flex-col justify-between gap-10 items-center">
              <div>
                <ReviewTag
                  rating={card.rating}
                  grade={card.grade}
                  cid={card.id}
                />
              </div>

              <button
                className={`capitalize bg-[#1B88F4] rounded-lg text-white px-5 py-2 w-[190px] transform transition-transform hover:bg-[#1b9df4] hover:scale-105`}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BuilderCard;
