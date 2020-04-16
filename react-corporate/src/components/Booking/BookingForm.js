import React, { Component } from 'react';
import BookingDates from './BookingDates';
import RoomType from './RoomType';
import EmployeeSelector from './EmployeeSelector';

class HotelSelector extends Component {
  render() {
    return (
      <select>
        <option value="121221" selected>
          Four Seasons Hawai beach
        </option>
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
  /*  @TODO:
  1- Empleado
  2- Hotel
  3- RoomType
  4- Check in / out
  5- Confirmar */
  render() {
    return (
      <form>
        <h1>BookingForm</h1>
        <div>
          <EmployeeSelector></EmployeeSelector>
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
