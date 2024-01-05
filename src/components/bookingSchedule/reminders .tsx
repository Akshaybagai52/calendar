"use client";
import React, { useEffect, useState } from "react";
import { Calendar, Navigate, View, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { FeedbackBtn } from "../buttons/buttons";
import { FeedbackForm } from "../feedback/feedbackForm";
import { Ratings } from "../ratings/stars";
import { getApiWithId } from "@/utils/api";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const [eventsData, setEventsData] = useState<any>(events);
  const [viewCalendar, setViewCalendar] = useState<View>("month");
  const [searchTerm, setSearchTerm] = useState("");

  const [ShowFeedbackForm,setShowfeedbackform]=useState<boolean>(false)

  const [date, setDate] = useState(new Date());

  const handleSelect = ({ start, end }: any) => {
    const title = window.prompt("New Event name");
    var notifications = [];
    const EventData = {
      id: Math.floor(Math.random() * 10400122),
      title: title,
      endDate: end,
      startDate: start,
    };
    notifications.push(EventData);
    notifications = notifications.concat(
      JSON.parse(localStorage.getItem("notification") || "[]")
    );
    localStorage.setItem("notification", JSON.stringify(notifications));

    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
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
      setEventsData([{ title: "not found" }]);
    }
    setEventsData(filteredEvents);
  };


const handleClickFeedback=()=>{
  setShowfeedbackform(!ShowFeedbackForm)
}



useEffect(()=>{
  let user_email ="pradeep@gmail.com"
getApiWithId(user_email)
},[])


  return (
    <div className="reminders_main ">
      <div className="container">
        <div className="feedback m-0 float-right">
          <FeedbackBtn btnName="Feedback" pathName="feedback" OnClick={()=>handleClickFeedback()} />
        </div>
        <div className="ratings">
<Ratings/>
        </div>
        <div className={`${ ShowFeedbackForm ? 'block duration-150 ':' hidden'}  `}>
          <FeedbackForm setShowfeedbackform={setShowfeedbackform} />
        </div>
        
      </div>
      <div className="search w-[220px] h-10 rounded border mx-auto my-4 border-solid border-[grey] ">
        <input
          className="w-[220px] h-10 float-left text-[white] bg-transparent px-[5px] bg-[grey] rounded-[3px_0_0_3px] border-0"
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm.length > 2 ? (
          eventsData.length > 0 ? (
            <div className="relative z-[99]">
              {eventsData.map((deta: any, ind: number) => {
                return (
                  <li
                    key={ind}
                    className="bg-[whitesmoke] list-none pt-[10px] pl-[10px]"
                  >
                    {deta.title} {deta.start.toString()}
                  </li>
                );
              })}
            </div>
          ) : (
            <div className="text-[red]">Event not found.</div>
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
