import Image from "next/image";

export default function SlideDiv({ImageUrl, width , height, heading, content}) {
  return (
    <div className={`w-[${width}px] h-[${height}px] md:w-[${1.5*width}px] md:h-[${1.5*height}px] border-[12px] border-white drop-shadow-lg overflow-hidden object-cover rotate-45 rounded-3xl cursor-pointer`}>
            <Image
              src={ImageUrl}
              width={700}
              height={700}
              quality={100}
              alt=""
              className="w-full object-cover -rotate-45 scale-150 h-full"
            />

            <div className="w-full h-full -rotate-45 absolute top-0 left-0 bg-[#00000062] flex justify-center flex-col items-center scale-150 opacity-0 hover:opacity-100 ga-3">
              <h3 className="text-lg font-bold text-white">
                {heading}
              </h3>
              <p className="text-center text-[12px] text-white">
                {content}
              </p>
            </div>
          </div>
  )
}
