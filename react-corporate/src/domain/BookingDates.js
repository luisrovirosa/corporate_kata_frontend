const BookingDates = (checkIn, checkOut) => {
  validate(checkIn, checkOut);
  return {
    checkIn,
    checkOut,
  };
};

const validate = (checkIn, checkOut) => {
  if (checkIn > checkOut) {
    throw new Error('checkIn is after checkOut');
  }
};

export default BookingDates;
