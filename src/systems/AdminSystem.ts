import { FlightData } from "../data/defaultFlightData";
import { FlightInterface } from "../models/FlightInterface";

export class AdminSystem {
    private flights: FlightInterface[] = [];
    constructor() {
        this.flights = [...FlightData];
    }
    addFlight(flight:FlightInterface): void {
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
    getFlights(): FlightInterface[] {
        return this.flights;
    }
}