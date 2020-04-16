import React, { Component } from 'react';
import BookingDates from './BookingDates';
import RoomType from './RoomType';
import EmployeeSelector from './EmployeeSelector';

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
    )
  }
}

class BookingForm extends Component {
  constructor(props) {
    super(props);

    const dayAfterTomorrow = new Date();
    const numberOfDaysToAdd = 2;
    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + numberOfDaysToAdd);

    this.state = {
      employeeId: 'hugo',
      hotelId: 'FOUR_SEASONS_HAWAI_BEACH',
      roomTypeId: 'DOUBLE',
      checkIn: new Date(),
      checkOut: dayAfterTomorrow,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.processForm(
      this.state.employeeId,
      this.state.hotelId,
      this.state.roomTypeId,
      this.state.checkIn,
      this.state.checkOut
    );
  };

  setEmployee = (employeeId) => {
    this.setState({
      employeeId: employeeId,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>BookingForm</h1>
          <div>
            <EmployeeSelector
              value={this.state.employeeId}
              onChange={this.setEmployee}
            ></EmployeeSelector>
          </div>
          <div>
            <HotelSelector></HotelSelector>
          </div>
          <div>
            <RoomType></RoomType>
          </div>
          <div>
            <BookingDates></BookingDates>
          </div>
          <Button>Book</Button>
        </form>
      </>
    );
  }
}

export {BookingForm, BookingConfirmation};
