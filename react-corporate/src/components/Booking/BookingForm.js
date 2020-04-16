import React, { Component } from 'react';
import BookingDates from './BookingDates';

class BookingForm extends Component {
  constructor(props) {
    super(props);
  }

  /*  @TODO:
  1- Empleado
  2-Hotel
  3- Check in / out
  4- Confirmar */
  render() {
    return (
      <>
        <h1>BookingForm</h1>
        <BookingDates></BookingDates>
      </>
    );
  }
}

export default BookingForm;
