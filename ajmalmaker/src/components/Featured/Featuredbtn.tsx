import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  icon?: string;
}
function Featuredbtn({ title, icon }: Props) {
  return (
    <div className="flex flx-col-reverse justify-center items-center px-5 py-2 bg-dark-40 text-dark-20  hover:text-redish-50 rounded-xl transition-all cursor-pointer ease-out duration-600">
      <span>
        {icon && (
          <Image
            className="hover:translate-x-2"
            src={icon}
            alt={title}
            width={20}
            height={20}
          />
        )}
      </span>
      {title}
    </div>
  );
}

export default Featuredbtn;
