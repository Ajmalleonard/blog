import React from "react";
import { footer } from "../constants";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full mx-auto h-auto min-h-[200px] bg-dark-50 p-5">
      <div className="flex flex-wrap gap-5 justify-between max-w-5xl mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex w-[200px] bg- h-auto  gap-3 ">
            <Image
              src={footer.firstrow.logo}
              alt="Logo"
              width={20}
              height={20}
              className="w-auto "
            />
            <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-redish-50 to-blue-50">
              AJMAL JS
            </h1>
          </div>
          <p className="text-[10px]">{footer.firstrow.thanks}</p>
          <p className="text-[10px]">{footer.firstrow.copyright}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-white/50 text-[12px]">{footer.tutorial.title}</h2>
          <div className="grid space-y-1 grid-cols-2  w-full max-w-[300px] overflow-hidden items-center justify-start">
            {footer.tutorial.data.map((item, index) => (
              <a className="cursor-pointer " key={item.title + index}>
                <p className="text-[12px]">{item.title}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col  ">
          <h2 className="text-white/50 text-[12px]">{footer.Links.title}</h2>
          <div className="">
            {footer.Links.data.map((item, index) => (
              <a key={item.title + index} href={item.href}>
                <p className="text-[12px] my-2">{item.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
