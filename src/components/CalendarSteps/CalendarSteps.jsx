import CustomCalendar from "../CustomerCalendar/CustomCalendar";

function CalendarSteps() {
  return (
    <div>
      <CustomCalendar step={10} timeslots={6} />
    </div>
  );
}

export default CalendarSteps;
