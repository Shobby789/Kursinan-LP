import React from "react";
import { styles } from "../../styles/styles";
import { GoArrowDown } from "react-icons/go";
import Navbar from "../Global/Navbar";

const Hero = () => {
  return (
    <main className="w-screen h-auto pt-28 pb-12 lg:h-screen hero-section">
      <div
        className={`w-full h-full flex flex-col items-start justify-center text-white gap-8 lg:pt-20 ${styles.paddingHorizontal}`}
      >
        <h1 className="font-bold text-5xl md:8xl lg:text-8xl">
          The best collection of chairs is here
        </h1>
        <div className="w-full border border-slate-300" />
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-x-6 gap-y-12">
          <p className="w-full lg:w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            vitae alias commodi deleniti illo nam perspiciatis sint doloribus
            non expedita nesciunt debitis labore, rem optio ab quam facilis
            deserunt, cupiditate sed reiciendis, consequuntur quas dolorum.
          </p>
          <button className="border rounded-full flex items-center justify-center p-4 hover:opacity-[0.7] transition-all duration-300 animate-bounce">
            <GoArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
