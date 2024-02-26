import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/search-icon.svg";
import Menu from "../../assets/menu.svg";
import closeMenu from "../../assets/close-menu.svg";

function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col md:flex-row gap-5 md:gap-10 justify-around md:justify-center items-center bg-[#212731] p-4 text-white">
        <div className="flex gap-5">
          <div className="relative h-full flex">
            <input
              className="rounded-md outline-none text-black"
              type="text"
              onClick={() => setIsSearchActive(!isSearchActive)}
            />
            <img
              className={`absolute left-1 top-1 w-4 h-5 ${
                isSearchActive ? "hidden" : ""
              }`}
              src={SearchIcon}
              alt="icon-s"
            />
          </div>
          <div className="md:hidden">
            <img
              className={`${!isMenuOpen ? "" : "hidden"}`}
              onClick={() => setIsMenuOpen(true)}
              src={Menu}
              alt="ham-icon"
            />
            <img
              className={`${isMenuOpen ? "" : "hidden"}`}
              onClick={() => setIsMenuOpen(false)}
              src={closeMenu}
              alt="ham-icon"
            />
          </div>
        </div>
        <div
          className={`md:flex flex-col md:flex-row gap-5 md:gap-10 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <p>Categories</p>
          <p>Website Builders</p>
          <p>Today's deals</p>
        </div>
      </nav>
    </>
  );
}

const Container = styled.div``;

export default Navbar;
