"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSystem = void 0;
const defaultFlightData_1 = require("../data/defaultFlightData");
class FlightSystem {
    constructor() {
        this.flights = [];
        this.flights = [...defaultFlightData_1.FlightData];
    }
    addFlight(flight) {
        const exists = this.flights.find(f => f.getFlightId() === flight.getFlightId());
        if (exists) {
            console.log("=========================================");
            console.log("||             W A R N I N G           ||");
            console.log("=========================================");
            console.log("|| Flight ID already exists.           ||");
            console.log("|| Please choose a different one.      ||");
            console.log("=========================================");
            return;
        }
        this.flights.push(flight);
        console.log("=========================================");
        console.log("||             S U C C E S S           ||");
        console.log("=========================================");
        console.log(`|| Flight ${flight.getFlightId()} added successfully. ||`);
        console.log("=========================================");
    }
    getFlights() {
        return this.flights;
    }
    bookSeat(flightId, seatNumber) {
        const flight = this.flights.find(f => f.getFlightId() === flightId);
        if (!flight) {
            console.log(`Flight with ID ${flightId} not found.`);
            return;
        }
        const booked = flight.bookSeat(flightId, seatNumber);
        if (booked) {
            console.log(`Seat ${seatNumber} booked successfully!`);
        }
        else {
            console.log(`Seat ${seatNumber} is already booked or does not exist.`);
        }
    }
    seachFlight(source, destination, departureDate) {
        return this.flights.filter(flight => flight.getSource().toLowerCase() === source.toLowerCase() &&
            flight.getDestination().toLowerCase() === destination.toLowerCase() &&
            flight.getDepartureDate() === departureDate);
    }
    deleteFlight(flightId) {
        const index = this.flights.findIndex(f => f.getFlightId() === flightId);
        if (index === -1) {
            console.log(`Flight with ID ${flightId} not found.`);
            return;
        }
        this.flights.splice(index, 1);
        console.log(`Flight with ID ${flightId} deleted successfully.`);
    }
}
exports.FlightSystem = FlightSystem;
