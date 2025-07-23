import readlineSync from "readline-sync";
import { FlightSystem } from "../systems/FlightSystem";
import { LoginSystem } from "../systems/LoginSystem";
import { Passenger } from "../models/Classes/Passenger";

export const passengerDashboard = (
    flightSystem: FlightSystem,
    loginSystem: LoginSystem,
    passenger: Passenger
): void => {
    let choice: string;

    do {
        console.log("");
        console.log("┌──────────────────────────────────────────────────────┐");
        console.log("│           P A S S E N G E R   D A S H B O A R D      │");
        console.log("├────┬─────────────────────────────────────────────────┤");
        console.log("│ 1. │ View All Flights                                │");
        console.log("│ 2. │ Search Flight                                   │");
        console.log("│ 3. │ Book Seat                                       │");
        console.log("│ 4. │ View My Booked Flights                          │");
        console.log("│ 5. │ Logout                                          │");
        console.log("└────┴─────────────────────────────────────────────────┘");
        choice = readlineSync.question("=====> Please enter your choice: ");

        switch (choice) {
            case "1":
                const flights = flightSystem.getFlights();
                if (flights.length === 0) {
                    console.log("No flights available.");
                } else {
                    const tableData = flights.map((flight, idx) => ({
                        "#": idx + 1,
                        "Flight ID": flight.getFlightId(),
                        "Source": flight.getSource(),
                        "Destination": flight.getDestination(),
                        "Departure Date": flight.getDepartureDate(),
                        "Price (₹)": flight.getPrice(),
                        "Duration (hrs)": flight.getDuration()
                    }));
                    console.table(tableData);
                }
                break;

            case "2":
                const src = readlineSync.question("-> Enter Source: ");
                const dest = readlineSync.question("-> Enter Destination: ");
                const depDate = readlineSync.question("-> Enter Departure Date (YYYY-MM-DD): ");
                const foundFlights = flightSystem.seachFlight(src, dest, depDate);
                if (foundFlights.length === 0) {
                    console.log("No flights found for the given criteria.");
                } else {
                    const tableData = foundFlights.map((flight, idx) => ({
                        "#": idx + 1,
                        "Flight ID": flight.getFlightId(),
                        "Source": flight.getSource(),
                        "Destination": flight.getDestination(),
                        "Departure Date": flight.getDepartureDate(),
                        "Price (₹)": flight.getPrice(),
                        "Duration (hrs)": flight.getDuration()
                    }));
                    console.table(tableData);
                }
                break;

            case "3":
                const bookFlightId = readlineSync.question("-> Enter Flight ID to book: ");
                const seatNumber = readlineSync.question("-> Enter Seat Number (e.g., 1A): ");
                flightSystem.bookSeat(bookFlightId, seatNumber);
                const bookedFlight = flightSystem.getFlights().find(flight => flight.getFlightId() === bookFlightId);
                if (bookedFlight) {
                    passenger.addFlightToUser(bookedFlight);
                    console.log("┌──────────────────────────────────────────────┐");
                    console.log("│                S U C C E S S                │");
                    console.log("├──────────────────────────────────────────────┤");
                    console.log(`│ Flight ${bookFlightId} booked successfully. │`);
                    console.log("└──────────────────────────────────────────────┘");
                }
                break;

            case "4":
                const bookedFlights = passenger.getUserFlights();
                if (bookedFlights.length === 0) {
                    console.log("You have not booked any flights yet.");
                } else {
                    const tableData = bookedFlights.map((flight, idx) => ({
                        "#": idx + 1,
                        "Flight ID": flight.getFlightId(),
                        "Source": flight.getSource(),
                        "Destination": flight.getDestination(),
                        "Departure Date": flight.getDepartureDate(),
                        "Price (₹)": flight.getPrice(),
                        "Duration (hrs)": flight.getDuration()
                    }));
                    console.table(tableData);
                }
                break;

            case "5":
                console.log("┌──────────────────────────────────────────────┐");
                console.log("│           L O G G I N G   O U T              │");
                console.log("└──────────────────────────────────────────────┘");
                break;

            default:
                console.log("┌──────────────────────────────────────────────┐");
                console.log("│           Invalid choice. Please try again.  │");
                console.log("└──────────────────────────────────────────────┘");
        }
    } while (choice !== "5")
};