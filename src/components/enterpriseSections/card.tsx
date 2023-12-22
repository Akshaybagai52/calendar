"use client"
import React from 'react'
import Image, { StaticImageData } from "next/image";
import { useAppSelector } from '@/store/hooks'
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp"
import card3 from "../../assets/card3.webp"
import card4 from "../../assets/card4.webp"



interface Point {
    head: string,
    para: string,
    btn: string,
    numb: string,
    secPara: string,
    img: string | StaticImageData,
}
interface Point1 {
    imge: string | StaticImageData,
    head2: string,
    thirdPara: string,
}

function Card() {
    const storeTheme = useAppSelector((state) => state.theme)
    const data1: Point1[] = [
        {
            imge: card1,
            head2: 'Complete legal and security reviews',
            thirdPara: 'Our team ensures that your organizations requirements are met.',
        },
        {
            imge: card2,
            head2: 'Set up your account for scale',
            thirdPara: 'Implementation experts customize onboarding and guide setup.',
        },
        {
            imge: card3,
            head2: 'Establish and hit your goals',
            thirdPara: 'Success partners help you get the most out of your subscription.',
        },
        {
            imge: card4,
            head2: 'Skip the line if anything comes up',
            thirdPara: 'Product specialists are available 24/7 to support your team.',
        }
    ]

    const data: Point[] = [
        {
            head: "Create more efficient and productive teams",
            para: "Speed up scheduling without disrupting your flow. Calendly connects to the tools, apps, and browsers where your team does their best work.",
            btn: "View 100+ integrations ",
            numb: '160%',
            secPara: 'more customers reached',
            img: img1,
        },
        {
            head: "Improve company performance and customer experience",
            para: "Make it easy for qualified leads to reach you. Time-saving automations empower client and candidate-facing teams to convert leads, faster.",
            btn: "Discover calendly Routing",
            numb: '22x',
            secPara: 'interviews scheduled',
            img: img2,
        },
        {
            head: "Reduce the total cost of ownership",
            para: "Consolidate your software investments with a single platform that meets the needs of recruiting, sales, and other meeting-heavy teams.",
            btn: "Learn about team scheduling",
            numb: '323%',
            secPara: 'return on investment',
            img: img3,
        },
    ]
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