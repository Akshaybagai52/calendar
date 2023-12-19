"use client"
import { FcCheckmark } from "react-icons/fc";
import { useAppSelector } from "@/store/hooks";
export default function Plans() {
  const storeTheme= useAppSelector((state)=>state.theme)
  const subscriptionData = [
    {
      title: "Ideas Unfiltered",
      description:
      "There are many variations available, but the majority have suffered.",
      price: 10.00,
      point1:"Unlimited placeholder texts",
      point2:"Consectetur adipiscing elit",
      point3:"Excepteur sint occaecat cupidatat",
      point4:"Officia deserunt mollit anim",
    },
    {
      title: "Ideas Brewed",
      description:
        "There are many variations available, but the majority have suffered.",
      price: 25.00,
      point1:"Unlimited placeholder texts",
      point2:"Consectetur adipiscing elit",
      point3:"Excepteur sint occaecat cupidatat",
      point4:"Predefined chunks as necessary",
    },
    {
      title: "Ideas Instant",
      description:
        "There are many variations available, but the majority have suffered.",
      price: 38.25,
      point1:"Unlimited placeholder texts",
      point2:"Consectetur adipiscing elit",
      point3:"Excepteur sint occaecat cupidatat",
      point4:"Officia deserunt mollit anim",
    },
  ];
  return (
    <div>
      <main className=" flex min-h-screen flex-col items-center justify-between p-[4rem]">
        <div className=" sm:block   max-w-6xl w-full mx-auto flex h-[550px] py-10 px-6 md:py-20 md:px-16 gap-[1.2rem]">
          {subscriptionData.map((data, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 p-6  rounded-[9px] text-start shadow-[0px_0px_2px_1px] ${storeTheme==="dark"?"bg-black duration-300 text-white":"bg-white"}`}
            >
              <div className="font-[600] text-[18px]">{data.title}</div>
              <p className="text-2xl font-medium">
                ${data.price === 0 ? "FREE" : `${data.price}`}
                {data.price !== 0 && (
                  <span className="text-sm align-top text-slate-500 font-medium"> /mo</span>
                )}
              </p>
              <p className="text-[16px] text-slate-500 font-medium">{data.description}</p>
              
              <p className="font-bold">Includes:</p>
              <p className="text-[16px] text-slate-500 font-medium mb-1 flex mr-2 mt-0.5"><span className="text-xl mr-[3px] mt-0.5"><FcCheckmark/></span>{data?.point1}</p>
              <p className="text-[16px] text-slate-500 font-medium mb-1 flex mr-2 mt-0.5"><span className="text-xl mr-[3px] mt-0.5"><FcCheckmark/></span>{data?.point2}</p>
              <p className="text-[16px] text-slate-500 font-medium mb-1 flex mr-2 mt-0.5"><span className="text-xl mr-[3px] mt-0.5"><FcCheckmark/></span>{data?.point3}</p>
              <p className="text-[16px] text-slate-500 font-medium mb-1 flex mr-2 mt-0.5"><span className="text-xl mr-[3px] mt-0.5"><FcCheckmark/></span>{data?.point4}</p>

              <button className="signup-btn w-full mt-[20px] rounded bg-indigo-500 text-white text-base cursor-pointer h-[45px] border-[none]">
                Purchase plan
              </button>
            </div>
          ))}
        </div>{" "}
      </main>
    </div>
  );
}
