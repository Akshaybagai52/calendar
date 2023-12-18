"use client"
import React from 'react'
import { useAppSelector } from '@/store/hooks'

function Card() {
    const storeTheme =useAppSelector((state)=>state.theme)

    const data = [
        {
            head: "Create more efficient and productive teams",
            para: "Speed up scheduling without disrupting your flow. Calendly connects to the tools, apps, and browsers where your team does their best work.",
            btn: "View 100+ integrations "
        },
        {
            head: "Improve company performance and customer experience",
            para: "Make it easy for qualified leads to reach you. Time-saving automations empower client and candidate-facing teams to convert leads, faster.",
            btn: "Discover calendly Routing"
        },
        {
            head: "Reduce the total cost of ownership",
            para: "Consolidate your software investments with a single platform that meets the needs of recruiting, sales, and other meeting-heavy teams.",
            btn: "Learn about team scheduling"
        }
    ]
    return (
        <div className={`${storeTheme==="dark"?"bg-black duration-300 text-white":""}`}>
            <section className="relative bg-[center_bottom] bg-cover bg-no-repeat flex overflow-visible justify-center px-10 py-0">
                <div className="container w-full max-w-[1200px] py-[30px]">
                    <div className='flex relative z-10 items-center flex-col gap-14 w-full'>
                        <div className='flex relative items-center flex-col gap-4 w-full'>
                            <h2 className='text-[3.125rem] leading-[1.2] z-10 max-w-[770px] text-center text-[rgb(11,53,88)] font-bold'>Accomplish goals that matter to your business</h2>
                        </div>
                        <div className='flex justify-between w-[100%]'>
                            {data.map((item, index) =>
                                <div key={index} className='rounded-lg border-solid border-[rgb(231,237,246)] w-[30%] p-[1.625rem] border'>
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
        </div >
    )
}

export default Card