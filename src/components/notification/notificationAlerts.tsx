
 "use client"
import { getNotificationLocal } from '@/lib/getNotification';
import React, { useEffect, useState } from 'react';

const  NotificationAlerts = () => {
  // const [events, setEvents] = useState([
  //   // Your event data goes here
  //   {
  //     id: 1,
  //     name: 'Event 1',
  //     date: '2023-12-27',
  //     time: '15:00',
  //   },
  //   {
  //     id: 2,
  //     name: 'Event 2',
  //     date: '2023-12-28',
  //     time: '15:15',
  //   },
  //   // Add more events as needed
  // ]);


  const checkUpcomingEvents = () => {
    const currentTime = new Date(); // Current date and time
 
    
    const upcomingEvents = getNotificationLocal() && getNotificationLocal().filter((event:any) => {
    // const upcomingEvents = events.filter((event:any) => {
       
        console.log(event,"event")
      const eventDateTime = new Date(event.startDate);
      // const eventDateTime = new Date(`${event.date}T${event.time}`);
      console.log(eventDateTime,"eventDateTime")
      const timeDifference = eventDateTime.getTime() - currentTime.getTime();
      console.log(timeDifference,"timeDifference")
      const timeThreshold = 2 * 60 * 1000; // 30 minutes in milliseconds

      return timeDifference > 0 && timeDifference <= timeThreshold;
    });
console.log(upcomingEvents,"ll")
    if (upcomingEvents && upcomingEvents.length > 0) {
    
      upcomingEvents.forEach((event:any) => {
        alert(`Upcoming event:near alert message`);
      });
    }
  };

  useEffect(() => {
    checkUpcomingEvents()
    const interval = setInterval(checkUpcomingEvents, 60000); // Check every minute (adjust as needed)
    return () => clearInterval(interval);
    
  }, [getNotificationLocal()]);

  return (
    <>
    <span></span>
    </>
  )
};

export default  NotificationAlerts;
