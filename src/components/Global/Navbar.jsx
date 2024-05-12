import React, { useEffect, useState } from "react";
import { styles } from "../../styles/styles";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setScrolling(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full ${styles.paddingHorizontal} ${
          scrolling ? "bg-slate-50 shadow-lg" : "bg-transparent"
        } hidden lg:flex items-center justify-between py-6 fixed top-0 right-0 left-0 z-40`}
      >
        <h1
          className={`font-semibold text-2xl ${
            scrolling ? "text-black" : "text-white"
          }`}
        >
          Kursinan
        </h1>
        <div className="hidden lg:flex items-center gap-x-14">
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Collection
          </a>
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Company
          </a>
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Stories
          </a>
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Contact Us
          </a>
          <div className="flex items-center gap-x-2">
            <button
              className={`rounded-full w-9 h-9 flex items-center justify-center p-2 ${
                scrolling ? "border border-black" : "border"
              }`}
            >
              <IoSearchOutline
                className={`${
                  scrolling ? "text-black" : "text-white"
                } w-full h-full`}
              />
            </button>
            <button
              className={` rounded-full w-9 h-9 flex items-center justify-center p-2 ${
                scrolling ? "border border-black" : "border"
              }`}
            >
              <HiOutlineShoppingBag
                className={`${
                  scrolling ? "text-black" : "text-white"
                } w-full h-full`}
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-slate-50 shadow-lg ${styles.paddingHorizontal} lg:hidden flex items-center justify-between py-4 fixed top-0 right-0 left-0 z-40 overflow-x-hidden`}
      >
        <h1 className={`font-semibold text-2xl`}>Kursinan</h1>
        <div className="hidden lg:flex items-center gap-x-14">
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Collection
          </a>
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Company
          </a>
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Stories
          </a>
          <a
            href="/"
            className={`text-base font-medium ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Contact Us
          </a>
          <div className="flex items-center gap-x-2">
            <button
              className={`rounded-full w-9 h-9 flex items-center justify-center p-2 ${
                scrolling ? "border border-black" : "border"
              }`}
            >
              <IoSearchOutline
                className={`${
                  scrolling ? "text-black" : "text-white"
                } w-full h-full`}
              />
            </button>
            <button
              className={` rounded-full w-9 h-9 flex items-center justify-center p-2 ${
                scrolling ? "border border-black" : "border"
              }`}
            >
              <HiOutlineShoppingBag
                className={`${
                  scrolling ? "text-black" : "text-white"
                } w-full h-full`}
              />
            </button>
          </div>
        </div>
        <button onClick={() => setShowNav(!showNav)}>
          <CgMenuRight className="text-2xl" />
        </button>
        <div
          className={`w-full bg-transparent h-screen fixed top-0 right-0 bottom-0 left-0 z-50 ${
            showNav ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500`}
          onClick={() => setShowNav(!showNav)}
        >
          <div className="bg-slate-50 h-full w-1/2 float-end relative p-2 shadow-lg">
            <button onClick={() => setShowNav(!showNav)}>
              <IoClose className="text-2xl" />
            </button>
            <div className="flex flex-col items-start gap-4 pt-6 px-2">
              <a href="/" className={`text-base font-medium`}>
                Collection
              </a>
              <a href="/" className={`text-base font-medium`}>
                Company
              </a>
              <a href="/" className={`text-base font-medium`}>
                Stories
              </a>
              <a href="/" className={`text-base font-medium`}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
