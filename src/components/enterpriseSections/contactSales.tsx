"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useAppSelector } from "@/store/hooks";
import { formBasic, selectOption, textArea } from './formComponent/data';
import InputField from './formComponent/InputField';
interface SalesFormData {
    fname: string,
    lname: string,
    email: string,
    select: string,
    desc: string,
}

function ContactSales() {
    const [data, setData] = useState("");

    const storeTheme = useAppSelector((state) => state.theme)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const meetingType = ["Hosting Meeting MySelf", "with a small team (2-10) users", "with a larger team (11+) users", "accross department and multiple teams (50+) users", "I'm not sure yet"]

    const onSubmit = (data: any) => {
        setData(data)
        console.log(data);
        alert(JSON.stringify(data, null, 2));

    }
    return (
        <div className={`${storeTheme === "dark" ? 'bg-black text-white duration-300' : 'bg-[#f4f8ff]'}`}>
            <div>
                <div className="container">
                    <div className='flex pt-[75px] pb-[75px]'>
                        <div className="cont">
                            <div>
                                <p className='w-full text-left text-[rgb(0,107,255)]
                                 text-base leading-[1.2] font-semibold tracking-[1.25px] uppercase mb-8'>CONTACT OUR SALES TEAM</p>
                                <h2 className='text-[2.375rem] leading-[1.2] max-w-[805px] whitespace-pre-line text-left 
                                 text-[rgb(11,53,88)] font-bold mb-6'>Schedule a personalized demo</h2>
                                <div className='flex items-center gap-[18px] w-full mb-6'>
                                    <h2 className='text-[3.125rem] leading-[1.2] font-bold text-[#006bff]'>20m <span className='w-full h-full text-[rgb(71,103,136)] text-lg font-medium'>users worldwide</span>
                                    </h2>
                                </div>
                                <div className='flex items-center gap-[18px] w-full mb-6'>
                                    <h2 className='text-[3.125rem] leading-[1.2] font-bold text-[#006bff]'>100k <span className='w-full h-full text-[rgb(71,103,136)] text-lg font-medium'>companies use Calendly</span>
                                    </h2>
                                </div>
                                <div className='flex items-center gap-[18px] w-full mb-6'>
                                    <h2 className='text-[3.125rem] leading-[1.2] font-bold text-[#006bff]'>230+
                                        <span className='w-full h-full text-[rgb(71,103,136)] text-lg font-medium'>countries with active users</span>
                                    </h2>
                                </div>

                                <button className='cursor-pointer text-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row inline-flex opacity-100 items-center
                                 justify-center gap-2 text-left font-semibold p-0 rounded-lg'>contact Support</button>
                            </div>
                        </div>
                        <div className='form relative box-border z-10 flex flex-col items-start bg-white border shadow-[rgba(45,40,77,0.1)_0px_12px_32px] 
                p-8 rounded-lg border-solid border-[rgb(231,237,246)]'>
                            <InputField user={formBasic} selectOpt={selectOption} textarea={textArea} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSales