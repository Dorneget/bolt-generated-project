import React, { useState, useEffect } from 'react';

    function App() {
      const [date, setDate] = useState('');
      const [dayOfWeek, setDayOfWeek] = useState('');

      useEffect(() => {
        if (date) {
          const selectedDate = new Date(date);
          const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const day = days[selectedDate.getDay()];
          setDayOfWeek(day);
        } else {
          setDayOfWeek('');
        }
      }, [date]);

      return (
        <div className="container">
          <h1>Day of the Week</h1>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {dayOfWeek && <div className="result">{dayOfWeek}</div>}
        </div>
      );
    }

    export default App;
