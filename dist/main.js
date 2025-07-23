"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminDashboard_1 = require("./dashboards/AdminDashboard");
const PassengerDashboard_1 = require("./dashboards/PassengerDashboard");
const Admin_1 = require("./models/Classes/Admin");
const Passenger_1 = require("./models/Classes/Passenger");
const FlightSystem_1 = require("./systems/FlightSystem");
const LoginSystem_1 = require("./systems/LoginSystem");
const readline_sync_1 = __importDefault(require("readline-sync"));
const loginSystem = new LoginSystem_1.LoginSystem();
const flightSystem = new FlightSystem_1.FlightSystem();
const mainMenu = () => {
    let choice;
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
        choice = readline_sync_1.default.question("=====> Please enter your choice: ");
        switch (choice) {
            case "1":
                const userName = readline_sync_1.default.question("-> Enter your username: ");
                const password = readline_sync_1.default.question("-> Enter your password: ", {
                    hideEchoBack: true,
                });
                const RegisteredPassenger = loginSystem.registerPassenger(userName, password);
                if (RegisteredPassenger instanceof Passenger_1.Passenger) {
                    (0, PassengerDashboard_1.passengerDashboard)(flightSystem, loginSystem, RegisteredPassenger);
                }
                break;
            case "2":
                const adminName = readline_sync_1.default.question("-> Enter your username: ");
                const adminPassword = readline_sync_1.default.question("-> Enter your password: ", { hideEchoBack: true });
                loginSystem.registerAdmin(adminName, adminPassword);
                (0, AdminDashboard_1.adminDashboard)(flightSystem, loginSystem);
                break;
            case "3":
                const loginUserName = readline_sync_1.default.question("-> Enter your username: ");
                const loginPassword = readline_sync_1.default.question("-> Enter your password: ", { hideEchoBack: true });
                const user = loginSystem.loginUser(loginUserName, loginPassword);
                if (user instanceof Admin_1.Admin) {
                    console.log("");
                    console.log("┌──────────────────────────────────────────────┐");
                    console.log(`│ Welcome Admin ${user.getUserName()}!`);
                    console.log("└──────────────────────────────────────────────┘");
                    (0, AdminDashboard_1.adminDashboard)(flightSystem, loginSystem);
                }
                if (user instanceof Passenger_1.Passenger) {
                    console.log("");
                    console.log("┌──────────────────────────────────────────────┐");
                    console.log(`│ User ID: ${user.getId()}`);
                    console.log(`│ Username: ${user.getUserName()}`);
                    console.log(`│ Role: ${user.getRole()}`);
                    console.log(`│ Registered Date: ${user.getRegisteredDate()}`);
                    console.log("└──────────────────────────────────────────────┘");
                    (0, PassengerDashboard_1.passengerDashboard)(flightSystem, loginSystem, user);
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
