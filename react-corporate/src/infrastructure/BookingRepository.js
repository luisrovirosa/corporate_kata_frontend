import Booking from '../domain/Booking';

const _fetch = (url, booking) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      booking.id = 'AAYass';
      resolve(booking);
    }, 200);
  });
}

class BookingRepository {
  save(booking) {
    return _fetch('/api/xxx', booking);
  }
}

export default BookingRepository;