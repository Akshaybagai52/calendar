import React from "react";
import image1 from '../../assets/download.png'
import image2 from '../../assets/download (2).png'
import image3 from '../../assets/download (3).png'
import image4 from '../../assets/download (4).png'
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
const MillionUsers = () => {
  const storeTheme = useAppSelector((state) => state.theme);
  
  return (
    <div className={`million_user_main py-[50px] ${storeTheme==='dark'?'bg-dark text-white':'bg-white'}`}>
      <div className="container">
        <div className="million_user_content">
          <h2 className="font-bold text-[30px] text-center  ">Loved by 20 million+ users</h2>
          <div className="slider">
            <figure id="fig">
              <div className="slide">
                <Image src={image1} alt="" />
              </div>
              <div className="slide">
                <Image src={image2}  alt="" />
              </div>
              <div className="slide">
                <Image src={image3} alt="" />
              </div>
              <div className="slide">
                <Image src={image4} alt="" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MillionUsers;
