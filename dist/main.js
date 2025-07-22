"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminDashboard_1 = require("./dashboards/AdminDashboard");
const Admin_1 = require("./models/Classes/Admin");
const LoginSystem_1 = require("./systems/LoginSystem");
const readline_sync_1 = __importDefault(require("readline-sync"));
const loginSystem = new LoginSystem_1.LoginSystem();
const mainMenu = () => {
    let choice;
    do {
        console.log("");
        console.log("");
        console.log("=========================================");
        console.log("||          A I R L I N E              ||");
        console.log("||       R E S E R V A T I O N         ||");
        console.log("=========================================");
        console.log("|| 1. Register as Passenger             ||");
        console.log("|| 2. Register as Admin                 ||");
        console.log("|| 3. Login                             ||");
        console.log("|| 4. Exit                              ||");
        console.log("=========================================");
        console.log("");
        console.log("");
        choice = readline_sync_1.default.question("=====> Please enter your choice:");
        switch (choice) {
            case "1":
                const userName = readline_sync_1.default.question("-> Enter your username: ");
                const password = readline_sync_1.default.question("-> Enter your password: ", { hideEchoBack: true });
                loginSystem.registerPassenger(userName, password);
                break;
            case "2":
                const adminName = readline_sync_1.default.question("-> Enter your username: ");
                const adminPassword = readline_sync_1.default.question("-> Enter your password: ", { hideEchoBack: true });
                loginSystem.registerAdmin(adminName, adminPassword);
                (0, AdminDashboard_1.adminDashboard)(loginSystem);
                break;
            case "3":
                const loginUserName = readline_sync_1.default.question("-> Enter your username: ");
                const loginPassword = readline_sync_1.default.question("-> Enter your password: ", { hideEchoBack: true });
                const user = loginSystem.loginUser(loginUserName, loginPassword);
                if (user instanceof Admin_1.Admin) {
                    console.log("");
                    console.log("=========================================");
                    console.log(`|| Welcome Admin ${user.getUserName()}! ||`);
                    console.log("=========================================");
                    (0, AdminDashboard_1.adminDashboard)(loginSystem);
                }
                if (user) {
                    console.log("");
                    console.log("=========================================");
                    console.log(`|| User ID: ${user.getId()}                  ||`);
                    console.log(`|| Username: ${user.getUserName()}          ||`);
                    console.log(`|| Role: ${user.getRole()}                  ||`);
                    console.log(`|| Registered Date: ${user.getRegisteredDate()} ||`);
                    console.log("=========================================");
                    console.log("");
                }
                break;
            case "4":
                console.log("");
                console.log("=========================================");
                console.log("||          E X I T I N G               ||");
                console.log("=========================================");
                console.log("");
                break;
            default:
                console.log("");
                console.log("");
                console.log("=========================================");
                console.log("||             E R R O R               ||");
                console.log("=========================================");
                console.log("|| Invalid choice. Please try again.   ||");
                console.log("=========================================");
                console.log("");
                console.log("");
                break;
        }
    } while (choice != "4");
};
mainMenu();
