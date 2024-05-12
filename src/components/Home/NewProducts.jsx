import React from "react";
import { styles } from "../../styles/styles";
import { GoArrowUpRight } from "react-icons/go";

const NewProducts = () => {
  return (
    <section
      className={`w-full py-6 lg:py-20 ${styles.bgBody} flex flex-col gap-y-20`}
    >
      <div
        className={`${styles.paddingHorizontal} grid grid-cols-1 lg:grid-cols-2 gap-y-6`}
      >
        <div className="flex items-center">
          <h1 className="text-6xl font-semibold">New Products</h1>
        </div>
        <p className="text-base text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
          mollitia adipisci quia accusamus tempora quod. A voluptatum rerum enim
          consectetur. Saepe eligendi, ratione quaerat praesentium laudantium
          aliquid dicta quas facere!
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2">
        <div className="w-full relative group">
          <img
            src="https://images.unsplash.com/photo-1567538096621-38d2284b23ff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full"
          />
          <button className="invisible transition-all duration-200 w-16 h-16 flex items-center justify-center p-4 bg-slate-300 rounded-full absolute top-[60%] left-12 group-hover:visible">
            <GoArrowUpRight className="text-white w-full h-full" />
          </button>
          <div className="absolute bottom-6 w-full px-4 md:px-8 lg:px-12 flex flex-col gap-y-2">
            <div className="border w-full border-white" />
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">
                  Modern Chairs Style 1
                </h1>
              </div>
              <div>
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">934 stock</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative group">
          <img
            src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full"
          />
          <button className="invisible transition-all duration-200 w-16 h-16 flex items-center justify-center p-4 bg-slate-300 rounded-full absolute top-[60%] left-12 group-hover:visible">
            <GoArrowUpRight className="text-white w-full h-full" />
          </button>
          <div className="absolute bottom-6 w-full px-4 md:px-8 lg:px-12 flex flex-col gap-y-2">
            <div className="border w-full border-white" />
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">
                  Modern Chairs Style 1
                </h1>
              </div>
              <div>
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">934 stock</h1>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full relative group">
          <img
            src="https://images.unsplash.com/photo-1561677978-583a8c7a4b43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full"
          />
          <button className="invisible transition-all duration-200 w-16 h-16 flex items-center justify-center p-4 bg-slate-300 rounded-full absolute top-[60%] left-12 group-hover:visible">
            <GoArrowUpRight className="text-white w-full h-full" />
          </button>
          <div className="absolute bottom-6 w-full px-4 md:px-8 lg:px-12 flex flex-col gap-y-2">
            <div className="border w-full border-white" />
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">
                  Modern Chairs Style 1
                </h1>
              </div>
              <div>
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">934 stock</h1>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="w-full relative group">
          <img
            src="https://images.unsplash.com/photo-1554104707-a76b270e4bbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full"
          />
          <button className="invisible transition-all duration-200 w-16 h-16 flex items-center justify-center p-4 bg-slate-300 rounded-full absolute top-[60%] left-12 group-hover:visible">
            <GoArrowUpRight className="text-white w-full h-full" />
          </button>
          <div className="absolute bottom-6 w-full px-4 md:px-8 lg:px-12 flex flex-col gap-y-2">
            <div className="border w-full border-white" />
            <div className="flex justify-between items-center">
              <div className="">
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">
                  Modern Chairs Style 1
                </h1>
              </div>
              <div>
                <p className="text-gray-500 text-base">Type</p>
                <h1 className="font-semibold text-white text-xl">934 stock</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
