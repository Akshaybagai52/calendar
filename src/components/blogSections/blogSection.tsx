"use client"
import React, { useState } from "react";;
import { tabs } from "../../components/data/blogsData.ts/blogs"
import Image from 'next/image'
import { motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";

const BlogSection = () => {
    const storeTheme = useAppSelector((state) => state.theme);
    const [currentTab, setCurrentTab] = useState('1');
    const [readMore, setReadMore] = useState('');
    const [isShowMore, setIsShowMore] = useState(false);


    const toggleReadMoreLess = (idd: any) => {
        console.log(idd, "pp")
        setIsShowMore(!isShowMore);
        setReadMore(idd)
    };


    const handleTabClick = (e: any) => {
        setCurrentTab(e.target.id);
    }

    let index: any = currentTab === '1' ? 0 : 1

    return (
        <>
            <div className='container mt-[7rem]'>
                <h1 className={`sm:text-[2.125rem] text-[3.125rem] font-bold  text-center mb-[1.5rem    ] ${storeTheme === "dark" ? "text-white" : "text-[rgb(11,53,88)]"}`}>Smarter scheduling for teams</h1>
                <div className='tabs flex justify-between'>
                    <div className="flex items-center justify-center w-[97%]">
                        {tabs.map((tab) =>
                            <button
                                className="inline-grid justify-evenly border-b-[3px] border-b-[gray] border-solid bg-[lightgray] text-[#888888] cursor-pointer w-full bg-[rgba(255,255,255,0.1)]
                         transition-all duration-[0.3s] ease-[ease-out] pb-[25px] border-[none] hover:text-[grey] hover:bg-[rgba(255,255,255,0.15)] disabled:text-[white] "
                                key={tab.id} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>{tab.tabTitle}</button>
                        )}
                    </div>
                </div>
                <div className={`content text-base pb-[50px] ${storeTheme === "dark" ? "bg-black" : "bg-[white]"}`}>
                    <div className="sm:block grid grid-cols-3 gap-4 w-full max-w-[1080px] pb-16 m-auto">
                        {tabs[index].tabOne?.map((item: any, idx: number) =>

                            <div key={idx} className="">
                                <div className={` sm:w-full  w-[300px] content pt-[45px] mb-[10px] `}>
                                    <motion.div animate={{ scale: 0 }} transition={{ type: "spring", stiffness: 100, delay: 0.1 }} whileInView={{ scale: 1 }} className="image sm:w-full w-[100%]">
                                        < Image src={item.img1} width={300} height={200} className="" alt="Image" />
                                    </motion.div>
                                    <div>
                                        <span className="bg-blue-400 text-xs text-white uppercase px-2 py-1 rounded-full">{item.tag}</span>
                                        <h3 className={`text-[medium] text-xl font-semibold hover:underline m-0  ${storeTheme === "dark" ? "text-white" : "text-[black] "}`}>{item.title}</h3>

                                        <p className="text-lg text-[grey] pt-1.5 pb-[5px]">
                                            {
                                                isShowMore && readMore === item._idd ? item.content : item.content.slice(0, 50)}</p>
                                        <button onClick={() => toggleReadMoreLess(item._idd)} className="text-[red] underline m-0 hover:text-blue-700">
                                            {isShowMore && readMore === item._idd ? "Read Less" : "Read More"}
                                        </button>
                                        <div className="m-4 flex flex-row">
                                            < Image className="rounded-[50%] hover:scale-105 ease-in-out transition" src={item.img2} width={50} height={30} alt="Image" />
                                            <div className="text-white pl-[15px]">
                                                <h4 className={`text-[16px] font-semibold ${storeTheme === "dark" ? "text-white" : "text-[black]"}`}>{item.name}</h4>
                                                <small className={`text-grey ${storeTheme === "dark" ? "text-grey" : "text-[black]"}`}>{item.time}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};
export default BlogSection;
