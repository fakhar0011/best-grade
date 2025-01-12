import React from "react";
import Navbar from "../components/headers/navbar";
import Footer from "../components/headers/footer";
import Section_2 from "../components/section_2/section_2";
import Section from "../components/section_1/section";
import Section_3 from "../components/section_3/Section_3";
import Section_4 from "../components/section_4/section_4";

const Home = () => {
  return (
    <div className="snap-container">
      <Navbar />
      <div className="snap-sections">
        <Section />
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </div>
    </div>
  );
};

export default Home;
