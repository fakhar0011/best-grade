import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ComputerIcon from "@mui/icons-material/Computer";
import Footer from "../headers/Footer";

const Section4 = () => {
  return (
    <div className="relative flex items-center justify-between h-screen w-full bg-[#f8fdf9] overflow-hidden">
      {/* Content Section */}
      <div className="z-10 flex-1 p-8 max-w-[50%]">
        <h1 className="text-xl font-bold mb-4 mt-10 leading-snug">
          Everything You <br /> Need for Exam <br /> Excellence
        </h1>
        {/* Image Section */}
        <div className="flex-1 z-10 text-center">
          <img
            src="\src\assets\laptop.png"
            alt="Laptop"
            className="max-h-[80%] mx-auto"
          />
        </div>
      </div>

      {/* Yellow Wave Background */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#f9d74c] z-0 flex flex-col items-center">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "center",
          }}
        >
          <path
            fill="#f9d74c"
            d="M0,160 C320,32 640,288 960,192 C1280,96 1440,160 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
        <div className="flex space-x-8 mb-6 mt-56 z-10">
          {[
            {
              icon: <ReceiptLongIcon fontSize="medium" />,
              text: "Topical Papers",
            },
            { icon: <MenuBookIcon fontSize="medium" />, text: "Notes Library" },
            {
              icon: <AssignmentTurnedInIcon fontSize="medium" />,
              text: "Solved Past Papers",
            },
            {
              icon: <ComputerIcon fontSize="medium" />,
              text: "Simulated Exams",
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-8 h-8 mb-2 mx-auto text-[.7rem] flex justify-center items-center bg-[#EDEDD5] rounded-lg">
                {item.icon}
              </div>
              <p className="text-[.5rem]">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="z-10">
          <button className="mt-6 px-6 py-1 bg-green-400 text-white text-sm rounded-full shadow hover:bg-green-500">
            Get started
          </button>
        </div>
      </div>
      <div className="absolute z-10 w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default Section4;
