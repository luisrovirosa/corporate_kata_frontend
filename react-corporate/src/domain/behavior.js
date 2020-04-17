export const update = (booking: Booking, bookingReplacement) => {
  return {
    ...booking,
    ...bookingReplacement,
  };
};
