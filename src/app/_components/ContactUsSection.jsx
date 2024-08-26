import Image from "next/image";
import ContactUs from "../ui/ContactUs";
import { ImLocation2 } from "react-icons/im";

export default function ContactUsSection() {
  return (
    <section
    id="contact-us"
    className="static lg:relative mt-[100px]"
    >
      <Image
        src="/home/contact-us-bg.png"
        width={2000}
        height={1200}
        alt="alt"
        className="w-full h-full hidden lg:block"
      />
      <div className="absolute w-full h-full top-0 left-0 hidden lg:block">
        <Image
          src="/home/Vector-212.png"
          width={2000}
          height={1200}
          alt="alt"
          className="w-full h-full"
        />
        
      </div>
      <div id="contact-us-col" className="container static">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="mt-5">
            <ContactUs />
          </div>
          <div className="flex justify-center items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-[30px] text-white font-[700]">office locations</h2>
              </div>

              <div className="flex items-center gap-5">
                <ImLocation2
                  size={20}
                  className="w-[25px] h-[25px] rounded-full p-[4px] bg-[#ffffff75] text-[#0EA1EF]"
                />
                <p className="peragraph-text text-white">
                  Nashville Office 10 Burton Hills Blvd Nashville, TN <br /> 37215
                </p>
              </div>

              <div className="flex items-center gap-5">
                <ImLocation2
                  size={20}
                  className="w-[25px] h-[25px] rounded-full p-[4px] bg-[#ffffff75] text-[#0EA1EF]"
                />
                <p className="peragraph-text text-white">
                  Nashville Office 10 Burton Hills Blvd Nashville, TN <br /> 37215
                </p>
              </div>

              <div className="flex items-center gap-5">
                <ImLocation2
                  size={20}
                  className="w-[25px] h-[25px] rounded-full p-[4px] bg-[#ffffff75] text-[#0EA1EF]"
                />
                <p className="peragraph-text text-white">
                  Nashville Office 10 Burton Hills Blvd Nashville, TN <br /> 37215
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
