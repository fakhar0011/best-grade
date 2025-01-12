import React from "react";

const Section_3 = () => {
  return (
    <div className="w-full h-screen">
      <div class="relative min-h-screen flex items-center">
        <div class="absolute inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#F9D74C"
              fill-opacity="1"
              d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,154.7C840,139,960,181,1080,208C1200,235,1320,245,1380,250.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div class="container mx-auto px-6 lg:flex lg:items-center lg:space-x-10">
          <div class="lg:w-1/2 text-center lg:text-left ml-14">
            <h1 class="lg:text-xl font-bold leading-tight text-gray-800">
              Create Topical <br /> Custom Paper
            </h1>
            <p class="text-[0.8rem] text-gray-700 mt-4">
              Optimize your exam preparation with Topical <br /> Custom Papers
              for personalized and effective <br /> learning.
            </p>
            <button class="mt-6 px-6 py-2 bg-green-400 text-white text-sm rounded-full shadow hover:bg-green-500">
              Start Customizing
            </button>
          </div>

          <div class="lg:w-1/2 h-[30%] lg:mt-0 flex justify-center">
            <img
              src="\src\assets\girl.svg"
              alt="Illustration"
              style={{ height: "" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
