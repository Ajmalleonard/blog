import React from "react";
import SideBar from "../SideBar/SideBar";
import Posts from "../Posts";

function MainPage() {
  return (
    <div className="max-w-7xl flex justify-around items-start  ">
      <Posts />
      <SideBar />
    </div>
  );
}

export default MainPage;
