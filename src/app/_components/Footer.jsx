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
import Link from "next/link";
import { Button } from "semantic-ui-react";
export default function Footer() {
  return (
    <footer className="bg-[black]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5">
          <div className="flex items-start md:justify-around gap-[80px] flex-wrap">
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
                <FaFacebookF size={20} className="text-white" />
                <FaInstagram size={20} className="text-white" />
                <FaTwitter size={20} className="text-white" />
                <FaLinkedin size={20} className="text-white" />
                <FaYoutube size={20} className="text-white" />
                <FaPinterest size={20} className="text-white" />
              </div>
              <div className="hidden">
                 <div className="w-[374px] h-[66px] border-2 border-[#ffffff] flex items-center justify-between px-3"><input  type="text" placeholder="Enter Your Email" className="px-1 py-2 outline-none border-none bg-transparent text-white"/>
                 <button className="w-[40px] h-[40px] bg-gradient-to-tr from-[#0EA1EF] to-[#064BCA] drop-shadow flex justify-center items-center rounded"> <FaArrowRightLong size={18} className="text-white"/> </button>
                 </div>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-white font-[600] text-[20px]">Expertise</h3>
              <ul className="flex flex-col list-disc space-y-5">
                <li className="text-white">
                  <a className="text-white " href="/strategic-planning">
                    Strategic Planning
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                    Performance Improvement
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                    Digital Transformation
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                    Data & Analytics
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/innovation">
                    Innovation
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/technology-services-cloud">
                    Technology Services & Cloud
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-5 md:gap-0 md:justify-around items-start flex-wrap">
            <div className="space-y-3">
              <h3 className="text-white font-[600] text-[20px]">Capital Structure</h3>
              <ul className="flex flex-col list-disc space-y-5">
                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Public Companies
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Private Equity
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Venture Capital
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Federal & State Government
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/innovation">
                  Academia & Non-Profits
                  </a>
                </li>

              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-white font-[600] text-[20px]">Useful Links</h3>
              <ul className="flex flex-col list-disc space-y-5">
                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  About Us
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Careers
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Terms & conditions
                  </a>
                </li>

                <li className="text-white">
                  <a className="text-white" href="/strategic-planning">
                  Careers
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#ffffff10] my-5"></div>
      <div className="block md:flex justify-center items-center p-5">
        <p className="text-center text-white text-wrap">© 2022 Company Name. All rights reserved. </p>
      </div>
    </footer>
  );
}
