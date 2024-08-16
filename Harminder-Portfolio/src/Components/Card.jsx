import React from "react";
import { VscLiveShare } from "react-icons/vsc";
import { FaSquareGithub } from "react-icons/fa6";


const Card = ({image, githublink, liveSiteLink}) => {
    console.log(image);
    
  return (
    <>
      <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
        <img
          alt=""
          src={image}
          className="w-[300px] h-[300px] lg:h-[300px] transition-transform group-hover:scale-110 duration-200 object-cover object-center"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="w-full text-white flex items-center justify-between bg-transparent shadow-lg m-2">
            <div className="relative p-2">
              <a
                href={liveSiteLink}
                alt="Live Website"
                                target="_blank"
                className="cursor-pointer text-xl font-bold mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-left"
              >
                <VscLiveShare />
              </a>
            </div>
            <div className="text-lg">
              <a
                href={githublink}
                alt="Github"
                target="_blank"
                className="cursor-pointer text-xl font-bold mb-2 whitespace-nowrap overflow-hidden overflow-ellipsis text-left"
              >
                <FaSquareGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
