

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

moment.locale("en-GB");
const localizer = momentLocalizer(moment);


export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState<any>(events);
  const [viewCalendar, setViewCalendar] = useState<View>("month")
  const [searchTerm, setSearchTerm] = useState('');

  const [date, setDate] = useState(new Date());


  const handleSelect = ({ start, end }: any) => {
    console.log(start, "ooooop");
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
    <div>
      <div className='search w-[220px] h-10 rounded border mx-auto my-4 border-solid border-[grey]' >
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
                  <li key={ind}>
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
