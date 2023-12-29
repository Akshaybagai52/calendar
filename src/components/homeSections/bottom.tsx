import Link from 'next/link';
import React from 'react';
import { useAppSelector } from '@/store/hooks';
import { Button } from '../buttons/buttons';

export default function Bottom() {
    const storeTheme = useAppSelector((state) => state.theme);
    const textColorClass = storeTheme === 'dark' ? 'text-white' : 'text-[rgb(71,103,136)]';

    return (
        <div className={`mb-[50px] mt-[50px] ${storeTheme==="dark"?"bg-black duration-300 text-white":""}`} >
            <div className='container'>
                <div className='w-full max-w-[1200px] py-0'>
                    <div className={`flex items-center justify-center flex-col gap-6 w-full max-w-[1170px] min-h-[222px] border p-[72px] rounded-[32px] border-solid border-[rgb(212,224,237)] ${storeTheme === 'dark' ? 'bg-black text-white' : 'bg-[rgb(240,243,248)]'}`}>
                        <div className='w-full max-w-[770px] h-auto'>
                            <h1 className={`text-[2.375rem] leading-[1.2] font-bold text-center mb-6 ${textColorClass}`}>Power up your scheduling</h1>
                            <div className={`w-full h-auto text-center text-xl leading-[1.4] font-normal ${textColorClass}`}>
                                <p className='w-full h-auto pb-8'>Get started with the worlds leading Scheduling Automation Platform in seconds for free.</p>
                                <div className=' flex items-center gap-4 w-full justify-center'>
                                    {/* <Link className={`cursor-pointer ${textColorClass} border bg-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)] sm:text-[10px]`} href='/register'>Sign up for free</Link> */}
                                    <Button btnName="Sign up for free" pathName="Sign up for free"/>
                                    <Button btnName="Talk to sales" pathName="Talk to sales"/>
                                    {/* <button className={`cursor-pointer text-black bg-white border text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)] sm:text-[10px]`}>Talk to sales</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
