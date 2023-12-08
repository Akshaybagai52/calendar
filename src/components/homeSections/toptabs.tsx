import React, { useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { HiSpeakerphone } from "react-icons/hi";
import { GiDiscussion } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import Image from 'next/image'


const Toptabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: "1",
            img6: <TbTargetArrow />,
            tabTitle: 'Sales',
            title: 'Drive more revenue',
            content: 'Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.'
        },
        {
            id: "2",
            img6: <HiSpeakerphone />,
            tabTitle: 'Marketing',
            title: 'Speed up your sales cycle',
            content: 'Contenido de tab 2.'
        },
        {
            id: "3",
            img6: <GiDiscussion />,
            tabTitle: 'Customer Success',
            title: 'Close more deals',
            content: 'Contenido de tab 3.'
        },
        {
            id: "4",
            img6: <FaPeopleRoof />,
            tabTitle: 'Recruting',
            title: 'Drive more pipeline',
            content: 'Contenido de tab 4.'
        },
        {
            id: "5",
            img6: <FaLaptopCode />,
            tabTitle: 'Information Technology',
            title: 'Improve lead response times',
            content: 'Contenido de tab 5.'
        },
        {
            id: "6",
            img6: <PiStudentDuotone />,
            tabTitle: 'Education',
            title: 'Title 6',
            content: 'Contenido de tab 6.'
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
                <div className='content bg-[white] font-light leading-[30px] text-base text-justify  pb-[50px]'>
                 
                    <div className="main">
                        {tabs.map((tab, i) =>
                            <div key={i} className="w-[100%]">
                                {currentTab === `${tab.id}` &&
                                    <div className="flex items-center flex-row w-full max-w-[1080px] pt-10 pb-16 px-10 m-auto">
                                        <div className="content w-[50%]">
                                            <h3 className="text-[black] text-[medium] text-xl font-semibold">{tab.title}</h3>
                                            <p>{tab.content}</p>
                                        </div>
                                        <div className="image w-[50%]">
                                            {/* Use local image or an image from the same domain */}
                                            <Image src="/path/to/local/image.jpg" width={300} height={200} className="h-8 me-3" alt="Image Alt Text" />
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
