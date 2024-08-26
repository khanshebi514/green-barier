import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


export default function ProfileCard({name, imageUrl, content}) {
  return (
    <div className="w-[250px] h-[332px] flex flex-col items-center gap-5">
        <div className="w-[250px] h-[250px] rounded-full relative">
            <Image src={imageUrl} po fill alt="" className="w-full h-full rounded-full object-cover"/>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] opacity-0 hover:opacity-100 rounded-full flex justify-center items-center">
                <p className="peragrpah-text text-white text-center">{content}</p>
            </div>
        </div>
        <div>
            <p className="text-[20px] font-[700] opacity-80 text-white">{name}</p>
            <div className="flex justify-center items-center gap-2 mt-3">
                <FaFacebookF size={20} className="text-[#ffff]"/>
                <AiFillInstagram size={20} className="text-[#ffff]"/>
                <IoLogoTwitter size={20} className="text-[#ffff]"/>
                <FaLinkedinIn size={20} className="text-[#ffff]"/>
            </div>
        </div>
    </div>
  )
}
