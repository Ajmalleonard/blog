"use client";

import React from "react";
import { FeaturedButtons } from "../constants";
import Featuredbtn from "./Featuredbtn";
import { motion } from "framer-motion";

function Featured() {
  return (
    <section className="FlexSatrt-col w-full">
      <h3 className="subheading">TOP CATEGORIES</h3>
      <div className="flex gap-1 space-y-1 flex-wrap w-full">
        {/* <FeaturedButtons /> */}
        {FeaturedButtons.map((item, index) => {
          return (
            <Featuredbtn key={`${item.title} ` + index} title={item.title} />
          );
        })}
      </div>
    </section>
  );
}

export default Featured;
