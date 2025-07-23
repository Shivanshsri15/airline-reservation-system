"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passengerDashboard = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const passengerDashboard = (flightSystem, loginSystem, passenger) => {
    let choice;
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
        choice = readline_sync_1.default.question("=====> Please enter your choice: ");
        switch (choice) {
            case "1":
                const flights = flightSystem.getFlights();
                if (flights.length === 0) {
                    console.log("No flights available.");
                }
                else {
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
                const src = readline_sync_1.default.question("-> Enter Source: ");
                const dest = readline_sync_1.default.question("-> Enter Destination: ");
                const depDate = readline_sync_1.default.question("-> Enter Departure Date (YYYY-MM-DD): ");
                const foundFlights = flightSystem.seachFlight(src, dest, depDate);
                if (foundFlights.length === 0) {
                    console.log("No flights found for the given criteria.");
                }
                else {
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
                const bookFlightId = readline_sync_1.default.question("-> Enter Flight ID to book: ");
                const seatNumber = readline_sync_1.default.question("-> Enter Seat Number (e.g., 1A): ");
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
                }
                else {
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
    } while (choice !== "5");
};
exports.passengerDashboard = passengerDashboard;
