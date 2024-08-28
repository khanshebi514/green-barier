import Image from "next/image";
import Imageslide from "../ui/Imageslide";

export default function ExpertiseSection() {
  return (
    <section className="mt-[50px] md:mt-[100px] lg:mt-[250px]">
        <div className="container relative">
            <div className="absolute -top-[70%] -left-[10%] hidden lg:block w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[488px] xl:h-[488px]">
                <Image src={"/home/Group 124.png"} fill/>
            </div>

            <div className="text-center w-full">
                <h1 className="medium-heading mb-1 md:mb-2 lg:mb-5">Expertise</h1>
                <p className="peragraph-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been </p>
            </div>
        </div>
        <div className="w-full relative" style={{
              background:"url('/home/Rectangle 37.png')",
              backgroundPosition:"center bottom",
              objectFit:"cover",
              backgroundRepeat:"no-repeat"
            }}>
            
            <div className="container">
            <div className="w-full py-[100px] lg:py-[200px] overflow-hidden overflow-y-visible">
                <Imageslide/>
            </div>
            </div>
            </div>
    </section>
  )
}
