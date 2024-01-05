import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ErrorMessage } from "@hookform/error-message"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Schema } from '../enterpriseSections/formComponent/validations';
import { yupResolver } from "@hookform/resolvers/yup"
import { formBasic, details } from "../enterpriseSections/formComponent/data"

const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
// interface buttonProps {
//     handleClose:(event:React.FC<>)
// }
export default function Popup({ setOpen, open, handleClose }: any) {
    // console.log(formBasic, "fff");

    const [data, setData] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(Schema) });
    const baseUrl = "http://localhost:3000";
    
    const onSubmit = async (data: any, e: any) => {
        console.log(data,"data");
        e.preventDefault();
    
        
        setData(data);
        console.log(data, "datasend");
        alert(data?.fname)

        const res = await fetch(`${baseUrl}/api/eventbooking`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            // HANDLING ERRORS
            .then((res) => {
                console.log(res);
                if (res.status > 199 && res.status < 300) {
                    alert("Send Successfully !");
                    setData("")
                }
            });
    }
    // const handleOpen=()=>setOpen(true);
    // const handleClose = () => setOpen(false);
    return (
        <div>
            {/* <Button onClick={handleOpen}>button</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open} >
                    <form onSubmit={handleSubmit(onSubmit)} className=' absolute boxshadow-[24] top-[50%] -translate-x-2/4 -translate-y-2/4 left-[50%] w-[500px] h-[450px] max-w-lg bg-[white] overflow-scroll '>
                        {
                            formBasic.map((val: any, index: number) => {
                                return (
                                    <div key={index} className='flex flex-wrap mb-[5px]'>
                                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0 m-auto'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-[16px] font-bold mb-2' htmlFor="">{val.label}</label>
                                            <input
                                                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded 
                                            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                                {...register(val.name, {
                                                    required: true,
                                                })}
                                                type={val?.type}
                                                placeholder={val?.placeholder}
                                            />
                                            <p className='errorMsg text-red-500 text-xs italic'>
                                                <ErrorMessage errors={errors} name={val.name} />
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='flex flex-wrap -mx-3 mb-2'>
                            <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
                                {
                                    details.map((val: any, index: number) => {
                                        return (
                                            <div key={index} className='flex flex-wrap mb-[5px]'>
                                                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0 m-auto'>
                                                    <label className='block uppercase tracking-wide text-gray-700 text-[16px] font-bold mb-2' htmlFor="">{val.label}</label>
                                                    <input
                                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded 
                                            py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                                                        {...register(val.name, {
                                                            required: true,
                                                        })}
                                                        type={val?.type}
                                                        placeholder={val?.placeholder}
                                                    />
                                                    <p className='errorMsg text-red-500 text-xs italic'>
                                                        <ErrorMessage errors={errors} name={val.name} />
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <button
                                className="signup-btn w-full rounded bg-indigo-500 text-white text-base cursor-pointer mx-0 my-2.5 px-0 py-2 border-[none]"
                                type="submit">
                                Submit
                            </button>
                        </div>

                    </form>
                </Fade>
            </Modal>
        </div>
    );
}

