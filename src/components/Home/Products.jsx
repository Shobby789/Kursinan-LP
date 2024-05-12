import React from "react";
import { styles } from "../../styles/styles";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section
      className={`py-6 lg:py-20 bg-black flex flex-col gap-14 ${styles.paddingHorizontal}`}
    >
      <div className={`w-full flex items-center flex-wrap gap-6`}>
        <button className="bg-white text-black font-medium text-base rounded-full px-4 py-2">
          Popular
        </button>
        <button className="hover:bg-white text-gray-400 border border-gray-400 hover:text-black font-medium text-base rounded-full px-4 py-2 transition-all duration-300">
          Modern Style
        </button>
        <button className="hover:bg-white text-gray-400 border border-gray-400 hover:text-black font-medium text-base rounded-full px-4 py-2 transition-all duration-300">
          Lounge Chairs
        </button>
      </div>
      <div
        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-white font-semibold text-7xl text-center lg:leading-[90px]">
          Accuracy and quality is our hallmark
        </h1>
        <p className="text-gray-400 text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          tempora rerum eveniet necessitatibus adipisci cupiditate tenetur, quia
          qui dolorum sint explicabo, sunt quaerat autem. Maiores est illo at
          laborum aliquid, dolores recusandae repellat asperiores sit nobis
          assumenda voluptates a, rem magnam explicabo necessitatibus veritatis?
          Tempore magni quam fuga sint deserunt.
        </p>
      </div>
    </section>
  );
};

export default Products;
