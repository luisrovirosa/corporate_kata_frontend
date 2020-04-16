class Booking {
    constructor(employeeId, hotelId, roomType, checkInDate, checkOutDate) {
        this.employeeId = employeeId;
        this.hotelId = hotelId;
        this.roomType = roomType;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.id = undefined;
    }
}

export default Booking;