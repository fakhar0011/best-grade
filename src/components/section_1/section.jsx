import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Section = () => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="left mt-40 pl-7">
        <h1 className="text-[1.3rem] font-bold leading-tight">
          Unlock the secret <br /> of Acting Exam!
        </h1>
        <p className="text-[0.7rem] opacity-55 mt-1">
          Explore our extensive collection of past papers <br /> to help
          teachers and students achieve exam success
        </p>
        <div className="btn mt-2 flex space-x-2">
          <button className="text-[0.8rem]  px-4 py-2 font-poppins font-medium bg-[#EDEDD5] rounded-md opacity-60">
            A Level
          </button>
          <button className="text-[0.8rem]  px-4 py-2 font-poppins font-medium bg-[#EDEDD5] rounded-md opacity-60">
            O Level
          </button>
          <button className="text-[0.8rem] px-4 py-2 font-poppins font-medium bg-[#EDEDD5] rounded-md opacity-60">
            IGCSE
          </button>
        </div>
        <div className="form mt-2">
          <form className="flex items-center space-x-1 p-2">
            <input
              type="text"
              placeholder="Search Feature Coming Soon"
              className="px-3 py-1 text-sm border border-gray-300 rounded-l-full focus:outline-none focus:ring focus:ring-green-300"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-green-500 rounded-r-full text-white hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
            >
              <SearchIcon style={{ fontSize: 16 }} />
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="image">
        <img
          src="/src/assets/book.png"
          alt="Books"
          style={{ height: "100vh", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Section;
