import Image from "next/image";
import "./main-components.css";
import Navbar from "./Navbar";
export default function HeroSection() {
  return (
    <section id="hero-section"
      className="h-[110vh]"
      style={{
       background:"url('/home/Frame.png')",
       backgroundSize:"100%",
       backgroundPosition:"top",
       backgroundRepeat:'no-repeat',
      }
    }
    
    >
      <div className="flex items-center w-full">
        <div className="w-full"><Navbar/></div>
      </div>
      <div className="container h-full">
        <div className="flex justify-center items-center flex-col mt-[150px] sm:mt-[100px]">
        <div>
          <h1 className="main-heading text-center text-white capitalize">
            A strong <br />
            strategy for your business
          </h1>
        </div>

        <div className="w-[200px] bg-white h-[1px]"></div>
        <div>
        <p className="paragraph-text text-center text-white mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been <br />
          the industry's standard dummy text ever since the 1500s,
        </p>
        </div>
        
        </div>
        
      </div>
    </section>
  );
}
