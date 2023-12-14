import React, { useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { GiDiscussion } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import tab1 from "../../components/homeSections/images/tab1.webp";
import tab2 from "../../components/homeSections/images/tab2.webp";
import tab3 from "../../components/homeSections/images/tab3.webp";
import tab4 from "../../components/homeSections/images/tab4.webp";
import tab5 from "../../components/homeSections/images/tab6.webp";
import tab6 from "../../components/homeSections/images/tab6.webp";
import Image from 'next/image'
import { useAppSelector } from "@/store/hooks";
const Toptabs = () => {
    const storeTheme = useAppSelector((state) => state.theme);
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: "1",
            img6: <TbTargetArrow />,
            tabTitle: 'Sales',
            title: 'Drive more revenue',
            content: 'Book high-value meetings in seconds and turn scheduling into a competitive advantage.',
            title1: 'Speed up your sales cycle',
            content1: 'Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.',
            title2: 'Close more deals',
            content2: 'Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.',
            img1: tab1,
        },
        {
            id: "2",
            img6: <HiSpeakerphone />,
            tabTitle: 'Marketing',
            title: 'Drive more pipeline',
            content: 'Turn marketing leads into booked meetings, faster',
            title1: 'Improve lead response times',
            content1: 'Gain a competitive advantage when you qualify, route, and book leads instantly.',
            title2: 'Boost conversion rates',
            content2: 'Reduce friction in the sales funnel and close more deals.',
            img1: tab2,

        },
        {
            id: "3",
            img6: <GiDiscussion />,
            tabTitle: 'Customer Success',
            title: 'Drive more retention',
            content: 'Bring all of your experts together and connect with customers at every stage of their journey to build long-lasting partnerships.',
            title1: 'Speed up your response times',
            content1: 'Quickly book time to solve customers’ needs and help them self-serve to support their goals.',
            title2: 'Improve NPS and customer health',
            content2: 'Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.',
            img1: tab3,
        },
        {
            id: "4",
            img6: <FaPeopleRoof />,
            tabTitle: 'Recruting',
            title: 'Hire more efficiently',
            content: 'Spend less time wrangling calendars and more time meeting candidates.',
            title1: 'Speed up your recruiting cycle',
            content1: 'Book interviews in seconds and reduce time-to-fill.',
            title2: 'Improve the candidate experience',
            content2: 'Eliminate friction and make your recruiting process a competitive advantage.',
            img1: tab4,
        },
        {
            id: "5",
            img6: <FaLaptopCode />,
            tabTitle: 'Information Technology',
            title: 'Maintain enterprise-grade security with scheduling automation',
            content: 'Stay aligned with your security requirements and reduce risk across the org.',
            title1: 'Implement and govern at ease',
            content1: 'Eliminate the manual processes of implementing, managing user access and permissions on the platform.',
            title2: 'Drive adoption and ROI across teams',
            content2: 'Partner with our team to onboard, drive adoption, and identify success metrics to achieve greater value, faster.',
            img1: tab5,
        },
        {
            id: "6",
            img6: <PiStudentDuotone />,
            tabTitle: 'Education',
            title: 'Drive more valuable connections with automated schedulin',
            content: 'Spend more quality time supporting students, whether you’re advising, tutoring, career planning, or counseling.',
            title1: 'Increase communication and foster coordination',
            content1: 'Make your schedule more accessible to students and prospects, allowing them to book time when they need it most.',
            title2: 'Deliver a better educational experience',
            content2: 'Focus on what matters most: supporting and connecting with your students, so they can succeed.',
            img1: tab6,
        }

    ];

    const handleTabClick = (e: any) => {
        setCurrentTab(e.target.id);
    }

    return (
        <>
            <div className='container'>
                <h1 className="text-[3.125rem] leading-[1.2] font-bold  text-center text-[rgb(11,53,88)] mb-14">Smarter scheduling for teams<br /> who conduct meetings at scale</h1>
                <div className='tabs flex justify-between'>
                    <div className="flex items-center justify-center w-full">
                        {tabs.map((tab) =>
                            <button className="inline-grid justify-evenly border-b-[3px] border-b-[gray] border-solid bg-[lightgray] text-[#888888] cursor-pointer w-full bg-[rgba(255,255,255,0.1)]
                         transition-all duration-[0.3s] ease-[ease-out] pb-[25px] border-[none] hover:text-[grey] hover:bg-[rgba(255,255,255,0.15)] disabled:text-[white] "
                                key={tab.id} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>{tab.img6} {tab.tabTitle}</button>
                        )}
                    </div>

                </div>
                <div className={`content  font-light leading-[30px] text-base pb-[50px] ${storeTheme==="dark"?"bg-black":"bg-[white]"}`}>

                    <div className="main">
                        {tabs.map((tab, i) =>
                            <div key={i} className="w-[100%] ">
                                {currentTab === `${tab.id}` &&
                                    <div className="flex items-center flex-row w-full max-w-[1080px] pt-2.5 pb-16 px-10 m-auto">
                                        <div className={`content w-[50%] pr-[25px] `}>
                                            <h3 className={`text-[medium] text-xl font-semibold ${storeTheme==="dark"?"text-white":"text-[black]"}`}>{tab.title}</h3>
                                            <p className="text-lg text-[grey] pt-1.5 pb-[5px]">{tab.content}</p>
                                            <h3 className={`text-[medium] text-xl font-semibold ${storeTheme==="dark"?"text-white":"text-[black]"}`}>{tab.title1}</h3>
                                            <p className="text-lg text-[grey] pt-1.5 pb-[5px]">{tab.content1}</p>
                                            <h3 className={`text-[medium] text-xl font-semibold ${storeTheme==="dark"?"text-white":"text-[black]"}`}>{tab.title2}</h3>
                                            <p className="text-lg text-[grey] pt-1.5 pb-[5px]">{tab.content2}</p>
                                        </div>
                                        <div className="image w-[50%]">
                                            {/* Use local image or an image from the same domain */}
                                            <Image src={tab.img1} width={500} height={400} className=" me-3" alt="Image" />
                                        </div>
                                    </div>}
                            </div>
                        )}
                    </div>


                </div>
            </div>

        </>
    );
};
export default Toptabs;
