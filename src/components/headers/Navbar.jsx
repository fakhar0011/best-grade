import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-2 flex items-center justify-between bg-transparent fixed w-full z-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/src/assets/logo-best-gradez.webp"
          alt="BestGradez Logo"
          className="h-8"
        />
      </div>

      {/* Toggler for Small Screens */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex lg:space-x-6 lg:items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-20`}
      >
        <a
          href="#"
          className="block lg:inline-block text-orange-600 font-bold text-[.8rem] hover:underline px-4 py-2 lg:p-0"
        >
          HOME
        </a>
        <a
          href="#"
          className="block lg:inline-block text-black font-medium text-[.8rem] px-4 py-2 lg:p-0"
        >
          NOTES LIBRARY
        </a>
        <a
          href="#"
          className="block lg:inline-block text-black font-medium text-[.8rem] px-4 py-2 lg:p-0"
        >
          TOPICAL PAPERS
        </a>
        <a
          href="#"
          className="block lg:inline-block text-black font-medium text-[.8rem] px-4 py-2 lg:p-0"
        >
          YEARLY PAPERS
        </a>
      </div>

      {/* Buttons Section */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-20 p-4 lg:p-0`}
      >
        <button className="flex items-center bg-green-500 text-sm text-white px-3 py-1 rounded-full shadow hover:bg-green-600">
          <LoginIcon className="mr-2 text-base" style={{ fontSize: ".8rem" }} />{" "}
          Sign In
        </button>
        <button className="flex items-center bg-green-500 text-sm text-white px-3 py-1 rounded-full shadow hover:bg-green-600">
          <PersonAddIcon
            className="mr-2 text-base"
            style={{ fontSize: ".8rem" }}
          />{" "}
          Sign Up
        </button>
      </div>
    </nav>
  );
}
