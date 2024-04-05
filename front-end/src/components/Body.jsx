import React from "react";
import computer from "../assets/computer.png";
import search from "../assets/search.png";

const Body = () => {
  return (
    <div className="flex flex-col items-center justify-center px-12">
      <div className="flex flex-col md:flex-row pt-20">
        <img
          src={computer}
          alt="Computer"
          className="w-full h-auto max-w-md lg:ml-40 mx-auto md:w-1/2 mb-6 md:mb-0"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-purple-600 text-3xl font-bold mb-3 text-center md:text-left">
              Web & Mobile App Development
            </h2>
            <p className="mb-4 text-center md:text-left">
              Your web and mobile apps need all the power to grow your business.
              We use frameworks which enhance customer engagement methods to
              respond to different situations by your potentials customers who
              interact with your business online.
            </p>
            <div className="flex flex-col items-center justify-center">
              <button className="bg-orange-400 text-white px-4 py-2 rounded self-center md:self-start transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-12">
        <img
          src={search}
          alt="Magnifying glass with check mark"
          className="order-first md:order-last w-full h-auto max-w-md mx-auto md:w-1/2 mb-6 md:mb-0"
        />
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-2/3">
            <h2 className="text-purple-600 text-3xl font-bold mb-3 text-center md:text-left">
              Digital Strategy Consulting
            </h2>
            <p className="mb-4 text-center md:text-left">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix. We
              provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div className="flex flex-col items-center justify-center">
              <button className="bg-orange-400 text-white px-4 py-2 rounded self-center md:self-start transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
