import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Calendar from "../Calendar";
import { EVENTS } from "../CustomCalendar.constants";
import AppointmentEvent from "./AppointmentEvent";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import BlockoutEvent from "./BlockoutEvent";

const DnDCalendar = withDragAndDrop(Calendar);

function CustomCalendar(props) {
  const components = {
    event: ({ event }) => {
      const data = event?.data;
      if (data?.appointment)
        return <AppointmentEvent appointment={data?.appointment} />;

      if (data?.blockout) return <BlockoutEvent blockout={data?.blockout} />;

      return null;
    },
  };

  const { appointments, blockouts } = EVENTS.reduce(
    (acc, event) => {
      if (event?.data?.appointment) acc.appointments.push(event);

      if (event?.data?.blockout) acc.blockouts.push(event);

      return acc;
    },
    { appointments: [], blockouts: [] }
  );

  return (
    <DnDCalendar
      components={components}
      // events={appointments}
      // backgroundEvents={blockouts}
      resizable
      {...props}
    />
  );
}

export default CustomCalendar;
