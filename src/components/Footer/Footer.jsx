import React from "react";
import AFIcon from "../../assets/ffa-icon.svg";

const categories = [
  "Web Builder",
  "Hosting",
  "Data Center",
  "Robotic-Automation",
];

const contacts = [
  "Contact",
  "Privacy Policy",
  "Terms Of Service",
  "Categories",
  "About",
];

function Footer() {
  return (
    <>
      <footer className="bg-[#212731] flex flex-col md:flex-row gap-10 h-[400px]  md:gap-32 justify-evenly  py-10 md:py-0 md:pl-20">
        <div className="ml-[180px] mt-[60px]">
          <h3 className="text-white uppercase">Categories</h3>
          <ul className="flex flex-col gap-2 mt-4">
            {categories.map((item, index) => (
              <li
                className="cursor-pointer font-thin text-[#B6BDC4]"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-[60px]">
          <h3 className="text-white uppercase">Contact</h3>
          <ul className="flex flex-col gap-2 mt-4">
            {contacts.map((contact, index) => (
              <li
                className="cursor-pointer font-light text-[#B6BDC4]"
                key={index}
              >
                {contact}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-1 justify-center items-center mr-[100px]">
          <p className="cursor-pointer font-light text-[#D1D6DA]">
            United States
          </p>
          <img className="w-[15px] cursor-pointer" src={AFIcon} alt="AF Icon" />
        </div>
      </footer>
    </>
  );
}

export default Footer;
