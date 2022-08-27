import React, {useCallback, useState, useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from '@fullcalendar/interaction';


export default function Calendar(props) {
    return (
        <FullCalendar
        plugins ={[dayGridPlugin]}
        initialView = "dayGridMonth"
        events ={[
        {title: "仮免", start: "2022-08-31", end:"2022-08-31"},
        ]}
        />
        );
};
