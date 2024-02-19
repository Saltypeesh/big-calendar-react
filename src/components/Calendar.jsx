import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import { EVENTS } from "./CustomCalendar.constants";
import moment from "moment";
import "./index.css";

const localizer = momentLocalizer(moment);

export default function Calendar(props) {
  return (
    <BigCalendar
      {...props}
      // events={EVENTS}
      localizer={localizer}
      defaultDate={"2022-10-10"}
      defaultView={"week"}
      max={moment("2022-10-10T16:00:00").toDate()}
      min={moment("2022-10-10T08:00:00").toDate()}
    />
  );
}
