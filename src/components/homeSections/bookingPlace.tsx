"use client";
import React from "react";
import Image from "next/image";
import useSWR from "swr";
import booking_place_pic1 from "../../assets/3.jpg";
import booking_place_pic2 from "../../assets/2.jpg";
import { Josefin_Sans } from "next/font/google";
const JosefinSans = Josefin_Sans({ weight: "600", subsets: ["latin"] });

const BookingPlace = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (data) console.log(data);
  // console.log(data)
  return (
    <>
      <div className="booking_place-main  ">
        <div className="container">
          <div className="booking_palce-sub_main  mb-[20px] items-center flex">
            <div className="booking_place-text w-[40%]">
              <h2 className={`${JosefinSans.className} text-[44px]`}>
                Evergreen and <br />
                <span>everlasting</span>
              </h2>
              <p>
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
            </div>
            <div className="booking_place-pic flex gap-1">
              <div className="booking_pic1">
                <Image
                  className="w-[290px] h-[370px]"
                  src={booking_place_pic1}
                  alt="booking image"
                />
              </div>
              <div className="booking_pic2">
                <Image
                  className="w-[290px] h-[370px] "
                  src={booking_place_pic2}
                  alt="booking image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookingPlace;
