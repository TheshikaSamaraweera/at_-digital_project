import React from "react";
import hero_image from "../assets/Hero Image.png";

const HeroSection = () => {
  return (
    <div className="relative">
      <img src={hero_image} alt="Hero_Section_image" className="w-full " />
      <div className="bottom-16 left-16 lg:absolute lg:bottom-16 lg:left-16 lg:w-[40%]">
        <div className="bg-gradient-to-r from-green-500 to-cyan-500 bg-opacity-80 lg:rounded p-14 lg:h-auto">
          <div className="container">
            <h1 className="text-white text-4xl font-bold mb-4">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <button className="px-6 py-2 text-white bg-orange-400 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-500 hover:shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
