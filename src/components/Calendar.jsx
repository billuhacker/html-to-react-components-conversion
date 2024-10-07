import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="p-4">
      <h5 className="text-lg font-semibold mb-4">Calendar</h5>
      <Calendar
        onChange={onChange}
        value={date}
        className="rounded-lg shadow-md"
      />
      <div className="mt-4">
        <p className="text-gray-700">Selected Date: {date.toDateString()}</p>
      </div>
    </div>
  );
};

export default MyCalendar;
