export const url = "http://localhost:3000/api/";
console.log(window.location.href,"ooo")
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
