import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ description, name }) => {
  return (
    <div className="flex flex-col items-start gap-4 w-[18rem]">
      <div className="w-16 h-16 bg-black rounded-full p-5">
        <FaQuoteLeft className="text-white w-full h-full" />
      </div>
      <p className="text-base text-gray-400">{description}</p>
      <div className="border w-full" />
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-sm text-gray-400">CEO Goole</p>
      </div>
    </div>
  );
};

export default ReviewCard;
