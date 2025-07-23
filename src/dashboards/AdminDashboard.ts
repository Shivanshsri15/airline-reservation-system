import readlineSync from "readline-sync";
import { FlightSystem } from "../systems/FlightSystem";
import { LoginSystem } from "../systems/LoginSystem";
import { Flight } from "../models/Classes/Flight";

export const adminDashboard = (flightSystem: FlightSystem, loginSystem: LoginSystem): void => {
  let choice: string;

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
    choice = readlineSync.question("=====> Please enter your choice: ");

    switch (choice) {
      case "1":
        const flightId = readlineSync.question("-> Enter Flight ID: ");
        const source = readlineSync.question("-> Enter Source: ");
        const destination = readlineSync.question("-> Enter Destination: ");
        const departureDate = readlineSync.question("-> Enter Departure Date (YYYY-MM-DD): ");
        const price = parseFloat(readlineSync.question("-> Enter Price: "));
        const duration = parseInt(readlineSync.question("-> Enter Duration (in hours): "), 10);

        const newFlight = new Flight(
          flightId,
          source,
          destination,
          departureDate,
          price,
          duration
        );
        flightSystem.addFlight(newFlight);
        break;

      case "2":
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

      case "3":
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
      case "4":
        const delId = readlineSync.question("-> Enter Flight ID to delete: ");
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