import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from "../enterpriseSections/images/banner.webp"


function BannerSection() {
    return (
        <div className='mt-[80px] mb-[60px]'>
            <div className='container'>
                <div className='flex m-auto w-[100%]'>
                    <div className='contentss w-[50%]'>
                        <h1 className='text-[3.125rem] leading-[1.2] font-bold max-w-[805px] whitespace-pre-line text-left text-[rgb(11,53,88)]'>Solve external scheduling for enterprise</h1>

                        <div className='mt-[30px] w-full max-w-[770px] h-full text-left text-[rgb(71,103,136)] text-xl leading-[1.4] font-[normal]'>
                            <p className='text-[grey]'>Calendly powers scheduling for over 4 out of 5 Fortune 500 companies.
                            </ p>
                            <div className=' flex items-center gap-4 w-full justify-start pt-[12px]'>
                                <Link className='cursor-pointer text-white border bg-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)]' href='/register'>Sign up for free</Link>
                                <button className='cursor-pointer text-[rgb(0,107,255)] bg-white border text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)]'>Talk to sales</button>
                            </div>
                        </div>

                    </div>
                    <div className='images_card w-[50%]'>
                        <Image src={img} width={500} height={400} className="me-3" alt="Calendar Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection