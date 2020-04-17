import React, { Component } from 'react';

class BookingDates extends Component {
  formatDate(date) {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  render() {
    return (
      <section>
        <label>Check-in</label>
        <input type="date" defaultValue={this.formatDate(this.props.checkIn)} />
        <label>Check-out</label>
        <input
          type="date"
          defaultValue={this.formatDate(this.props.checkOut)}
        />
      </section>
    );
  }
}

export default BookingDates;
