class Booking {
  constructor(employeeId, hotelId, roomType, bookingDates) {
    this.id = undefined;
    this.employeeId = employeeId;
    this.hotelId = hotelId;
    this.roomType = roomType;
    this.bookingDates = bookingDates;
  }
}

export default Booking;
