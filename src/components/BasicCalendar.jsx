import moment from "moment";
import Calendar from "./Calendar";

const events = [
  {
    start: moment("2024-02-19T11:00:00").toDate(),
    end: moment("2024-02-19T12:30:00").toDate(),
    title: "MRI Registration",
  },
  {
    start: moment("2024-02-19T14:00:00").toDate(),
    end: moment("2024-02-19T15:30:00").toDate(),
    title: "ENT Appointment",
  },
];

function BasicCalendar() {
  return <Calendar events={events} />;
}

export default BasicCalendar;
