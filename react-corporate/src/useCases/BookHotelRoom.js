import BookingRepository from '../infrastructure/BookingRepository';

export default function bookHotelRoom(booking) {
    return (new BookingRepository()).save(booking);
}
