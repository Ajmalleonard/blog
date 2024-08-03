import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "../Avatar/Avatar";

function Hero() {
  return (
    <div className="max-w-4xl flex p-10 relative flex-col justify-center items-center gap-4 border-2 border-dark-50 rounded-3xl h-[400px] w-full">
      <div className="flex gap-10 w-full py-4  items-center justify-between">
        <Avatar imageUrl="/avatar.JPG" />
        <div className="flex w-[80%] flex-col">
          <h3 className="text-3xl">
            Ajmal<span className="js">Js</span>
          </h3>
          <p>Self-tought Full-Stack Developer </p>
        </div>
      </div>
      <div className="flex  items-center w-full h-36">
        <p className=" max-w-[60%]">
          What I'm learning about shipping great products, becoming a better
          developer, and growing a career in tech.
        </p>
      </div>
    </div>
  );
}

export default Hero;
