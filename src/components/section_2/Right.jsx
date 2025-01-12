import React from "react";

const Right = () => {
  return (
    <div className="relative inset-0 -z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#F9D74C"
          fillOpacity="1"
          d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,154.7C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* image of tv */}
      <div className="absolute bottom-0 left-0 text-white">
        <img
          src="\src\assets\best-grade-left-image.jpg"
          alt=""
          className="h-[40vh] sm:h-[50vh] md:h-[60vh] w-auto ml-2 sm:ml-4 md:ml-6 mt-[20vh] sm:mt-[25vh] md:mt-[30vh]"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-20 ml-[50%]">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-relaxed">
          <span className="block">Access a Vast</span>
          <span className="block">Collection of</span>
          <span className="block">Past Papers</span>
        </h3>
        <button className="mt-6 px-6 py-2 bg-green-400 text-white text-sm rounded-full shadow hover:bg-green-500">
          Explore now
        </button>
      </div>

      <div className="absolute bottom-0  right-2 ">
        <img
          src="\src\assets\bes-icon-images-1.jpg"
          alt="Optional Icon"
          className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mr-64 mb-9"
        />
      </div>
    </div>
  );
};

export default Right;
