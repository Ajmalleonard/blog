import React from "react";
import { posts } from "../constants";
import PopularButton from "./PopularButton";

function Popural() {
  return (
    <div className="FlexSatrt-col w-[100%]">
      <h3 className="subheading">POPULAR CONTENT</h3>
      <div className="lg:w-[80%] md:w-[100%] flex gap-1 space-y-1 flex-wrap mx-auto">
        {posts.map((item, index) => {
          return (
            <PopularButton
              key={`${item.title} ` + index}
              title={item.title
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popural;
