import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl flex p-10 relative flex-col justify-center items-center border-2 border-dark-50 rounded-3xl h-[700px] w-full">
      <h1 className="text-[200px] select-none text-transparent bg-clip-text font-semibold bg-gradient-to-r from-textC-30 via-textC-50 to-textC-60 ">
        AJMAL
      </h1>
      <div className="flex gap-4 w-full h-auto">
        <div className="flex flex-col  relative  min-w-[60%] h-[100px] ">
          <div className="mix-blend-lighten filter  opacity-30 max-w-[300px] blur-3xl w-full max-h-[300px] h-full rounded-full bg-redish-50  "></div>

          <div
            className="flex animate-bounce-slow gap-5 absolute bottom-3 items-center drop-shadow-2xl ring-[0.5px] ring-white/20 justify-between px-10 left-32 bg-gradient-to-tr  z-50  rotate-[15deg] min-w-[400px]
            h-[80px] rounded-[25px] backdrop-blur-xl "
          >
            <div className="flex gap-4 items-center justify-around">
              <div className="flex p-1 items-center justify-center w-[50px]  max-h-[50px] rounded-full bg-textC-30">
                <Image src={"/R.png"} width={1000} height={1000} alt="memoji" />
              </div>{" "}
              <h3 className="font-semibold">Ajmal Leonard</h3>
            </div>
            <div className="flex gap-4 justify-center">
              <Image src={"/mic.svg"} width={24} height={24} alt="memoji" />
              <p className="font-bold tracking-wider">...</p>
            </div>
          </div>
          <div className="flex absolute animate-bounce-slow drop-shadow-2xl items-center justify-between px-10 ring-[0.5px] ring-white/20 -bottom-11 left-32 z-10 -rotate-[5deg]  min-w-[100px] h-[80px] rounded-[30px] backdrop-blur-2xl ">
            <div className="flex gap-4 items-center justify-around">
              <div className="flex p-1 items-center justify-center w-[50px]  max-h-[50px] rounded-full bg-textC-30">
                <Image
                  src={"/R (1).png"}
                  width={1000}
                  height={1000}
                  alt="memoji"
                />
              </div>{" "}
            </div>
            <div className="flex gap-4 justify-center"></div>
          </div>
        </div>{" "}
        <div className="flex flex-col relative min-w-[20%] h-[100px]  "></div>
      </div>
    </div>
  );
}

export default Hero;
