export interface SubmitButtonProps {
  btnName: string;
  pathName: string;
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  OnClick:(event:React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}