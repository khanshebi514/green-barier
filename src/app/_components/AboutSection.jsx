import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mt-[50px] md:mt-[200px] lg:mt-[250px]">
      <div className="container p-5 md:p-3 lg:p-1">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center">
          <div className="left-section">
            <h1 className="medium-heading">About Us</h1>
            <p className="peragraph-text mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, <br /> <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to{" "}
            </p>
          </div>

          <div className="right-section relative">
            <div className="absolute w-[290px] h-[244px] rounded-[20px] bg-primary-gradient opacity-20 -z-10 hidden lg:block">

            </div>
            <Image src="/home/Rectangle 5.png" width={603} height={619} alt="titile" className="w-full h-full object-cover"/>

            <div className="absolute w-[290px] h-[244px] rounded-[20px] bg-primary-gradient opacity-20 -z-10 top-[60%] left-[55%] hidden lg:block">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
