import Image from "next/image";

export default function PeopleSection() {
  return (
    <section className="h-screen relative" >
        <Image src="/home/Vector-9.png" width={2000} height={1200} alt="alt" className="w-full h-full" />
        <div className="absolute w-full h-full top-0 left-0">
        <Image src="/home/people-bg.png" width={2000} height={1200} alt="alt" className="w-full h-full" />
        </div>
    </section>
  )
}
