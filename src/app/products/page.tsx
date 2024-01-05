"use client"
import Image from "next/image";
import Illustration from "../../assets/Illustration.webp";
import MillionUsers from "@/components/homeSections/millionUser";
import Marquee from "./marquie";

import Footer from "@/components/homeSections/footer";
import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/buttons/buttons";
import Bottom from "@/components/homeSections/bottom";
// import "../products/product.css";

export default function Product() {
  const storeTheme = useAppSelector((state)=>state.theme)
  return (
    <div>
      <section className={`relative bg-center bg-cover bg-no-repeat flex justify-center pt-20 ${storeTheme==="dark"?"bg-black duration-300 text-white":"bg-white"}`}>
        <div className="flex flex-col gap-0 w-full overflow-auto">
          <div className="flex flex-col w-full pt-[72px]">
            <div className="flex items-center justify-center flex-col w-full pt-8 space-y-6 ">
              <h6 className="w-full text-center text-[rgb(0,107,255)] text-base leading-[1.2] font-semibold tracking-[1.25px] uppercase">
                calendly features
              </h6>
              <h1 className="text-[4.25rem] leading-[1.2] font-bold whitespace-pre-line text-center text-[rgb(11,53,88)]">
                More Than a{" "}
                <span className="text-[inherit] leading-[inherit] text-[rgb(0,107,255)]">
                  scheduling link
                </span>
              </h1>
              <p className="text-[rgb(71,103,136)] text-2xl font-normal max-w-[770px]">
                Calendly is the scheduling automation platform with team-based
                scheduling, solutions and integrations for every department, and
                advanced security features
              </p>
              <div className="flex gap-4 justify-center">
                <Button btnName="Sign Up for Free" pathName="Sign Up for Free" />
                {/* <button className="cursor-pointer text-white border bg-[rgb(0,107,255)] text-lg font-semibold px-8 py-2.5 rounded-lg">
                  Sign Up for Free
                </button> */}
                   <Button btnName="Talk to sales" pathName="Sign Up for Free" />
                {/* <button className="cursor-pointer text-[rgb(0,107,255)] bg-white border text-lg font-semibold px-8 py-2.5 rounded-lg">
                  Talk to sales
                </button> */}
              </div>
            </div>
            <div className="container max-w-[1040px]">
              <div className="flex items-center justify-center gap-4 w-full mt-8">
                <div className="relative w-full h-full">
                  <Image className="h-auto" src={Illustration} alt="calendar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`relativ bg-[center_bottom] bg-cover bg-no-repeat flex overflow-visible justify-center p-0 ${storeTheme==="dark"?"bg-black duration-300 text-white":"bg-white"}`}>
        <div className="flex flex-col gap-32 w-full max-w-full py-16">
          <div className="flex items-center flex-col w-full bg-transparent">
            <div className="flex items-center flex-col w-full mb-14">
              <h2
                className="opacity-100 translate-y-0 text-[2.375rem] leading-[1.2] font-bold max-w-[770px] text-center text-[rgb(11,53,88)]"
                style={{
                  transition: "opacity 0.4s ease 0s, transform 0.4s ease 0s",
                }}
              >
                Scheduling automation for more than <br />
                <span className="text-[inherit] text-[rgb(0,107,255)] text-[2.375rem] leading-[1.2] font-bold max-w-[770px] text-center ">
                  20 million
                </span>
                users worldwide
              </h2>
            </div>
            <div className="w-full max-w-[1900px] h-full">
            <Marquee />
            <Bottom />
            <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
