import React from 'react';
import "./button-33.css";
import { useRouter } from "next/navigation";
export const Button = ({ btnName, pathname }: any) => {
  const router = useRouter();
  let loginCss =
    btnName === "login" || btnName === "bookingtoday"
      ? "button-33"
      : "btn-grad";
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




interface SubmitButtonProps {
  btnName: string;
  pathName: string;
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ btnName, pathName, onSubmit }) => {
  const handleClick =async(event: React.MouseEvent<HTMLButtonElement>) => {
    switch (pathName) {
      case 'submit':
       await onSubmit(event);
        break;
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
