import AdvancedCalendar from "./components/AdvancedCalendar";
import BasicCalendar from "./components/BasicCalendar";
import ControlCalendar from "./components/ControlCalendar";
import CustomizingCalendar from "./components/CustomizingCalendar";

function App() {
  return (
    <div style={{ height: "95vh" }}>
      <BasicCalendar />
      <ControlCalendar />
      <CustomizingCalendar />
      <AdvancedCalendar />
    </div>
  );
}

export default App;
