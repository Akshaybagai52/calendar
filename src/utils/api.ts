export const url = window.location.href.split('/').slice(0, 3).join('/')==="http://localhost:3000"?"http://localhost:3000/api/":"https://bookingcalendar.vercel.app/";

import axios from "axios";

export const getApiWithId = async (user_email: any) => {
  try {
    const userdata = await axios.get(
      url + `getusers/getusers?user_email=${user_email}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let user = await userdata.data.message;
    return user;
  } catch (error) {
    return error;
  }
};

export const FeedbackSaveApi = async (feedUserData: any) => {
  const email=localStorage.getItem("email")
  console.log(feedUserData,email)
  try {
    const userdata = await axios.post(url + `feedback`, {user_name:feedUserData.user_name,user_email:email,feedback:feedUserData.feedback,user_id:feedUserData.user_id}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let userFeed = userdata;
    return userFeed;
  } catch (error) {
    return error;
  }
};


export const RatingSaveApi = async ({rating_message,ratings,userId}:any) => {
  let ratingNum =(`${ratings}`)
  

  try {
    const userdata = await axios.post(url + `rating`,{rating_message:rating_message,user_rating:ratingNum,feedback_user_id:userId}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let userFeed = userdata;
    return userFeed;
  } catch (error) {
    return error;
  }
};



// http://localhost:3000/api/getusers/feeddata/feeddata?user_email=pradeep@gmail.com
export const GetFeedbackUser=async ()=>{
  try {
    const email=localStorage.getItem("email")

    const feedUniqueUser=await axios.get(url+'getusers/'+`feeddata/feeddata?user_email=${email}`)
    return feedUniqueUser
  } catch (error) {
    return error;
  }


}


export const Rating =async()=>{
    
}
