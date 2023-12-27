

"use client"
import React, { useState } from 'react';
import { Calendar, Navigate, View, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);


export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState<any>(events);
  const [viewCalendar, setViewCalendar] = useState<View>("month")

  const [date, setDate] = useState(new Date());

  const handleSelect = ({ start, end }:any) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title
        }
      ]);
  };

 


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
