import { FlightInterface } from "../models/FlightInterface";
import { FlightData } from "../data/defaultFlightData";
export class FlightSystem {
    private flights: FlightInterface[] = [];
    constructor() {
        this.flights = [...FlightData]
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
    
    bookSeat(flightId: string, seatNumber: string): void {
    const flight = this.flights.find(f => f.getFlightId() === flightId);
    if (!flight) {
        console.log(`Flight with ID ${flightId} not found.`);
        return;
    }
    const booked = (flight as any).bookSeat(flightId, seatNumber);
    if (booked) {
        console.log(`Seat ${seatNumber} booked successfully!`);
    } else {
        console.log(`Seat ${seatNumber} is already booked or does not exist.`);
    }
    }
    seachFlight(source: string, destination: string, departureDate: string): FlightInterface[] {    
        return this.flights.filter(flight => 
            flight.getSource().toLowerCase() === source.toLowerCase() &&
            flight.getDestination().toLowerCase() === destination.toLowerCase() &&
            flight.getDepartureDate() === departureDate
        );
    }
    deleteFlight(flightId: string): void {
        const index = this.flights.findIndex(f => f.getFlightId() === flightId);
        if (index === -1) {
            console.log(`Flight with ID ${flightId} not found.`);
            return;
        }
        this.flights.splice(index, 1);
        console.log(`Flight with ID ${flightId} deleted successfully.`);
    }
    
        
}