export interface FlightInterface {
  getFlightId(): string;
  getSource(): string;
  getDestination(): string;
  getDepartureDate(): string;
  getPrice(): number;
  getDuration(): number;
  displaySeatMap(): void;
  bookSeat(flightId:string,seatNumber: string): void;
}
