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
  constructor(prop) {
    super(prop);
  }

  render() {
    return <button>{this.props.children}</button>;
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
      hotelId: undefined,
      roomTypeId: undefined,
      checkIn: new Date(),
      checkOut: dayAfterTomorrow,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  setEmployee = (employeeId) => {
    this.setState({
      employeeId: employeeId,
    });
  };

  /*  @TODO:
  1- Empleado
  2- Hotel
  3- RoomType
  4- Check in / out
  5- Confirmar */
  render() {
    return (
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
    );
  }
}

export default BookingForm;