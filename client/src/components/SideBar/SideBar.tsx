import React from "react";
import Featured from "../Featured";
import Popural from "../Popural";

function SideBar() {
  return (
    <div className="hidden md:flex flex-col gap-20 items-center p-5  w-[30%] h-[45%] rounded-3xl my-10  bg-dark-50">
      <Featured />
      <Popural />
    </div>
  );
}

export default SideBar;
