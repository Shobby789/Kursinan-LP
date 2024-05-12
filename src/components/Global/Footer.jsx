import React from "react";
import { styles } from "../../styles/styles";

const Footer = () => {
  return (
    <footer
      className={`py-6 lg:pt-20 lg:pb-12 ${styles.paddingHorizontal} flex flex-col gap-y-8 bg-black`}
    >
      <div className="w-full flex flex-col lg:flex-row items-start justify-start md:justify-between gap-y-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">General</h1>
          <p className="text-base text-gray-400">Contact</p>
          <p className="text-base text-gray-400">Showroom</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">Services</h1>
          <p className="text-base text-gray-400">Download</p>
          <p className="text-base text-gray-400">Agents</p>
          <p className="text-base text-gray-400">Certificates</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">Social Media</h1>
          <p className="text-base text-gray-400">Facebook</p>
          <p className="text-base text-gray-400">Instagram</p>
          <p className="text-base text-gray-400">Tiktok</p>
          <p className="text-base text-gray-400">Youtube</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-white">About</h1>
          <p className="text-base text-gray-400">Company</p>
          <p className="text-base text-gray-400">Careers</p>
          <p className="text-base text-gray-400">Legal</p>
          <p className="text-base text-gray-400">Help</p>
        </div>
      </div>
      <div className="border" />
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <h1 className="text-white font-semibold text-2xl">Kursinan</h1>
        <p className="text-base text-gray-400">Copyright 2024 - Kursinan</p>
      </div>
    </footer>
  );
};

export default Footer;
