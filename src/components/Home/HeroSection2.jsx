import React from "react";
import Cards from "./Cards";

function HeroSection2() {
  return (
    <>
      <section className=" flex flex-col gap-10 mt-16 px-16 mb-10 mx-[150px]">
        <h3 className=" text-[#2C384A] text-[32px]">
          Related deals you might like for
        </h3>
        <div className=" w-full">
          <Cards />
        </div>
        <div className=" flex flex-col md:flex-row justify-between px-10 mt-5">
          <div className=" md:w-[500px]">
            <h4 className=" text-[#5C6874] text-[32px]">
              Sign up and get exclusive special deals
            </h4>
          </div>
          <div className=" flex justify-center items-center md:block">
            <input
              className="p-2 outline-none border hover:border-[2px] hover:border-[#1B88F4] rounded-l-lg bg-[#fff] "
              type="text"
            />

            <button
              className={`capitalize bg-[#1B88F4] rounded-lg text-white px-5 py-2 w-[180px] transform transition-transform hover:bg-[#1b9df4] hover:scale-105`}
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection2;
