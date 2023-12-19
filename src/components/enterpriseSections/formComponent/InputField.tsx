"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function InputField({ user, selectOpt, textarea }: any) {
    const [data, setData] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data: any) => {
        setData(data)
        console.log(data);
        alert(JSON.stringify(data, null, 2));
    }

    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg'>
                    {user.map((val: any, index: number) => {
                        return (
                            <div key={index} className='flex flex-wrap -mx-3 mb-[5px]'>
                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                                    <label className='block uppercase tracking-wide text-gray-700 text-[16px] font-bold mb-2' htmlFor="">{val.label}</label>
                                    <input
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded 
                                            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                        {...register(val.name, {
                                            required: true,
                                            validate: {
                                                minLength: (v) => v.length >= 3,
                                                matchPattern: (v) => /^[a-zA-Z]+$/.test(v),
                                            },
                                            // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                                        })}
                                        type={val?.type}
                                        placeholder={val?.placeholder}
                                    />
                                    {errors?.[val.name]?.type === "required" && (
                                        <p className="errorMsg text-red-500 text-xs italic">This field is required</p>
                                    )}
                                    {errors?.[val.name]?.type === "minLength" && (
                                        <p className="errorMsg text-red-500 text-xs italic">{`This ${[val.name]} should is not Valid`}</p>
                                    )}
                                    {/* {errors?.[val.type] && errors?.[val.type.email]?.type === "pattern" && (
                                        <p className="errorMsg text-red-500 text-xs italic">Email is not valid.</p>
                                    )} */}
                                </div>
                            </div>
                        )
                    })}
                    <div className='flex flex-wrap -mx-3 mb-2'>
                        <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                            <label htmlFor="" className='block uppercase tracking-wide text-gray-700 text-[16px] font-bold mb-2'>{selectOpt[0].label}</label>
                            <div className='relative'>
                                <select
                                    {...register(selectOpt[0].name,)} // Add a name and validation for select
                                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight 
                                        focus:outline-none focus:bg-white focus:border-gray-500'
                                >
                                    <option value="">--Please choose an option--</option>
                                    {selectOpt[0]?.meetingType?.map((meetingType: any, key: any) => (
                                        <option value={meetingType} key={key}>
                                            {meetingType}
                                        </option>
                                    ))}
                                </select>
                                {/* {errors.selectOpt?.message === "required" && (
                                    <p className="errorMsg text-red-500 text-xs italic">This field is required</p>
                                )} */}
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                        <label htmlFor="" className='block tracking-wide text-gray-700 text-[16px] font-bold mb-2'>{textarea[0]?.label}</label>
                        <textarea
                            {...register(textarea[0].name,)}
                            className='appearance-none block w-full h-[100px] bg-gray-200 text-gray-700 border
                                border-gray-200 rounded py-3 px-4 leading-height-[3.25] focus:outline-none focus:bg-white focus:border-gray-500'
                            placeholder={textarea[0]?.placeholder}
                            rows={4}
                            cols={40}
                        />

                    </div>

                    <button
                        className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-2.5 px-0 py-2 border-[none]"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
    )
}

export default InputField;
