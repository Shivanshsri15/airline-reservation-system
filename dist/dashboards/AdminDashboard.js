"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDashboard = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const Flight_1 = require("../models/Classes/Flight");
const adminDashboard = (flightSystem, loginSystem) => {
    let choice;
    do {
        console.log("");
        console.log("┌──────────────────────────────────────────────────────┐");
        console.log("│              A D M I N   D A S H B O A R D           │");
        console.log("├────┬─────────────────────────────────────────────────┤");
        console.log("│ 1. │ Add Flight                                      │");
        console.log("│ 2. │ View All Flights                                │");
        console.log("│ 3. │ Search Flight                                   │");
        console.log("│ 4. │ Delete Flight                                   │");
        console.log("│ 5. │ View Users                                      │");
        console.log("│ 6. │ Logout                                          │");
        console.log("└────┴─────────────────────────────────────────────────┘");
        choice = readline_sync_1.default.question("=====> Please enter your choice: ");
        switch (choice) {
            case "1":
                const flightId = readline_sync_1.default.question("-> Enter Flight ID: ");
                const source = readline_sync_1.default.question("-> Enter Source: ");
                const destination = readline_sync_1.default.question("-> Enter Destination: ");
                const departureDate = readline_sync_1.default.question("-> Enter Departure Date (YYYY-MM-DD): ");
                const price = parseFloat(readline_sync_1.default.question("-> Enter Price: "));
                const duration = parseInt(readline_sync_1.default.question("-> Enter Duration (in hours): "), 10);
                const newFlight = new Flight_1.Flight(flightId, source, destination, departureDate, price, duration);
                flightSystem.addFlight(newFlight);
                break;
            case "2":
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
            case "3":
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
            case "4":
                const delId = readline_sync_1.default.question("-> Enter Flight ID to delete: ");
                flightSystem.deleteFlight(delId);
                break;
            case "5":
                loginSystem.viewUsers();
                break;
            case "6":
                console.log("Logging out...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== "6");
};
exports.adminDashboard = adminDashboard;
