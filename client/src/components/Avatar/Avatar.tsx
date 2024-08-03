import React from "react";

interface AvatarProps {
  imageUrl: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, alt = "Avatar" }) => {
  return (
    <div className="relative w-20 h-20 group">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-indigo-500 opacity-70 blur-xl group-hover:opacity-90 group-hover:blur-2xl group-hover:scale-110 transition-all duration-300 ease-in-out"></div>

      {/* Border and image container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-full p-[3px] bg-gradient-to-r from-red-500 to-indigo-300 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300 ease-in-out">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full rounded-full object-cover group-hover:animate-shake"
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
