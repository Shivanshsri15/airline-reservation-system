import { FlightInterface } from "../FlightInterface";
import { SeatInterface } from "../Seat";

export class Flight implements FlightInterface {
    private seats: SeatInterface[][] = [];
    readonly rows = 5;
    readonly cols = 6;
    constructor(
        private flightId: string,
        private source: string,
        private destination: string,
        private departureDate: string,
        private price: number,
        private duration: number,        
    ) {
        this.seats = this.generateSeatLayout();
    }
 
    private generateSeatLayout(): SeatInterface[][] {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const seats: SeatInterface[][] = [];
        for (let i = 0; i < this.rows; i++) {
            const row: SeatInterface[] = [];
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
   
    getFlightId(): string {
        return this.flightId;
    }
    getSource(): string {
        return this.source;
    }
     getDestination(): string {
        return this.destination;
    }
     getDepartureDate(): string {
        return this.departureDate;
    }
     getPrice(): number {
        return this.price;
    }
     getDuration(): number {
        return this.duration;
    }
    displaySeatMap(): void {
    console.log("\n Seat Map (XX = Booked)");
    this.seats.forEach(row => {
      const rowDisplay = row.map(seat =>
        seat.isBooked ? "XX  " : seat.seatNumber.padEnd(4)
      ).join(" ");
      console.log(rowDisplay);
    });
    }
    
}