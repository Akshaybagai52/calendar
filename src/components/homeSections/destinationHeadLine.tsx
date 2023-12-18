"use client"
import React from "react";
import { useAppSelector } from "@/store/hooks";
const DestinationHeadLine = () => {
  const storeTheme= useAppSelector((state)=>state.theme)

  return (
    
      <div className="headline_box relative my-5">
        <div className="sm:w-[96%] mx-auto eleven shadow-[0px_0px_4px_0px] p-[10px] ">
            <p className="text-center">welcome to booking your meetimg</p>
          <h1 className={`${storeTheme==="dark"?"!text-white":"text-black"}`}>Booking your meeting</h1>
        </div>
      </div>
    
  );
};
export default DestinationHeadLine;
