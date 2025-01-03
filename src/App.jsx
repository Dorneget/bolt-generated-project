import React, { useState, useEffect } from 'react';
    import { TextField, Typography, Container } from '@mui/material';

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
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Day of the Week
          </Typography>
          <TextField
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          {dayOfWeek && (
            <Typography variant="h6" align="center" style={{ marginTop: '20px' }}>
              {dayOfWeek}
            </Typography>
          )}
        </Container>
      );
    }

    export default App;
