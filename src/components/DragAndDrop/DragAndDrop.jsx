import { useState } from "react";
import { EVENTS } from "../CustomCalendar.constants";
import CustomCalendar from "../CustomerCalendar/CustomCalendar";
import { useCallback } from "react";

function DragAndDrop() {
  const [events, setEvents] = useState(EVENTS);

  const onChangeEventTime = useCallback((start, end, appointmentId) => {
    console.log("onEventDrop", { start, end, appointmentId });

    setEvents((prevEvents) => {
      return prevEvents.map((event) =>
        event?.data?.appointment?.id === appointmentId
          ? { ...event, start, end }
          : event
      );
    });
  }, []);

  console.log(events);

  return (
    <CustomCalendar
      resizable
      onEventDrop={({ start, end, event }) => {
        onChangeEventTime(start, end, event?.data?.appointment?.id);
      }}
      onEventResize={({ start, end, event }) => {
        onChangeEventTime(start, end, event?.data?.appointment?.id);
      }}
      events={events}
    />
  );
}

export default DragAndDrop;
