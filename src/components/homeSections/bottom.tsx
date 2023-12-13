import Link from 'next/link'
import React from 'react'

export default function Bottom() {
    return (
        <div className='mb-[50px] mt-[50px]'>
            <div className='container'>
                <div className='w-full max-w-[1200px] py-0'>
                    <div className='flex items-center justify-center flex-col gap-6 w-full max-w-[1170px] min-h-[222px] bg-[rgb(240,243,248)] border p-[72px] rounded-[32px] border-solid border-[rgb(212,224,237)]'>
                        <div className='w-full max-w-[770px] h-auto'>
                            <h1 className='text-[2.375rem] leading-[1.2] font-bold text-center text-[rgb(11,53,88)] mb-6'>Power up your scheduling</h1>
                            <div className='w-full h-auto text-center text-[rgb(71,103,136)] text-xl leading-[1.4] font-normal'>
                                <p className='w-full h-auto pb-8'>Get started with the worlds leading Scheduling Automation Platform in seconds for free.</p>
                                <div className=' flex items-center gap-4 w-full justify-center'>
                                    <Link className='cursor-pointer text-white border bg-[rgb(0,107,255)] text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)]' href='/register'>Sign up for free</Link>
                                    <button className='cursor-pointer text-[rgb(0,107,255)] bg-white border text-lg leading-[1.6] relative h-fit flex-row-reverse inline-flex opacity-100 items-center justify-center gap-2 text-center font-semibold px-[18px] py-2.5 rounded-lg border-solid border-[rgb(0,107,255)]'>Talk to sales</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
