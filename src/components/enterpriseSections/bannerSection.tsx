import React from "react";
import Image from "next/image";
import Link from "next/link";
// import img from "../enterpriseSections/images/banner.webp"
import imge from "../../assets/banner.webp";
import { Button } from "../buttons/buttons";


function BannerSection() {

  return (
    <div className="mb-[60px]">
      <div className="container">
        <div className="sm:block sm:mt-[65px] p-2 mt-[113px] flex m-auto w-[100%] ">
          <div className="sm:w-[100%] contentss w-[50%]">
            <h1 className="text-[3.125rem] leading-[1.2] font-bold max-w-[805px] whitespace-pre-line text-left text-[rgb(11,53,88)]">
              Solve external scheduling for enterprise
            </h1>

            <div className="py-[55px] px-[10px] mt-[10px] w-full max-w-[770px] h-full text-left text-[rgb(71,103,136)] text-xl leading-[1.4] font-[normal]">
              <p className="text-[grey]">
                Calendly powers scheduling for over 4 out of 5 Fortune 500
                companies.
              </p>
              <div className=" flex items-center gap-4 w-full justify-start pt-[12px]">
                <Button btnName="Sign up for free" pathName="Sign up for free"/>
                {/* <Link
                  className="cursor-pointer text-white border bg-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)]"
                  href="/register"
                >
                  Sign up for free
                </Link> */}
                <Button btnName="Talk to sales" pathName="Talk to sales"/>
                {/* <button className="cursor-pointer text-[rgb(0,107,255)] bg-white border text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)]">
                  Talk to sales
                </button> */}
              </div>
            </div>
          </div>
          <div className="sm:w-[100%] images_card w-[50%]">
            <Image
              src={imge}
              width={500}
              height={400}
              className="me-3"
              alt="Calendar Logo"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
