export const url ="http://localhost:3000/api/"


export const getApiWithId= async(user_email:any)=>{
    
try {
    const userdata=await fetch(url+`getusers?user_email=${user_email}`,{
        method:'get',
        headers:{
            "Content-Type": "application/json"
        }
    })
   let data=await userdata.json()
return data.message
} catch (error) {
    return error
}
}