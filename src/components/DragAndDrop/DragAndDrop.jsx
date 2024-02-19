import { useState, useCallback } from "react";
import { EVENTS } from "../../constants";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

import { Calendar as BigCalendar } from "react-big-calendar";
import { props } from "./props";
import "./index.css";
import { Box, Flex } from "@chakra-ui/react";
import AppointmentEvent from "../AppointmentEvent/AppointmentEvent";
import OutsideEvent from "../OutsideEvent/OutsideEvent";

const DnDCalendar = withDragAndDrop(BigCalendar);

function DragAndDrop() {
  const [events, setEvents] = useState(EVENTS);

  const onChangeEventTime = useCallback(({ event, start, end, resourceId }) => {
    // console.log("onEventDrop", { event, start, end, resourceId });

    setEvents((prevEvents) => {
      return prevEvents.map((prevEvent) =>
        prevEvent?.data?.appointment?.id === event?.data?.appointment?.id
          ? { ...event, start, end, resourceId }
          : prevEvent
      );
    });
  }, []);

  const [draggedEvent, setDraggedEvent] = useState();

  const onDroppedFromOutside = useCallback(
    ({ start, end, resource }) => {
      if (draggedEvent === "undroppable") return;
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          start,
          end,
          resourceId: resource,
          data: { appointment: draggedEvent },
          isDraggable: true,
          isResizable: true,
        },
      ]);
    },
    [draggedEvent]
  );

  const dummyAppointment = {
    id: 3,
    status: "CI",
    location: "Connecticut",
    resource: "Alex Hales",
    address: "1241 E Main St\n Stamford\n CT 06902\n United States",
  };

  const resources = [
    { id: 1, title: "Dr Graff" },
    { id: 2, title: "Dr Alex" },
    { id: 3, title: "Dr Michelle" },
  ];

  return (
    <Flex p={2} gap={4} height="100%" width="100%" direction={"column"}>
      <Box>
        <Flex gap={4}>
          <Box
            width={200}
            cursor="pointer"
            onDragStart={() => setDraggedEvent(dummyAppointment)}
            draggable
          >
            <AppointmentEvent appointment={dummyAppointment} />
          </Box>
          <OutsideEvent
            onDragStart={() => setDraggedEvent("undroppable")}
            draggable
          >
            Draggable but not for calendar.
          </OutsideEvent>
        </Flex>
      </Box>

      <Box flex="1" overflow="auto" width="100%">
        <DnDCalendar
          {...props}
          events={events}
          resources={resources}
          draggableAccessor={"isDraggable"}
          resizableAccessor={"isResizable"}
          onEventDrop={onChangeEventTime}
          onEventResize={onChangeEventTime}
          onDropFromOutside={onDroppedFromOutside}
        />
      </Box>
    </Flex>
  );
}

export default DragAndDrop;
