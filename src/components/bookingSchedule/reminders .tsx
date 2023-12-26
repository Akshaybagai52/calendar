
// import React from "react";
// import { Calendar } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// // import dayjsLocalizer from 'react-big-calendar/lib/localizers/dayjs';
// import dayjs from 'dayjs';

// // const localizer = dayjsLocalizer(dayjs);

// export const Reminders = () => {
// const myEventsList=()=>{

// }
//  return (
//    <div className="-[65px]">
//      <Calendar
//        localizer={localizer}
//        events={myEventsList}
//        startAccessor="start"
//        endAccessor="end"
//        style={{ height: 500 }}
//      />
//    </div>
//  );
// };


"use client"
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState<any>(events);

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
    <div className="App">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventsData}
        style={{ height: "100vh" }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={handleSelect}
      />
    </div>
  );
}
