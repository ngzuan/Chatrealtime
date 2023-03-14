import React from "react";
import logo from "../image/logo.svg";
import Navlink from "./Navlink";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  return (
    <div className="text-white z-50 flex items-center w-[100%] bg-homeColor_primary">
      <header className="grid lg:grid-cols-12 w-full px-6 lg:w-[1180px] md:grid-cols-8 md:px-10 sm:grid-cols-5 max-w-[1260px] lg:mx-auto gap-5 h-[80px]">
        <div className="col-span-2 flex items-center h-full">
          <img src={logo} className=" h-[60%]" alt="discord" />
        </div>
        <nav className="lg:flex hidden  items-center  col-start-3 mx-auto lg:space-x-6 md:space-x-2 col-end-11">
          <Navlink path="/channels" name="Download" />
          <Navlink path="/channels" name="Nitro" />
          <Navlink path="/channels" name="Safety" />
          <Navlink path="/channels" name="Blog" />
          <Navlink path="/channels" name="Careers" />
          <Navlink path="/channels" name="Careers" />
          <Navlink path="/channels" name="Careers" />
        </nav>
        <div className="flex items-center md:col-start-7 md:col-end-9 sm:col-start-4 sm:col-end-6 lg:col-start-11 lg:col-end-13 space-x-4 ml-auto ">
          <button className="bg-white py-2 px-4 text-black text-lg rounded-3xl hover:text-homeColor_primary hover:shadow-lg hover:shadow-black/30  ">
            Login
          </button>
          <GiHamburgerMenu className=" lg:hidden h-9 w-8" />
        </div>
      </header>
    </div>
  );
}

export default Header;
