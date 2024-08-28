import Image from "next/image";
import ProfileCard from "../ui/ProfileCard";
import { profile } from "../constants/constant";

export default function CapitalStructure() {
  return (
    <section
      className="mt-[50px]"
      style={{
        background: "url('/home/Vector-8.png')",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "-10%",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] justify-items-center place-items-center">
          <div className="">
            <h1 className="medium-heading">Capital Structure</h1>
            <p className="peragraph-text mt-2 md:mt-7 lg:mt-10 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type{" "}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex justify-center gap-5">
              <div className="w-[55%] relative cursor-pointer">
                <Image
                  src="/home/Rectangle 7.png"
                  width={532}
                  height={370}
                  alt="title image"
                />
                <div className="w-full h-full opacity-0 hover:opacity-100 absolute top-0 left-0 flex justify-center items-center text-white transition-all bg-[#00000044] rounded-3xl">
                  <p className="text-[14px] md:text-[16px] text-center px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>

              <div className="w-[37%] relative cursor-pointer">
                <Image
                  src="/home/Rectangle 36.png"
                  width={359}
                  height={378}
                  alt="title image"
                />

                <div className="w-full h-full opacity-0 hover:opacity-100 absolute top-0 left-0 flex justify-center items-center text-white transition-all bg-[#00000044] rounded-3xl">
                  <p className="text-[14px] md:text-[16px] text-center px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-5">
              <div className="w-[37%] relative cursor-pointer">
                <Image
                  src="/home/Rectangle 9.png"
                  width={359}
                  height={378}
                  alt="title image"
                />
                <div className="w-full h-full opacity-0 hover:opacity-100 absolute top-0 left-0 flex justify-center items-center text-white transition-all bg-[#00000044] rounded-3xl">
                  <p className="text-[14px] md:text-[16px] text-center px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
              <div className="w-[55%] relative cursor-pointer">
                <Image
                  src="/home/Rectangle 8.png"
                  width={532}
                  height={370}
                  alt="title image"
                />
                <div className="w-full h-full opacity-0 hover:opacity-100 absolute top-0 left-0 flex justify-center items-center text-white transition-all bg-[#00000044] rounded-3xl">
                  <p className="text-[14px] md:text-[16px] text-center px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
      id="profile-section"
        style={{
          background: "url('bg-121.png')",
          backgroundRepeat:'no-repeat'
        }}
      >
        <div className="container">
          <div className="flex justify-center items-center flex-col mt-[20px] md:mt-[80px] lg:mt-[150px]">
            <h1 className="medium-heading text-white mt-3 md:mt-10">People</h1>
            <p className="peragraph-text text-white mt-5 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> Lorem Ipsum has been{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-[20px] md:gap-[30px] lg:gap-[80px] my-[100px]">
            {profile.map((item) => (
              <ProfileCard
                key={item.key}
                name={item.name}
                imageUrl={item.ImageUrl}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
