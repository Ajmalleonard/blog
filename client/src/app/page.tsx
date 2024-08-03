"use client";

import { NextUIProvider } from "@nextui-org/react";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <NextUIProvider>
      <section className=" w-full h-full justify-center   items-center  flex flex-col max-w-4xl mx-auto">
        <Hero />
        <MainPage />
        <Categories />
      </section>
    </NextUIProvider>
  );
}
