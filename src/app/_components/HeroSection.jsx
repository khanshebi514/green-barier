import Image from "next/image";
import "./main-components.css";
export default function HeroSection() {
  return (
    <section id="hero-section"
      className="h-screen relative"
      style={{
       background: "url('/home/Vector-bgg.png')",
       backgroundSize:"100%",
       backgroundPosition:"top",
       backgroundRepeat:'no-repeat',
      }
    }
    
    >
      <div className="absolute top-0 left-0 -z-10 hidden lg:block">
        <Image src={"/home/Vector.png"} width={2100} height={1000} alt="" className="w-full"/>
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-10 hidden lg:block">
        <Image src={"/home/Vector (1).png"} width={2100} height={1000} alt="" />
      </div>
      <div className="absolute w-full h-full top-[78%] left-0 z-10 hidden lg:block">
        <Image src={"/home/Vector (2).png"} width={2100} height={1000} alt="" />
      </div>
      <div className="w-full absolute top-[8%] hidden lg:block">
        <Image src={"/home/Group.png"} width={2100} height={1000} alt="" />
      </div>
      <div className="container flex justify-center items-center flex-col gap-5 h-full z-20 relative">
        <div>
          <h1 className="main-heading text-center text-white">
            A strong <br />
            strategy for your business
          </h1>
        </div>

        <div className="w-[200px] bg-white h-[1px]"></div>
        <p className="paragraph-text text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been <br />
          the industry's standard dummy text ever since the 1500s,
        </p>
      </div>
    </section>
  );
}
