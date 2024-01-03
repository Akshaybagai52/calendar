"use client";
import { getNotificationLocal } from "@/lib/getNotification";
import React, {useState } from "react";

const NotificationDetails = () => {


const [ThroughLine,setThroughLine]=useState<any>([])

  const removeNotification = (id: number) => {
    if (!ThroughLine.includes(id)) {
      // If not, add the user to the throughLine array as active
      const updatedThroughLine = [...ThroughLine, id];
      setThroughLine(updatedThroughLine);
    }


    // const updatedNotifications = getNotificationLocal().filter(
    //   (notification: any) => notification.id !== id
    // );

    // getNotificationLocal();

    // window.localStorage.setItem(
    //   "notification",
    //   JSON.stringify(updatedNotifications)
    // );

  };




  return (
    <div className={`notification_details bg-black p-2 rounded-[10px] w-[300px] ${!getNotificationLocal()?null:getNotificationLocal().length+1>=3?`h-[${180*getNotificationLocal().length+1>721?300:180*getNotificationLocal().length+1}px] overflow-scroll`:""} `}>
      <div>
        {
          
           !getNotificationLocal()?<h3 className="text-white text-center border-white border">No notification Data</h3>
           :getNotificationLocal()?.map((item: any) => {
            return (
              <div className="" key={item.id}>
                <div className="flex justify-between items-center shadow-[0px_0px_2px_1px] shadow-white mx-0 my-[7px] p-[5px] rounded-[7px]">
                 {
              ThroughLine?.includes(item.id)?( <div className="text-white">
                  <h3 className={`line-through`}>{item.title}</h3>
                  <p className={`line-through`}> {new Date(item.startDate).toDateString()}</p>
                  <p className={`line-through`}>{new Date(item.endDate).toDateString()}</p>
                </div>): <div className="text-white">
                    <h3 >{item.title}</h3>
                    <p > {new Date(item.startDate).toDateString()}</p>
                    <p >{new Date(item.endDate).toDateString()}</p>
                  </div>
                 }
                  <div>
                    <button
                      className="bg-red-500 rounded p-1 text-white"
                      onClick={() => removeNotification(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
          
          }
      </div>
    </div>
  );
};

export default NotificationDetails;
