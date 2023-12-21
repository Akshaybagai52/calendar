"use client"
import React from 'react';
import Image from "next/image";
import { useAppSelector } from '@/store/hooks';
import btne from "../../assets/bottom.jpg"
import { motion } from 'framer-motion';
function BottomSection() {
    const storeTheme = useAppSelector((state) => state.theme);
    const textColorClass = storeTheme === 'dark' ? 'text-white' : 'text-[rgb(71,103,136)]';
    return (
        <div className={`mb-[50px] mt-[50px] ${storeTheme === "dark" ? "bg-black duration-300 text-white" : ""}`} >
            <div className='container '>
                <div className='w-full max-w-[1200px] py-0'>
                    <div className={`flex items-center justify-center flex-col gap-6 w-full max-w-[1170px] min-h-[222px] border p-[40px] rounded-[32px] border-solid border-[rgb(212,224,237)] `}>
                        <div className='w-full max-w-[770px] h-auto'>
                            <motion.h1 animate={{x:-200}}  whileInView={{x:0}} transition={{type:'spring',stiffness:100, delay:0.2}} className={`text-[2.375rem] leading-[1.4] text-center text-[rgb(11,53,88)] font-bold pb-[15px] `}>The trusted platform for scheduling automation</motion.h1>
                            <motion.div  animate={{opacity:0}}  whileInView={{opacity:1}} transition={{type:'spring',stiffness:100, delay:0.4}} className={`w-full h-auto text-center text-xl leading-[1.4] font-normal ${textColorClass}`}>
                                <Image src={btne} alt="" width={800} height={400} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomSection