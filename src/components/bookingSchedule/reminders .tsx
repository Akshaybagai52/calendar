

"use client"
import React, { useState } from 'react';
import { Calendar, Navigate, View, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { title } from 'process';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getNotificationLocal } from '@/lib/getNotification';


moment.locale("en-GB");
const localizer = momentLocalizer(moment);


export default function ReactBigCalendar() {
  const dispatch = useAppDispatch();
  const storeTheme = useAppSelector((state) => state.theme);



  const [eventsData, setEventsData] = useState<any>(events);
  const [viewCalendar, setViewCalendar] = useState<View>("month")
  const [searchTerm, setSearchTerm] = useState('');

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


  const handleSearch = (e: any) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filteredEvents = events.filter((event) =>
      event.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(filteredEvents, "filteredEvents");
    if (!filteredEvents) {
      setEventsData([{ title: "not found" }])
    }
    setEventsData(filteredEvents);
  };

  return (
    <div className=''>
      <div className='search w-[220px] h-10 rounded border mx-auto my-4 border-solid border-[grey] ' >
        <input
          className="w-[220px] h-10 float-left text-[#ccc] bg-transparent px-[5px]  rounded-[3px_0_0_3px] border-0"
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm.length > 2 ? (
          eventsData.length > 0 ? (
            <div>
              {eventsData.map((deta: any, ind: number) => {
                return (
                  <li key={ind} className='bg-slate-600'>
                    {deta.title} {deta.start.toString()}
                  </li>
                );
              })}
            </div>
          ) : (
            <div className='text-[red]'>Event not found.</div>
          )
        ) : (
          searchTerm.length <= 2 && <div></div>
        )}

      </div>
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
