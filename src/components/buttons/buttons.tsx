import React from 'react';
import "./button-33.css";
import { useRouter } from "next/navigation";
import { SubmitButtonProps } from '@/types/types';
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
      default:
        break;
    }
  };

  return (
    <button onClick={handleClick} className={`btn-grad`} type="button">
      {btnName}
    </button>
  );
};
