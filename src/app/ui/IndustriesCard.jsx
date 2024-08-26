import Image from "next/image";

export default function IndustriesCard({iconUrl, title}) {
  return (
    <div className="w-[250px] h-[171px] rounded-lg drop-shadow bg-white flex justify-center gap-[40px] items-center flex-col">
        <Image src={iconUrl} width={38} height={38} alt="" className=""/>
        <p className="text-center peragraph-text">{title}</p>
    </div>
  )
}
