import { Button, SubmitButton} from "../buttons/buttons";

export const TextArea = ({rating_message,setRating_message,ratings}:any | string) => {
    console.log(rating_message,"ratingData")
    const handleChange=(e:any)=>{
        const {value}=e.target
        setRating_message(value)
    }
const handleClickRating=()=>{
   
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
