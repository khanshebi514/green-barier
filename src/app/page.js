'use client'
import { useEffect, useState } from "react";
import Loader from "./ui/Loader";
import HomeSection from "./_components/Home";

export default function Home() {
  const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const timer = setTimeout(()=>{
        setLoading(false);
    }, 2000);

   
    return () => clearTimeout(timer);
   }, []);

  return (
   <main>
      {loading === true ? <Loader/> : <HomeSection/>}
   </main>
  );
}
