import Image from "next/image";
import ContactUs from "../ui/ContactUs";
import { ImLocation2 } from "react-icons/im";

export default function ContactUsSection() {
  return (
    <section id="contact-us" className="static lg:relative mt-[100px] py-[100px]"
    style={{
      background:"url('/bg-121.png')",
      backgroundRepeat:'no-repeat',
      objectFit:"cover"
    }}
    >
      <div id="contact-us-col" className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 align-top">
          <div className="mt-10 mb-[30px] md:mb-[100px]">
            <ContactUs />
          </div>
          <div className="flex justify-center items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-[30px] text-white font-[700] capitalize">
                  office locations
                </h2>
              </div>

              <div className="flex items-center gap-5">
                <ImLocation2
                  size={20}
                  className="w-[25px] h-[25px] rounded-full p-[4px] bg-[#ffffff75] text-[#0EA1EF]"
                />
                <p className="peragraph-text text-white">
                  Nashville Office 10 Burton Hills Blvd Nashville, TN <br />{" "}
                  37215
                </p>
              </div>

              <div className="flex items-center gap-5">
                <ImLocation2
                  size={20}
                  className="w-[25px] h-[25px] rounded-full p-[4px] bg-[#ffffff75] text-[#0EA1EF]"
                />
                <p className="peragraph-text text-white">
                  Nashville Office 10 Burton Hills Blvd Nashville, TN <br />{" "}
                  37215
                </p>
              </div>

              <div className="flex items-center gap-5">
                <ImLocation2
                  size={20}
                  className="w-[25px] h-[25px] rounded-full p-[4px] bg-[#ffffff75] text-[#0EA1EF]"
                />
                <p className="peragraph-text text-white">
                  Nashville Office 10 Burton Hills Blvd Nashville, TN <br />{" "}
                  37215
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
