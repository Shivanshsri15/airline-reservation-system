"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDashboard = void 0;
const AdminSystem_1 = require("../systems/AdminSystem");
const readline_sync_1 = __importDefault(require("readline-sync"));
const Flight_1 = require("../models/Classes/Flight");
const flightSystem = new AdminSystem_1.AdminSystem();
const adminDashboard = (loginSystem) => {
    let choice;
    do {
        console.log("");
        console.log("=========================================");
        console.log("||          A D M I N   D A S H B O A R D ||");
        console.log("=========================================");
        console.log("|| 1. Add Flight                        ||");
        console.log("|| 2. View All Flights                  ||");
        console.log("|| 3. Logout                            ||");
        console.log("=========================================");
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
                console.log("");
                console.log("");
                console.log("\n=========================================");
                console.log("||         A V A I L A B L E   F L I G H T S         ||");
                console.log("=========================================");
                console.log("");
                console.log("");
                const flights = flightSystem.getFlights();
                if (flights.length === 0) {
                    console.log("||         No flights available.                   ||");
                    console.log("=========================================");
                }
                else {
                    flights.forEach((flight, idx) => {
                        console.log("");
                        console.log("");
                        console.log("=========================================");
                        console.log(`|| Flight #${idx + 1}`);
                        console.log("=========================================");
                        console.log(`|| Flight ID      : ${flight.getFlightId()}`);
                        console.log(`|| Source         : ${flight.getSource()}`);
                        console.log(`|| Destination    : ${flight.getDestination()}`);
                        console.log(`|| Departure Date : ${flight.getDepartureDate()}`);
                        console.log(`|| Price          : ₹${flight.getPrice()}`);
                        console.log(`|| Duration       : ${flight.getDuration()} hours`);
                        console.log("=========================================");
                        console.log("|| Seat Map:");
                        flight.displaySeatMap();
                        console.log("=========================================\n");
                        console.log("");
                        console.log("");
                    });
                }
                break;
            case "3":
                console.log("Logging out...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== "3");
};
exports.adminDashboard = adminDashboard;
