import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdInbox } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import LinkUi from "../ui/LinkUI";
export default function Footer() {
  return (
    <footer className="bg-[black] overflow-hidden">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 justify-items-start relative">
          
            <div className="space-y-5">
              <Image
                src={"/navbar/logo-img.png"}
                width={149}
                height={82}
                alt=""
              />
              <div className="flex items-center gap-3">
                <FaPhoneAlt size={20} className="text-white" />
                <p className="peragraph-text text-white">(126) 123 1234</p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail size={20} className="text-white" />
                <p className="peragraph-text text-white">info@example.com</p>
              </div>

              <div className="flex items-center gap-2">
                <FaFacebookF size={20} className="text-white cursor-pointer" />
                <FaInstagram size={20} className="text-white cursor-pointer" />
                <FaTwitter size={20} className="text-white cursor-pointer" />
                <FaLinkedin size={20} className="text-white cursor-pointer" />
                <FaYoutube size={20} className="text-white cursor-pointere" />
                <FaPinterest size={20} className="text-white cursor-pointer" />
              </div>
              <div className="">
                <div className="w-full h-[64px] border-2 border-[#ffffff] flex items-center justify-between px-3">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="px-1 py-2 outline-none border-none bg-transparent text-white w-full"
                  />
                  <button className="w-[40px] h-[40px] bg-gradient-to-tr from-[#0EA1EF] to-[#064BCA] drop-shadow flex justify-center items-center rounded">
                    {" "}
                    <FaArrowRightLong size={18} className="text-white" />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-[600] text-[20px]">Expertise</h3>
              <ul className="flex flex-col !list-disc space-y-5 mt-3">
                <LinkUi path="/strategic-planning" label="Strategic Planning" />
                <LinkUi
                  path="/strategic-planning"
                  label="Performance Improvement"
                />
                <LinkUi
                  path="/strategic-planning"
                  label="Digital Transformation"
                />
                <LinkUi path="/strategic-planning" label="Data & Analytics" />
                <LinkUi path="/strategic-planning" label="Innovation" />
                <LinkUi
                  path="/strategic-planning"
                  label="Technology Services & Cloud"
                />
              </ul>
            </div>
          

          
            <div className="space-y-3">
              <h3 className="text-white font-[600] text-[20px]">
                Capital Structure
              </h3>
              <ul className="flex flex-col !list-disc space-y-5 mt-3">
                <LinkUi path="/strategic-planning" label="Public Companies" />
                <LinkUi path="/strategic-planning" label="Private Equity" />
                <LinkUi path="/strategic-planning" label="Venture Capital" />
                <LinkUi
                  path="/strategic-planning"
                  label="Federal & State Government"
                />
                <LinkUi
                  path="/strategic-planning"
                  label="Academia & Non-Profits"
                />
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-[600] text-[20px]">
                Useful Links
              </h3>
              <ul className="flex flex-col !list-disc space-y-5 mt-3">
                <LinkUi path="/strategic-planning" label="About Us" />
                <LinkUi path="/strategic-planning" label="Careers" />
                <LinkUi path="/strategic-planning" label="Terms & conditions" />
                <LinkUi path="/strategic-planning" label="Careers" />
                <LinkUi path="/strategic-planning" label="Careers" />
              </ul>
            </div>
          <div className="absolute w-[200px] h-[200px] top-10 -right-20 opacity-40">
            <Image src={"/home/Group 124.png"} fill alt="data driven tools"/>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#ffffff10] my-5"></div>
      <div className="block md:flex justify-center items-center p-5">
        <p className="text-center text-white text-wrap">
          © 2022 Company Name. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
}
