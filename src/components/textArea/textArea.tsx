import { RatingSaveApi } from "@/utils/api";
import { SubmitButton} from "../buttons/buttons";


export const TextArea = ({rating_message,setRating_message,ratings,feedUserData}:any | string) => {
    // console.log(feedUserData?.id,"feedUserData")
    let userId=feedUserData?.id
    const handleChange=(e:any)=>{
        const {value}=e.target
        setRating_message(value)
    }
const handleClickRating=async(e:any)=>{
 e.preventDefault()
 if(!ratings && !feedUserData?.id){
console.log("empty fields")

 }
 let RatingApi:any = await RatingSaveApi({rating_message,ratings,userId})
 console.log(RatingApi,"RatingApi")
}

  return (
    <div className="textarea_main border-t border-white ">
      <div className="text_field ">
     <h3 className="text-white py-2">Your rating Message</h3>
      <textarea onChange={handleChange} value={rating_message} 
        className=" p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        placeholder="type your rating message here..."
      ></textarea>
      < SubmitButton btnName="submit Your Rating" pathName="rating" OnClick={handleClickRating} onSubmit={()=>console.log("rating submit")} />
      </div>
     
    </div>
  );
};
