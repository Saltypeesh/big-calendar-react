import moment from "moment";
import Calendar from "./Calendar";

const events = [
  {
    start: moment("2024-02-19T11:00:00").toDate(),
    end: moment("2024-02-19T12:30:00").toDate(),
    title: "MRI Registration",
    data: {
      type: "Reg",
    },
  },
  {
    start: moment("2024-02-19T14:00:00").toDate(),
    end: moment("2024-02-19T15:30:00").toDate(),
    title: "ENT Appointment",
    data: {
      type: "App",
    },
  },
];

const components = {
  event: (props) => {
    const eventType = props?.event?.data?.type;
    switch (eventType) {
      case "Reg":
        return (
          <div style={{ background: "yellow", color: "white", height: "100%" }}>
            {props.title}
          </div>
        );
      case "App":
        return (
          <div
            style={{ background: "lightgreen", color: "white", height: "100%" }}
          >
            {props.title}
          </div>
        );
      default:
        return null;
    }
  },
};

function AdvancedCalendar() {
  return <Calendar events={events} components={components} />;
}

export default AdvancedCalendar;
