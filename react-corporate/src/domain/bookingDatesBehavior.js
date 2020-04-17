export const updateBookingDates = (bookingDates, bookingDatesReplacement) => {
  return {
    ...bookingDates,
    ...bookingDatesReplacement,
  };
};
