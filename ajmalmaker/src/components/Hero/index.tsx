import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl flex flex-col justify-around items-center border-2 border-dark-50 rounded-3xl h-[500px] w-full">
      <h3 className="mb-3 p-3 rounded-lg bg-dark-50 text-[40px] font-bold">
        Welcome To My Blog
      </h3>
      <div className="flex rounded-full bg-dark-50 border-2 w-[100px] h-[100px]"></div>
    </div>
  );
}

export default Hero;
