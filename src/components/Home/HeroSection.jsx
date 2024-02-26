import React from "react";
import CheckIcon from "../../assets/check-icon.svg";
import IIcon from "../../assets/I-icon.svg";
import AIcon from "../../assets/a-icon.svg";
import VectorI from "../../assets/Vector-icon.svg";
import BuilderCard from "./BuilderCard";

const headings = [
  "Tools",
  "AWS Builder",
  "Start Build",
  "Build Supplies",
  "Tooling",
  "BlueHosting",
];

function HeroSection() {
  return (
    <>
      <section className=" flex flex-col gap-5 px-10 pt-10 ml-[200px]">
        <div className=" flex gap-5 flex-col mr-[200px]">
          <h1 className=" text-[48px] text-[#2C384A]">
            Best Website builders in the US
          </h1>
          <div className="line bg-[#E1E4E6] w-full h-[2px]"></div>
          <div className=" flex justify-between text-[#4B5665]">
            <div className=" flex flex-col sm:flex-row gap-5">
              <div className=" flex gap-1 items-center">
                <img
                  className=" w-[20px] h-[20px]"
                  src={CheckIcon}
                  alt="c-icon"
                />
                <p>Last Updated</p>
                <p>-</p>
                <p>February 22, 2020</p>
              </div>
              <div className=" flex gap-1 items-center">
                <img className=" w-[20px] h-[20px]" src={IIcon} alt="i-icon" />
                <p>Advertising Disclosure</p>
              </div>
            </div>
            <div className=" flex gap-1">
              <p>Top Relevant</p>
              <img src={AIcon} alt="a-icon" />
            </div>
          </div>
          <div className="line bg-[#E1E4E6] w-full h-[2px]"></div>
        </div>

        {/*folders */}
        <div className=" flex flex-col mr-[200px]">
          <ol className=" flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center items-center sm:items-start sm:justify-between px-5">
            {headings.map((item, index) => (
              <li key={index} className=" text-[#4B5665]">
                {item}
              </li>
            ))}
          </ol>
          <div className="sm:hidden my-3 line bg-[#E1E4E6] w-full h-[2px]"></div>
          <ol className=" flex flex-col sm:flex-row items-center md:items-baseline mt-5 gap-3 text-[#4B5665]">
            <li>Home</li>
            <img
              className=" w-[10px] h-[8.5px]"
              src={VectorI}
              alt="vector-icon"
            />
            <li>Hosting for all</li>
            <img
              className=" w-[10px] h-[8.5px]"
              src={VectorI}
              alt="vector-icon"
            />
            <li>Hosting</li>
            <img
              className=" w-[10px] h-[8.5px]"
              src={VectorI}
              alt="vector-icon"
            />
            <li>Hosting6</li>
            <img
              className=" w-[10px] h-[8.5px]"
              src={VectorI}
              alt="vector-icon"
            />
            <li>Hosting5</li>
          </ol>
        </div>
        {/* builders cards */}
        <div className=" mt-16">
          <BuilderCard />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
