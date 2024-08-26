import Image from "next/image";
import ProfileCard from "../ui/ProfileCard";
import { profile } from "../constants/constant";

export default function CapitalStructure() {
  return (
    <section
      className="mt-[100px]"
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
            <p className="peragraph-text mt-10">
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
                  <p>
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
                  <p className="text-center">
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
                  <p className="text-center">
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
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen relative hidden lg:block">
        <Image
          src="/home/Vector-9.png"
          width={2000}
          height={1200}
          alt="alt"
          className="w-full h-full"
        />
        <div className="absolute w-full h-full top-0 left-0">
          <Image
            src="/home/people-bg.png"
            width={2000}
            height={1200}
            alt="alt"
            className="w-full h-full"
          />
        </div>
        <div className="container absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-center items-center flex-col">
                <h1 className="medium-heading text-white">People</h1>
                <p className="peragraph-text text-white mt-5 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been </p>
            </div>

            <div className="flex justify-center items-center gap-[150px] my-[100px] flex-wrap">
                {profile.map((item)=> 
                <ProfileCard key={item.key} name={item.name} imageUrl={item.ImageUrl} content={item.content}/>
                )}
            </div>
        </div>
      </div>
    </section>
  );
}
