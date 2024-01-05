export interface SubmitButtonProps {
  btnName: string;
  pathName: string;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  OnClick:(event:React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

export interface Feedback1Props {
  btnName: string;
  pathName: string;
  OnClick:(event:React.MouseEvent<HTMLButtonElement> | any) => void | Promise<void>;
}


export interface FeedBackProps{
  name:string,
  lable:string,
  type:string,
}

export interface feedbackApiProps{
  user_id:any | string,
  user_name:string,
  user_email:string,
  feedback:string
}