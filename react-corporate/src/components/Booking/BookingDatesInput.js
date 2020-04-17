import React, { Component } from 'react';
import BookingDates from '../../domain/BookingDates';

class BookingDatesInput extends Component {
  formatDate(date) {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  parseDate(stringDate) {
    return new Date(stringDate);
  }

  handlerCheckIn = (event) => {
    this.props.onChange(
      BookingDates(
        this.parseDate(event.target.value),
        this.props.value.checkOut
      )
    );
  };

  handlerCheckOut = (event) => {
    this.props.onChange(
      BookingDates(this.props.value.checkIn, this.parseDate(event.target.value))
    );
  };

  render() {
    return (
      <section>
        <label>Check-in</label>
        <input
          type="date"
          value={this.formatDate(this.props.value.checkIn)}
          onChange={this.handlerCheckIn}
        />
        <label>Check-out</label>
        <input
          type="date"
          value={this.formatDate(this.props.value.checkOut)}
          min={this.formatDate(this.props.value.checkIn)}
          onChange={this.handlerCheckOut}
        />
      </section>
    );
  }
}

export default BookingDatesInput;
