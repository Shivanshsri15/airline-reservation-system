"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
class Flight {
    constructor(flightId, source, destination, departureDate, price, duration) {
        this.flightId = flightId;
        this.source = source;
        this.destination = destination;
        this.departureDate = departureDate;
        this.price = price;
        this.duration = duration;
        this.seats = [];
        this.rows = 5;
        this.cols = 6;
        this.seats = this.generateSeatLayout();
    }
    generateSeatLayout() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const seats = [];
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                row.push({
                    seatNumber: `${i + 1}${alphabet[j]}`, // e.g., "1A"
                    isBooked: false
                });
            }
            seats.push(row);
        }
        return seats;
    }
    getFlightId() {
        return this.flightId;
    }
    getSource() {
        return this.source;
    }
    getDestination() {
        return this.destination;
    }
    getDepartureDate() {
        return this.departureDate;
    }
    getPrice() {
        return this.price;
    }
    getDuration() {
        return this.duration;
    }
    displaySeatMap() {
        console.log("\n Seat Map (XX = Booked)");
        this.seats.forEach(row => {
            const rowDisplay = row.map(seat => seat.isBooked ? "--  " : seat.seatNumber.padEnd(4)).join(" ");
            console.log(rowDisplay);
        });
    }
    bookSeat(flightId, seatToBeBooked) {
        if (this.flightId !== flightId) {
            console.log(`Flight ID ${flightId} does not match this flight.`);
            return false;
        }
        for (let row of this.seats) {
            for (let seat of row) {
                if (seat.seatNumber === seatToBeBooked) {
                    if (seat.isBooked) {
                        return false;
                    }
                    seat.isBooked = true;
                    seat.seatNumber = "--";
                    return true;
                }
            }
        }
        return false;
    }
}
exports.Flight = Flight;
