// import Calendar from "./components/Calendar";
import { ChakraProvider } from "@chakra-ui/react";
// import CustomCalendar from "./components/CustomerCalendar/CustomCalendar";
// import CalendarSteps from "./components/CalendarSteps/CalendarSteps";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CalendarView from "./components/CalendarView/CalendarView";

function App() {
  return (
    <ChakraProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ height: "95vh" }}>
          <CalendarView />
        </div>
      </LocalizationProvider>
    </ChakraProvider>
  );
}

export default App;
