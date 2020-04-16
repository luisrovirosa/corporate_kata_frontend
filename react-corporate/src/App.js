import React, {useState} from 'react';
import './App.css';
import {BookingForm, BookingConfirmation} from './components/Booking/BookingForm';
import bookHotelRoom from './useCases/BookHotelRoom';


function BookingApp() {
  const [booking, setBooking] = useState(undefined);

  const processForm = (booking) => {
    setBooking(bookHotelRoom(booking));
  }

  return (
    booking
      ? <BookingConfirmation bookingId={booking.id} />
      : <BookingForm processForm={processForm} />
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">Welcome to Corporate Kata UI</header>
      <BookingApp/>
    </div>
  );
}

export default App;
