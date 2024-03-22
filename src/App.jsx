import React, { useReducer } from 'react';
import BookingForm from './components/BookingForm.jsx';

const defaultTimes = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
];

function updateTimes(selectedDate) { 
    console.log('updating times for date', selectedDate);
    return defaultTimes;
}
function reducer(state, action) {
        switch (action.type){
        case 'UPDATE_TIMES':
            return updateTimes(action.payload);
        default:
            return state;
    }    
}  
 function initializeTimes(){

    return [...defaultTimes];
 }

function App() {
    const [availableTimes, dispatch] = useReducer(reducer, null, initializeTimes);
    return (
        <div>
            <h1>Book a table</h1>
            <BookingForm  availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
    );
}
export default App;
