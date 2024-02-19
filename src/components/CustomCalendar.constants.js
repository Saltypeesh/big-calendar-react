import moment from "moment";

export const AppointmentStatusCode = {
  Pending: "P",
  CheckedIn: "CI",
};

export const EVENT_STATUS_COLORS = {
  P: "#bee2fa",
  CI: "#c7edca",
};

export const EVENTS = [
  {
    start: moment("2022-10-10T10:00:00").toDate(),
    end: moment("2022-10-10T11:00:00").toDate(),
    data: {
      appointment: {
        id: 1,
        status: "P",
        location: "New York",
        resource: "Dr Alex",
        address: "Building 5\nStreet 44\nNear Express Highway\nNew York",
      },
    },
    isDraggable: true,
  },
  {
    start: moment("2022-10-10T12:00:00").toDate(),
    end: moment("2022-10-10T13:00:00").toDate(),
    data: {
      appointment: {
        id: 2,
        status: "CI",
        location: "Washington",
        resource: "Dr David",
        address: "Block 1\nStreet 32\nLong Island\nNew York",
      },
    },
    isDraggable: false,
  },
  {
    start: moment("2022-10-12T09:00:00").toDate(),
    end: moment("2022-10-12T14:59:59"),
    data: {
      blockout: {
        id: 1,
        name: "Christmas Holidays",
      },
    },
  },
];
