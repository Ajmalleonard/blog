"use client";
import { useState } from "react";
import styles from "./PopularButton.module.css";

type Props = {
  title: string;
};

function PopularButton({ title }: Props) {
  const [active, setActive] = useState(false);
  const show = active ? "opacity-100" : "hidden";
  const hide = active ? "hidden" : "opacity-100";
  return (
    <div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="FlexStart gap-5 cursor-pointer w-full h-[60px]  text-dark-20 hover:text-white hover:bg-dark-40 p-3 hover:transition-all duration-[1.3s] rounded-lg transition  hover:scale-110 ease-in-out "
    >
      <img className={`${show}`} src="/read.svg" alt="arrow" />
      <img className={`${hide}`} src="/arrow.svg" alt="arrow" />
      <h3 className=" hover:transition-color duration-[0.3s] easy-in-out cursor-pointer md:text-[12px] ">
        {title}
      </h3>
    </div>
  );
}

export default PopularButton;
