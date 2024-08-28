import Image from "next/image";
import { industries } from "../constants/constant";
import IndustriesCard from "../ui/IndustriesCard";

export default function IndustriesSection() {
  return (
    <section className="relative">
      <div className="container">
        <div className="flex justify-center items-center gap-10 flex-col mt-[20px]">
          <h1 className="medium-heading">Industries</h1>
          <p className="peragraph-text text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="mt-[100px] flex flex-wrap justify-center items-center gap-[30px]">
          {industries.map((item) => (
            <IndustriesCard
              key={item.key}
              iconUrl={item.IconUrl}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="w-full absolute -top-[15%] hidden">
        <Image src={"/home/Group.png"} width={2100} height={1000} alt="" />
      </div>
    </section>
  );
}

