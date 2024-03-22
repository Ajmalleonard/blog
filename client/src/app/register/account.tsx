import React from "react";
import Image from "next/image";

interface featuresProps {
  icon: string;
  title: string;
  details: string;
}

const Account = ({ icon, title, details }: featuresProps) => {
  return (
    <div className="flex items-start  gap-5 w-[90%] h-auto">
      <Image
        className="mt-[4px]"
        src={icon}
        alt={title}
        width={24}
        height={24}
      />
      <div className="flex flex-col item-start justify-start gap-5">
        <h2 className="font-semibold text-[20px]">{title}</h2>
        <p className="max-w-[700px] text-[13px] font-normal">{details}</p>
      </div>
    </div>
  );
};

export default Account;
