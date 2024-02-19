// import Calendar from "./components/Calendar";
import { ChakraProvider } from "@chakra-ui/react";
// import CustomCalendar from "./components/CustomerCalendar/CustomCalendar";
// import CalendarSteps from "./components/CalendarSteps/CalendarSteps";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";

function App() {
  return (
    <ChakraProvider>
      <div style={{ height: "95vh" }}>
        {/* <Calendar /> */}
        {/* <CustomCalendar /> */}
        {/* <CalendarSteps /> */}
        <DragAndDrop />
      </div>
    </ChakraProvider>
  );
}

export default App;
