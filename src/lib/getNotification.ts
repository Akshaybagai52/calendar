export const getNotificationLocal=()=>{
    let localNotification:any=localStorage.getItem("notification")
    let storeNotification:any = JSON.parse(localNotification) ;
    return storeNotification;
}