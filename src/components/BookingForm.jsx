import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch}) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

  
    const handleDateChange = (event) => {
        const newDate= event.target.value;
        setSelectedDate(newDate);
        dispatch({type: 'UPDATE_TIMES', payload: newDate});
    };

    const handleTimeChange = (event) => {
       setSelectedTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       alert(`Your booking for ${selectedDate} at ${selectedTime} has been confirmed`)
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="time">Time:</label>
                <select
                    id="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    required
                >
                    <option value="">Select a time</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Book Table</button>
        </form>
    );
}
export default BookingForm;
