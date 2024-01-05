import { RotatingLines } from "react-loader-spinner";
export const Loader=({isLoader}:any)=>{
    console.log(isLoader,"isLoader")
    return(
        <>
              <RotatingLines
                strokeColor="black"
                strokeWidth="5"
                animationDuration="40s"
                width="25"
                visible={isLoader}
              />
        </>
    )
}
