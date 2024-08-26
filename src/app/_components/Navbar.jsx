
import Image from "next/image";
import MenuItem from "../ui/MenuItem";
import { US } from 'country-flag-icons/react/3x2'
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="bg-primary py-2 drop-shadow">
      <div className="container">
        <nav className="flex justify-between items-center">
          <div>
            <Image
              src={"/navbar/logo-img.png"}
              alt=""
              width={140}
              height={82}
            />
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="hidden lg:block">
            <MenuItem/>
            </div>
            
            <div className="flex items-center gap-1">
             <div className="w-[25px] h-[25px] rounded-full  overflow-hidden flex justify-center items-center"><US width={25} height={25} className="rounded-full object-cover scale-150"/></div> <IoMdArrowDropdown size={20} className="text-white "/>
            </div>
            
          </div>
        </nav>
      </div>
    </header>
  );
}
