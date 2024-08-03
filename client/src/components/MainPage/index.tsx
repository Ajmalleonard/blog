import React from "react";
import SideBar from "../SideBar/SideBar";
import Posts from "../Posts";

function MainPage() {
  return (
    <section
      className=" w-full  py-20 gap-4  flex justify-center
     items-center  "
    >
      <Posts />
      {/* <SideBar /> */}
    </section>
  );
}

export default MainPage;
