import React, { Component } from 'react';

class BookingDates extends Component {
  render() {
    return (
      <section>
        <label>Check-in</label>
        <input type="date" defaultValue="2020-10-20" />
        <label>Check-out</label>
        <input type="date" defaultValue="2020-10-22" />
      </section>
    );
  }
}

export default BookingDates;
