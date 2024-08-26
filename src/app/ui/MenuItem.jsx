import { IoMdArrowDropdown } from "react-icons/io";
import './main-ui.css'

export default function MenuItem() {
  return (
    <menu id="menu-item">
      <ul className="w-[1022px] flex justify-center items-center gap-[55px]">
        <li>
          <a href="home">Home</a>
        </li>

        <li className="flex items-center gap-1">
          <a href="/expertise">Expertise</a> <IoMdArrowDropdown className="text-white" size={20} />
        </li>

        <li className="flex items-center gap-1">
          <a href="/industries">Industries</a> <IoMdArrowDropdown className="text-white" size={20} />
        </li>

        <li className="flex items-center gap-1">
          <a href="/capital-structure">Capital Structure</a>{" "}
          <IoMdArrowDropdown className="text-white" size={20} />
        </li>

        <li>
          <a href="/people">People</a>
        </li>

        <li>
          <a href="/carier">Carier</a>
        </li>

        <li>
          <a href="/about-us">About Us</a>
        </li>

        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </menu>
  );
}
