import React, { useState } from 'react'
import imgs1 from './images/top1.png';
import imgs2 from './images/top2.png';
import imgs3 from './images/top3.png';
import imgs4 from './images/top4.png';
import imgs5 from './images/top5.png';

import imgs6 from './images/top6.png';
import { StaticImageData } from 'next/image';
import { useAppSelector } from '@/store/hooks';

import {motion} from 'framer-motion'
import Image from 'next/image';

interface Point {
    id: string | undefined,
    tabTitle: string,
    title: string,
    content: string,
    btn: string,
    title1: string,
    content1: string,
    title2: string,
    content2: string,
    img1: string | StaticImageData,
    delay:number

}

function Toptab2() {
    const storeTheme = useAppSelector((state) => state.theme);
    const text_colors=storeTheme==="dark"?"text-white":"text-[rgb(11,53,88)]"
    const [currentTab, setCurrentTab] = useState('1');
    const tabs: Point[] = [
        {
            id: "1",
            tabTitle: 'Sales',
            title: '26%',
            content: 'increase in website bookings',
            btn: 'Read full Customer Story',
            title1: '20%',
            content1: 'more sales meetings held',
            title2: '360%',
            content2: 'increase in partner calls',
            img1: imgs1,
            delay:0.1
        },
        {
            id: "2",
            tabTitle: 'Marketing',
            title: '169%',
            content: 'return on investment',
            btn: 'Read full Customer Story',
            title1: '88%',
            content1: 'more customers reached YOY',
            title2: '114%',
            content2: 'more meetings booked YOY',
            img1: imgs2,
            delay:0.2
        },
        {
            id: "3",
            tabTitle: 'Customer Success',
            title: '81%',
            content: 'return on investment',
            btn: 'Read full Customer Story',
            title1: '60%',
            content1: 'faster time to schedule',
            title2: '2,077',
            content2: 'hours saved',
            img1: imgs3,
            delay:0.3
        },
        {
            id: "4",
            tabTitle: 'Recruting',
            title: '323%',
            content: 'return on investment',
            btn: 'Read full Customer Story',
            title1: '143%',
            content1: 'increase in client outreach',
            title2: '13,607',
            content2: 'hours reclaimed',
            img1: imgs4,
            delay:0.4
        },
        {
            id: "5",
            tabTitle: 'Information Technology',
            title: '89%',
            content: 'increase in efficiency',
            btn: 'Read full Customer Story',
            title1: '87.5%',
            content1: 'cost savings',
            title2: '20%',
            content2: 'fewer scheduling errors',
            img1: imgs5,
            delay:0.5
        },
        {
            id: "6",
            tabTitle: 'Education',
            title: '100%',
            content: 'increase in demos scheduled by outbound SDRs',
            btn: 'Read full Customer Story',
            title1: '40%',
            content1: 'increase in sales qualified opps through website',
            title2: '90%',
            content2: 'of sales calls scheduled with Calendly',
            img1: imgs6,
            delay:0.6
        }
    ];
    const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentTab(e.currentTarget.id);
    }
    return (
        <div>
            <section className={`${storeTheme==="dark"?"bg-dark duration-300 text-white":"bg-[rgb(240,243,248)]"}`}>
                <div className="container max-w-[1200px] py-[120px] ">
                    <div className=' tabs flex flex-col gap-16 sm:w-[98%] w-[100%]'>
                        <div className='sm:block flex'>
                            <div className=''>
                                <h2 className={`text-[2.375rem] leading-[1.2] font-bold text-center mb-6 ${text_colors}`}>Discover how businesses grow with Calendly</h2>
                            </div>
                            <div className='sm:max-w-[50%] sm:mx-auto w-full max-w-[50%] min-w-[373px] h-auto'>
                                <p className='text-left text-[rgb(71,103,136)] text-lg leading-[1.4] font-[normal] pb-4'>Learn how teams of all sizes are using Calendlys scheduling automation platform to create value.</p>

                                <button className='cursor-pointer text-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row inline-flex opacity-100 items-center justify-center gap-2 text-left font-semibold p-0 rounded-lg'>
                                    <span className='cursor-pointer text-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row inline-flex opacity-100 items-center justify-center gap-2 font-semibold p-0 rounded-lg'>View Customers stories</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='sm:grid sm:grid-cols-2 sm:place-items-center content tablist flex justify-between gap-3 w-full'>
                        {tabs.map((tab: Point) =>

                            <motion.button animate={{y:-50}} transition={{delay:tab.delay}} whileInView={{y:0}} className='cursor-pointer inline-flex w-full max-w-[180px] flex-[1_0_140px] 
                        justify-center items-center shadow-[rgba(71,103,136,0.06)_0px_15px_30px,rgba(71,103,136,0.03)_0px_8px_15px,rgba(71,103,136,0.04)_0px_4px_4.5px]
                         bg-white p-[22px] rounded-[10px] border-[1.5px] border-solid border-[rgb(0,107,255)]'
                                key={tab.id} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
                                <Image src={tab.img1} width={100} height={50} alt="top tab image" />
                            </motion.button>
                        )}

                    </div>
                    <div className='content font-light leading-[30px] text-base mt-[50px]'>

                        <div className="main">
                            {tabs.map((tab, i) =>
                                <div key={i} className="w-[100%] ">
                                    {currentTab === `${tab.id}` &&
                                        <div className=" flex justify-between gap-6 w-full">
                                            <div className="flex flex-col gap-3 w-full max-w-[336px]">
                                                <div className='border-b-2 border-b-[rgb(0,107,255)] border-solid'>
                                                    <h3 className={`sm:text-[30px] text-left  text-[4.25rem] leading-[1.2] font-bold ${text_colors}`}>{tab.title}</ h3>
                                                    <p className={`sm:text-[10px] text-left ${storeTheme==="dark"?"text-white":"text-[rgb(71,103,136)]"} text-2xl leading-[1.4] font-semibold mb-6`}>{tab.content}</p>

                                                </ div>
                                                <button className={`text-justify cursor-pointer ${storeTheme==="dark"?"text-white":"text-[rgb(71,103,136)]"} text-lg leading-[1.6] relative h-fit flex-row inline-flex opacity-100 items-center gap-2 font-semibold p-0 rounded-lg`}>{tab.btn}</ button>

                                            </div>
                                            <div className="flex flex-col gap-3 w-full max-w-[336px]">
                                                <div className='border-b-2 border-b-[rgb(0,107,255)] '>
                                                    <h3 className={`sm:text-[30px] text-left ${text_colors} text-[4.25rem] leading-[1.2] font-bold`}>{tab.title1}</h3>
                                                    <p className={`sm:text-[10px] text-left ${storeTheme==="dark"?"text-white":"text-[rgb(71,103,136)]"} text-2xl leading-[1.4] font-semibold mb-6`}>{tab.content1}</p>
                                                </div>
                                            </ div>

                                            <div className="flex flex-col gap-3 w-full max-w-[336px]">
                                                <div className='border-b-2 border-b-[rgb(0,107,255)] border-solid'>
                                                    <h3 className={`sm:text-[30px] text-left ${text_colors} text-[4.25rem] leading-[1.2] font-bold`}>{tab.title2}</h3>
                                                    <p className={`sm:text-[10px] text-left ${storeTheme==="dark"?"text-white":"text-[rgb(71,103,136)]"} text-2xl leading-[1.4] font-semibold mb-6`}>{tab.content2}</p>
                                                </div>
                                            </ div>
                                        </div>}
                                </div>
                            )}
                        </div>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Toptab2