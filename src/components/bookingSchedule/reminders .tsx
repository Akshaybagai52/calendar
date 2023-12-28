

"use client"
import React, { useState } from 'react';
import { Calendar, Navigate, View, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getNotificationLocal } from '@/lib/getNotification';


moment.locale("en-GB");
const localizer = momentLocalizer(moment);


export default function ReactBigCalendar() {
  const dispatch = useAppDispatch();
  const storeTheme = useAppSelector((state) => state.theme);



  const [eventsData, setEventsData] = useState<any>(events);
  const [viewCalendar, setViewCalendar] = useState<View>("month")

  const [date, setDate] = useState(new Date());

const storeNotificationData=(updatedData:any)=>{
  console.log(updatedData,"updatedData")
  localStorage.setItem("notification", JSON.stringify(updatedData));
}


const handleSelect = ({ start, end }: any) => {
  console.log(start, "start");
  console.log(end, "end");

  const title = window.prompt("New Event name");

  if (title) {
    const EventData = {
      id: Math.floor(Math.random() * 10400122),
      title: title,
      endDate: end,
      startDate: start
    };
    console.log(EventData,"EventData")

    const existingNotificationData = localStorage.getItem("notification");
    const parsedData = existingNotificationData ? JSON.parse(existingNotificationData) : [];
    const all_calendarData = [...parsedData, EventData];

    storeNotificationData(all_calendarData)

    
    setEventsData([
      ...eventsData,
      {
        start,
        end,
        title
      }
    ]);

    getNotificationLocal()
  }
};

const updateEvents = () => {
  // Example: Modifying an event's title
  const updatedEvents = eventsData.map((event:any) => {
    if (event.title === "Event to Update") {
      return {
        ...event,
        title: "Updated Event Title",
      };
    }
    return event;
  });

  setEventsData(updatedEvents);
};

const CustomToolbar = () => (
  <div>
    <button onClick={updateEvents}>Update Events</button>
  </div>
);


  return (
    <div>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        view={viewCalendar}
        onView={setViewCalendar}
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
        date={date}
       onNavigate={(date) => setDate(date)}
  
      />
    </div>
  );
}
