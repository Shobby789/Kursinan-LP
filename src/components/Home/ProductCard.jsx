import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProductCard = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-2 items-start group cursor-pointer relative">
      <img
        src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="chair1"
        className="w-full h-[85%] group-hover:opacity-[0.8] transition-all duration-300"
      />
      <button className="w-16 h-16 rounded-full flex items-center justify-center p-4 bg-slate-300 absolute top-[40%] left-[40%] group-hover:visible invisible transition-all duration-300">
        <FiArrowUpRight className="w-full h-full text-white" />
      </button>
      <h1 className="text-white font-semibold text-2xl">Modern Chairs Style</h1>
      <p className="text-white font-normal text-base">934 stock available</p>
    </div>
  );
};

export default ProductCard;
