"use client"
import React from 'react'
import Image, { StaticImageData } from "next/image";
import { useAppSelector } from '@/store/hooks'
import {data1,data} from "../data/cardData"

function Card() {
    const storeTheme = useAppSelector((state) => state.theme)
    return (
        <div className={`${storeTheme === "dark" ? "bg-black duration-300 text-white" : ""}`}>
            <section className="relative bg-[center_bottom] bg-cover bg-no-repeat flex overflow-visible justify-center px-10 py-0">
                <div className="container w-full max-w-[1200px] py-[30px]">
                    <div className='flex relative z-10 items-center flex-col gap-14 w-full'>
                        <div className='flex relative items-center flex-col gap-4 w-full'>
                            <h2 className='text-[3.125rem] leading-[1.2] z-10 max-w-[770px] text-center text-[rgb(11,53,88)] font-bold'>Accomplish goals that matter to your business</h2>
                        </div>
                        <div className='sm:block flex justify-between w-[100%]'>
                            {data.map((item, index) =>
                                <div key={index} className='sm:w-[100%] rounded-lg border-solid border-[rgb(231,237,246)] w-[30%] p-[1.625rem] border'>
                                    <div className=''>
                                        <h3 className='text-xl leading-[1.4] text-left text-[rgb(11,53,88)] font-bold pb-[15px]'>{item.head}</h3>
                                        <p className='pb-[15px] w-full h-full text-left text-[rgb(71,103,136)] text-lg leading-[1.6] font-normal'>{item.para}</p>
                                        <button className='my-2 cursor-pointer text-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row inline-flex
                                     opacity-100 items-center justify-center gap-2 text-center font-semibold mx-1 p-0 rounded-lg'>{item.btn}</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section >

            <section className="relative bg-[center_bottom] bg-cover bg-no-repeat flex overflow-visible justify-center px-10 py-0">
                <div className="container w-full max-w-[1200px] py-[30px]">
                    <div className='flex relative z-10 items-center flex-col gap-14 w-full'>
                        <div className='flex relative items-center flex-col gap-4 w-full'>
                            <h2 className='text-[3.125rem] leading-[1.2] z-10 max-w-[770px] text-center text-[rgb(11,53,88)] font-bold'>Equip teams to exceed expectations</h2>
                        </div>
                        <div className='sm:block flex justify-between w-[100%]'>
                            {data.map((item, index) =>
                                <div key={index} className='sm:w-[100%] rounded-lg border-r-2 border-r-[rgb(231,237,246)] border-solid w-[30%] p-[1.625rem] '>
                                    <div className=''>
                                        <h3 className='text-left text-[#006bff] text-[3.125rem] leading-none font-bold mb-4'>{item.numb}</h3>
                                        <p className='w-full h-full mb-8 max-w-[270px] text-left text-[rgb(71,103,136)] text-2xl leading-[1.4] font-normal'>{item.secPara}</p>
                                        <Image src={item.img} alt="" width={80} height={80} />

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section >

            <section className="relative bg-[center_bottom] bg-cover bg-no-repeat flex overflow-visible justify-center px-10 py-0">
                <div className="container w-full max-w-[1200px] py-[30px]">
                    <div className='flex relative z-10 items-center flex-col gap-14 w-full'>
                        <div className='flex relative items-center flex-col gap-4 w-full'>
                            <h2 className='text-[3.125rem] leading-[1.2] z-10 max-w-[770px] text-center text-[rgb(11,53,88)] font-bold'>Accomplish goals that matter to your business</h2>
                        </div>
                        <div className=' sm:block flex justify-between w-[100%]'>
                            {data1.map((item, index) =>
                                <div key={index} className='sm:w-[100%] rounded-lg border-solid border-[rgb(231,237,246)] w-[23%]  border'>
                                    <div className=''>
                                        <Image src={item.imge} alt="" width={450} height={200} />
                                        <div className='p-[1.625rem]'>
                                            <h3 className='text-xl leading-[1.4] text-left text-[rgb(11,53,88)] font-bold pb-[15px]'>{item.head2}</h3>
                                            <p className='pb-[15px] w-full h-full text-left text-[rgb(71,103,136)] text-lg leading-[1.6] font-normal'>{item.thirdPara}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default Card