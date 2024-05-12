import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-2 items-start group cursor-pointer relative">
      <img
        src={product?.image}
        alt="chair1"
        className="w-full h-[85%] opacity-[0.8] group-hover:opacity-[0.6] transition-all duration-300"
      />
      <button className="w-16 h-16 rounded-full flex items-center justify-center p-4 bg-slate-300 absolute top-[40%] left-[40%] group-hover:visible invisible transition-all duration-300">
        <FiArrowUpRight className="w-full h-full text-white" />
      </button>
      <h1 className="text-white font-semibold text-2xl">{product?.title}</h1>
      <p className="text-white font-normal text-base">{product?.stock}</p>
    </div>
  );
};

export default ProductCard;
