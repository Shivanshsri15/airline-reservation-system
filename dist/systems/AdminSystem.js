"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSystem = void 0;
const defaultFlightData_1 = require("../data/defaultFlightData");
class AdminSystem {
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
}
exports.AdminSystem = AdminSystem;
