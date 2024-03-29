"use client"
import React from 'react';
import "./button-33.css";
import { useRouter } from "next/navigation";
import { Feedback1Props, SubmitButtonProps } from '@/types/types';
export const Button = ({ btnName, pathname }: any) => {
  const router = useRouter();

  const handleClick = () => {
    switch (pathname) {
      case "login":
        router.push("/login");
        break;
      case "bookingtoday":
        router.push("/bookingtoday");
        break;
    
      default:
        break;
    }
  };
  return (
    <>
      <button onClick={handleClick} className={`button-33`} role="button">
        {btnName}
      </button>
    </>
  );
};


  


export const SubmitButton: React.FC<SubmitButtonProps> = ({ btnName, pathName, onSubmit,OnClick }) => {
  const handleClick =async(event: React.MouseEvent<HTMLButtonElement>) => {
    switch (pathName) {
      case 'submit':
        if (onSubmit) {
          await onSubmit(event);
        }
        break;
        case 'checkout':
          if (OnClick) {
            await OnClick(event);
          }
          break;
          case 'feedback':
          if (onSubmit) {
            await onSubmit(event);
          }
          break;
          case 'submit1':
        if (onSubmit) {
          await onSubmit(event);
        }
        break;
        case 'rating':
          if (OnClick) {
            await OnClick(event);
          }
      default:
        break;
    }
  };

  return (
    <button onClick={handleClick} className={`${btnName==="feedback submitted" && "!bg-green-500"} btn-grad`} type="button">
      {btnName}
    </button>
  );
};



import style from '../feedback/feedback.module.css'
 export const FeedbackBtn :React.FC<Feedback1Props>=({btnName,pathName,OnClick})=>{
  const handleClick =async(event: React.MouseEvent<HTMLButtonElement>) => {
    switch (pathName) {
      case 'feedback':
          await OnClick(event);
        break;
      default:
        break;
    }
  };
    return(
        <>
      <button onClick={handleClick} className={style.feedback_btn}>{btnName}</button>
        </>
    )
}

interface tabProps{
  tabName:string | any,
  key:any,
  id:any,
  icon:any | string,
  onClick:(event:React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}
export const TabButtons:React.FC<tabProps> =({tabName,onClick,key,id,icon})=>{
  const handleClickTab=(event: React.MouseEvent<HTMLButtonElement>)=>{
    onClick(event)
  }
  return(
    <>
    <button key={key} id={id} className="glow-on-hover " type="button"  onClick={handleClickTab}> {tabName} </button>
    </>
  )
}