import React, { Component } from 'react';
import BookingDatesInput from './BookingDatesInput';
import Booking from '../../domain/Booking';
import RoomTypeSelector from './RoomTypeSelector';
import EmployeeSelector from './EmployeeSelector';
import BookingDates from '../../domain/BookingDates';
import { update } from '../../domain/behavior';
import { updateBookingDates } from '../../domain/bookingDatesBehavior';

class HotelSelector extends Component {
  render() {
    return (
      <select defaultValue="121221">
        <option value="121221">Four Seasons Hawai beach</option>
      </select>
    );
  }
}

class Button extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}

class BookingConfirmation extends Component {
  render() {
    return (
      <>
        <h1>Tu reserva se ha confirmado</h1>
        <p>Localizador de tu reserva: {this.props.bookingId}</p>
      </>
    );
  }
}

class BookingForm extends Component {
  constructor(props) {
    super(props);

    const dayAfterTomorrow = new Date();
    const numberOfDaysToAdd = 2;
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + numberOfDaysToAdd);

    this.state = {
      booking: Booking(
        'hugo',
        'FOUR_SEASONS_HAWAI_BEACH',
        'DOUBLE',
        BookingDates(new Date(), dayAfterTomorrow)
      ),
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.processForm(this.state.booking);
  };

  setEmployee = (employeeId) => {
    const newBooking = update(this.state.booking, { employeeId });
    this.setState({ booking: newBooking });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>BookingForm</h1>
          <div>
            <EmployeeSelector
              value={this.state.booking.employeeId}
              onChange={this.setEmployee}
            ></EmployeeSelector>
          </div>
          <div>
            <HotelSelector></HotelSelector>
          </div>
          <div>
            <RoomTypeSelector></RoomTypeSelector>
          </div>
          <div>
            <BookingDatesInput
              value={this.state.booking.bookingDates}
              onChange={(bookingDates) => {
                const newBookingDates = update(
                  this.state.booking.bookingDates,
                  { bookingDates }
                );
                const newBooking = update(this.state.booking, { bookingDates });

                this.setState({ booking: newBooking });
              }}
            ></BookingDatesInput>
          </div>
          <Button>Book</Button>
        </form>

        <p>Empleado: {this.state.booking.employeeId}</p>
        <p>CheckIn: {this.state.booking.bookingDates.checkIn.toString()}</p>
        <p>CheckOut: {this.state.booking.bookingDates.checkOut.toString()}</p>
      </>
    );
  }
}

export { BookingForm, BookingConfirmation };
