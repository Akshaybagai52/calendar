export const url ="http://localhost:3000/api/"

import axios from "axios"

export const getApiWithId= async(user_email:any)=>{
    
try {
    const userdata=await axios.get(url+`getusers?user_email=${user_email}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
    let user=await userdata.data.message
return user
} catch (error) {
    return error
}
}



export const FeedbackSaveApi= async(feedUserData:any)=>{
    try {
        const userdata=await axios.post(url+`feedback`, feedUserData ,{
            headers:{
                "Content-Type": "application/json"
            }
        })
       let userFeed = userdata
   return userFeed
    } catch (error) {
        return error
    }
    }



