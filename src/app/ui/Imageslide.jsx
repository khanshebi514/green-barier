"use client";
import Image from "next/image";
import { useState } from "react";
import { IMAGE_URL } from "../constants/constant";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import { MdNavigateNext } from "react-icons/md";

export default function Imageslide() {
  const [imageIndex, setImageIndex] = useState(0);

  const imageUrl = IMAGE_URL;
  const handleNext = () => {
    if (imageIndex < 2) {
      setImageIndex((prev) => prev + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handlePrev = () => {
    if (imageIndex >= 1) {
      setImageIndex((prev) => prev - 1);
    } else {
      setImageIndex(3);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center gap-5 overflow-y-visible">
          <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border-[12px] border-white drop-shadow-lg overflow-hidden object-cover rotate-45 rounded-3xl cursor-pointer">
            <Image
              src={imageUrl[imageIndex].ImageUrl}
              width={700}
              height={700}
              quality={100}
              alt=""
              className="w-full object-cover -rotate-45 scale-150 h-full"
            />

            <div className="w-full h-full -rotate-45 absolute top-0 left-0 bg-[#00000062] flex justify-center flex-col items-center scale-150 opacity-0 hover:opacity-100 ga-3">
              <h3 className="text-lg font-bold text-white">
                {imageUrl[imageIndex].heading}
              </h3>
              <p className="text-center text-[12px] text-white">
                {imageUrl[imageIndex].content}
              </p>
            </div>
          </div>

          <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] border-[12px] border-white drop-shadow-lg object-cover rotate-45 overflow-hidden z-10 rounded-3xl cursor-pointer">
            <Image
              src={imageUrl[imageIndex + 1].ImageUrl}
              fill
              quality={100}
              alt=""
              className="w-full object-cover h-full scale-150 -rotate-45"
            />
            <div className="w-full h-full -rotate-45 absolute top-0 left-0 bg-[#00000062] flex justify-center items-center scale-150 opacity-0 hover:opacity-100 flex-col gap-3">
              <h3 className="text-lg font-bold text-white">
                {imageUrl[imageIndex +1 ].heading}
              </h3>
              <p className="text-center text-[14px] text-white">
                {imageUrl[imageIndex + 1].content}
              </p>
            </div>
          </div>

          <div className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] border-[12px] border-white drop-shadow-lg object-cover rotate-45 overflow-hidden rounded-3xl cursor-pointer">
            <Image
              src={imageUrl[imageIndex + 2].ImageUrl}
             fill
              quality={100}
              alt=""
              className="w-full object-cover scale-150 h-full -rotate-45"
            />
            <div className="w-full h-full -rotate-45 absolute top-0 left-0 bg-[#00000062] flex justify-center items-center scale-150 opacity-0 hover:opacity-100 flex-col gap-3">
              <h3 className="text-lg font-bold text-white">
                {imageUrl[imageIndex +2 ].heading}
              </h3>
              <p className="text-center text-[12px] text-white">
                {imageUrl[imageIndex + 2].content}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[200px] flex justify-center items-center gap-5">
          <button
            onClick={handleNext}
            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-slate-200 hover:bg-slate-400"
          >
            <MdNavigateNext className="rotate-180" />
          </button>
          <div className="flex justify-center items-center gap-1">
            {" "}
            <GoDotFill size={20} /> <GoDot size={20} /> <GoDot size={20} />{" "}
            <GoDot size={20} />{" "}
          </div>
          <button
            className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-slate-200 hover:bg-slate-400"
            onClick={handlePrev}
          >
            <MdNavigateNext className="" />
          </button>
        </div>
      </div>
    </>
  );
}
