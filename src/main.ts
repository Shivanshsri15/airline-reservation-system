import { adminDashboard } from "./dashboards/AdminDashboard";
import { passengerDashboard } from "./dashboards/PassengerDashboard";
import { Admin } from "./models/Classes/Admin";
import { Passenger } from "./models/Classes/Passenger";
import { FlightSystem } from "./systems/FlightSystem";
import { LoginSystem } from "./systems/LoginSystem";
import readlineSync from "readline-sync";
const loginSystem = new LoginSystem();
const flightSystem = new FlightSystem();

const mainMenu = (): void => {
  let choice: string;

  do {
    console.log("");
    console.log("┌──────────────────────────────────────────────────────┐");
    console.log("│                                                    │");
    console.log("│               ✈ AIRLINE RESERVATION ✈              │");
    console.log("│                                                    │");
    console.log("├──────────────────────────────────────────────────────┤");
    console.log("│ 1. Register as Passenger                             │");
    console.log("│ 2. Register as Admin                                 │");
    console.log("│ 3. Login                                             │");
    console.log("│ 4. Exit                                              │");
    console.log("└──────────────────────────────────────────────────────┘");
    console.log("");
    choice = readlineSync.question("=====> Please enter your choice: ");
    switch (choice) {
      case "1":
        const userName = readlineSync.question("-> Enter your username: ");
        const password = readlineSync.question("-> Enter your password: ", {
          hideEchoBack: true,
        });
        const RegisteredPassenger = loginSystem.registerPassenger(
          userName,
          password
        );
        if (RegisteredPassenger instanceof Passenger) {
          passengerDashboard(flightSystem, loginSystem, RegisteredPassenger);
        }
        break;
      case "2":
        const adminName = readlineSync.question("-> Enter your username: ");
        const adminPassword = readlineSync.question(
          "-> Enter your password: ",
          { hideEchoBack: true }
        );
        loginSystem.registerAdmin(adminName, adminPassword);
        adminDashboard(flightSystem, loginSystem);
        break;
      case "3":
        const loginUserName = readlineSync.question("-> Enter your username: ");
        const loginPassword = readlineSync.question(
          "-> Enter your password: ",
          { hideEchoBack: true }
        );
        const user = loginSystem.loginUser(loginUserName, loginPassword);
        if (user instanceof Admin) {
          console.log("");
          console.log("┌──────────────────────────────────────────────┐");
          console.log(`│ Welcome Admin ${user.getUserName()}!`);
          console.log("└──────────────────────────────────────────────┘");
          adminDashboard(flightSystem, loginSystem);
        }
        if (user instanceof Passenger) {
          console.log("");
          console.log("┌──────────────────────────────────────────────┐");
          console.log(`│ User ID: ${user.getId()}`);
          console.log(`│ Username: ${user.getUserName()}`);
          console.log(`│ Role: ${user.getRole()}`);
          console.log(`│ Registered Date: ${user.getRegisteredDate()}`);
          console.log("└──────────────────────────────────────────────┘");
          passengerDashboard(flightSystem, loginSystem, user);
        }
        break;
      case "4":
        console.log("");
        console.log("┌──────────────────────────────────────────────┐");
        console.log("│                E X I T I N G                 │");
        console.log("└──────────────────────────────────────────────┘");
        break;
      default:
        console.log("");
        console.log("┌──────────────────────────────────────────────┐");
        console.log("│             E R R O R                       │");
        console.log("├──────────────────────────────────────────────┤");
        console.log("│ Invalid choice. Please try again.            │");
        console.log("└──────────────────────────────────────────────┘");
        break;
    }
  } while (choice != "4");
};

mainMenu();
