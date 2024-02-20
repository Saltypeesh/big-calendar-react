/* eslint-disable react/prop-types */
import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import AppointmentEvent from "./AppointmentEvent";
// import { EVENTS } from "./Calendar.constants";
import { useAppointments } from "../requests";
import "./index.css";

const localizer = momentLocalizer(moment);

const initProps = {
  localizer: localizer,
  defaultDate: "2022-10-10",
  defaultView: Views.DAY,
  max: moment("2022-10-10T16:00:00").toDate(),
  min: moment("2022-10-10T08:00:00").toDate(),
  step: 15,
  timeslots: 4,
};

const DndCalendar = withDragAndDrop(BigCalendar);

export const Calendar = ({ onShowAppointmentView }) => {
  const components = {
    event: ({ event }) => {
      const data = event?.data;
      console.log("we here");
      if (data?.appointment)
        return (
          <AppointmentEvent
            appointment={data?.appointment}
            onDoubleClick={onShowAppointmentView}
          />
        );

      return null;
    },
  };

  const { data } = useAppointments();

  const appointments = data?.map((appointment) => ({
    start: new Date(appointment.start),
    end: new Date(appointment.end),
    data: { appointment },
  }));

  return (
    <DndCalendar
      onSelectSlot={({ start, end }) => {
        onShowAppointmentView({ start, end });
      }}
      onDoubleClickEvent={(event) => {
        const appointment = event?.data?.appointment;
        appointment && onShowAppointmentView(appointment);
      }}
      events={appointments}
      style={{ width: "100%" }}
      components={components}
      selectable
      {...initProps}
    />
  );
};
