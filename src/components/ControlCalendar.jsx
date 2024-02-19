import Calendar from "./Calendar";
import moment from "moment";

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

function ControlCalendar() {
  return (
    <Calendar
      //   defaultView={"week"}
      //   views={["month", "week", "day"]}
      //   date={moment("2022-10-10").toDate()}
      //   toolbar={false}

      events={events}
      min={moment("2024-01-12T08:30:00").toDate()}
      max={moment("2024-02-19T18:30:00").toDate()}
    />
  );
}

export default ControlCalendar;
