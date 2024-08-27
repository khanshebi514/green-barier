import Input from "./Input";
import { VscAccount } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
export default function ContactUs() {
  return (
    <>
      <div className="flex flex-col">
        <div className="space-y-5">
          <h1 className="medium-heading text-white">Contact Us</h1>
          <p className="peragraph-text text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
          </p>
        </div>
        <div className="mt-[100px] space-y-10">
          <div className="flex justify-between items-center gap-10 flex-wrap">
            <Input
              iconUrl={<VscAccount size={20} className="text-white" />}
              label={"First Name"}
              id={"first_name"}
              type={"text"}
              placeholder={"Enter Your First Name: "}
            />

            <Input
              iconUrl={<VscAccount size={20} className="text-white" />}
              label={"Last Name"}
              id={"last_name"}
              type={"text"}
              placeholder={"Enter Your Last Name: "}
            />
          </div>

          <div>
          <Input
              iconUrl={<MdEmail size={20} className="text-white" />}
              label={"Email"}
              id={"email"}
              type={"text"}
              placeholder={"Enter Your Email:"}
            />
          </div>

          <div>
          <Input
              textarea
              iconUrl={<MdEmail size={20} className="text-white" />}
              label={"Message"}
              id={"message"}
              type={"text"}
              placeholder={"Enter Your Message: "}
            />
          </div>
        </div>
        <button className="bg-white text-[#064bca] w-[150px] my-[30px] px-1 py-2 hover:bg-slate-400">Contact Us</button>
      </div>
    </>
  );
}
