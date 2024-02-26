import React from "react";
import PCImage from "../../assets/pc-image.svg";

const cardItems = [
  {
    id: 1,
    pcImage: PCImage,
    tag1: "20% Off",
    tag2: "Limited time ",
    head: "Webbuilder 1",
    desc: "Computer  Modern clasic with wix support",
    discountPrice: "$39.96",
    originalPrice: "$49.96",
    off: "(20% Off)",
    btnName: "View Deal",
  },
  {
    id: 2,
    pcImage: PCImage,
    tag1: "20% Off",
    tag2: "Limited time ",
    head: "Webbuilder 1",
    desc: "Computer  Modern clasic with wix support",
    discountPrice: "$39.96",
    originalPrice: "$49.96",
    off: "(20% Off)",
    btnName: "View Deal",
  },
  {
    id: 3,
    pcImage: PCImage,
    tag1: "20% Off",
    tag2: "Limited time ",
    head: "Webbuilder 1",
    desc: "Computer  Modern clasic with wix support",
    discountPrice: "$39.96",
    originalPrice: "$49.96",
    off: "(20% Off)",
    btnName: "View Deal",
  },
];

function Cards() {
  return (
    <>
      <div className=" flex flex-col md:flex-row gap-5 w-full justify-center items-center md:justify-around">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className=" flex gap-5 flex-col justify-center items-center w-[250px]"
          >
            <div>
              <img src={item.pcImage} alt="pcImg" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" text-[#074786]  flex gap-2">
                <p className="bg-[#F2F4F7] rounded-lg p-1 px-2">{item.tag1}</p>
                <p className="bg-[#F2F4F7] rounded-lg p-1 px-2">{item.tag2}</p>
              </div>
              <div className=" text-center">
                <h3 className=" text-[#626E79] font-bold">{item.head}</h3>
              </div>
              <div>
                <p className=" text-[#626E79]">{item.desc}</p>
              </div>
              <div className=" flex items-baseline gap-2">
                <p className=" text-[#5C6874] text-[20px]">
                  {item.discountPrice}
                </p>
                <p className=" text-[#9FA9B3] text-[14px]">
                  {item.originalPrice}
                </p>
                <p className=" text-[#EF4C5D] text-[13px]">{item.off}</p>
              </div>
            </div>
            <div className="">
              <button
                className={`capitalize bg-[#1B88F4] rounded-lg text-white px-5 py-2 w-[250px] transform transition-transform hover:bg-[#1b9df4] hover:scale-105`}
              >
                {item.btnName}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
