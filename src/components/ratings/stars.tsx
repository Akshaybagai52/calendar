import { useEffect,useRef, useState } from "react";
import "./ratings.css";
import { TextArea } from "../textArea/textArea";
import { ratingProps } from "@/types/types";
import { GetFeedbackUser } from "@/utils/api";

export const Ratings = () => {
  let stars: number[] = [1, 2, 3, 4, 5];
  const [ratings, setRatings] = useState<any[]>([]);
const [feedUserData,setFeedUserData]=useState<any>()
const [rating_message,setRating_message] =useState<string>()
const [ratingNum,setRatingNum]=useState<number | any>()
console.log(feedUserData,"feed")
  const handleClickStar = (ele: any) => {
    setRatingNum(ele)
    let starNew: number[] = [];
   
    
    for (let i: any = 1; i <= ele; i++) {
      starNew.push(i);
    }
    setRatings(starNew);
  
  };



// out side click
// const textRef=useRef<HTMLDivElement>(null)
// useEffect(()=>{
//   const handler=(e:MouseEvent)=>{
// if(!textRef.current?.contains(e.target as Node)){
//   setRatingzfieldShow(false)
// }
//   }
//   window.addEventListener('mousedown',handler)
//   return ()=>{
//     window.removeEventListener('mousedown',handler)
//   }
// })


useEffect(()=>{
const feeduser=async()=>{
let userData:any= await GetFeedbackUser()
console.log(userData.data.message,"pppp")

setFeedUserData(userData.data.message)
}
feeduser()
},[])

  return (
    <div className="relative">
      <div  className={`p-2 ${feedUserData==null?"star_overlay": 'p-2'}`} >
      {/* <div  className={`p-2 star_overlay`} >  */}
      <div className="star_group flex gap-1  items-center mb-[15px] ">
      <p className="font-bold text-white">Ratings:</p>
      {stars.map((ele: number) => {
        return (
          <div key={ele}>
            <svg
              onClick={() => handleClickStar(ele)}
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              fill={`${ratings.includes(ele) ? "#1de9b6" : "white"}`}
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
     
       <div  className={`textarea `}>
              <TextArea rating_message={rating_message} setRating_message={setRating_message} ratings={ratingNum} feedUserData={feedUserData} />
            </div>
    </div>
    </div>
  );
};
