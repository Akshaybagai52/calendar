import { useEffect, useState } from "react";
import './ratings.css'

export const Ratings = () => {
  let stars:number[]=[1,2,3,4,5]
const [ratings,setRatings]=useState<any[]>([])
// console.log(ratings,"stars")


const handleClickStar=(ele:any)=>{
  let starNew: number[] = [];
  for(  let i:any= 1;i<=ele;i++){

    starNew.push(i)
  }
  setRatings(starNew)
}

  return (
    <div className="flex gap-1  items-center">
         <p>Ratings:</p>
      {stars.map((ele:number) => {
        return (
          <div key={ele} >
           
            <svg
           onClick={()=>handleClickStar(ele)}
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
             fill={`${ratings.includes(ele)?"#1de9b6":"black"}`}
              width="16"
              data-view-component="true"
              className="octicon octicon-star-fill starred-button-icon d-inline-block mr-2"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
