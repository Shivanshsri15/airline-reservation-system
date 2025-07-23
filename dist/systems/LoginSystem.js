"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSystem = void 0;
const defaultUserData_1 = require("../data/defaultUserData");
const Admin_1 = require("../models/Classes/Admin");
const Passenger_1 = require("../models/Classes/Passenger");
class LoginSystem {
    constructor() {
        this.users = [...defaultUserData_1.defaultUserData];
    }
    registerPassenger(userName, password) {
        const newPassenger = new Passenger_1.Passenger(userName, password);
        const exists = this.users.find((user) => user.getUserName() === userName);
        if (exists) {
            console.log("=========================================");
            console.log("||             W A R N I N G           ||");
            console.log("=========================================");
            console.log("|| User ID already exists.             ||");
            console.log("|| Please choose a different one.      ||");
            console.log("=========================================");
            return;
        }
        this.users.push(newPassenger);
        console.log("=========================================");
        console.log("||             S U C C E S S           ||");
        console.log("=========================================");
        console.log(`|| User ${userName} registered successfully. ||`);
        console.log("=========================================");
        return newPassenger;
    }
    registerAdmin(userName, password) {
        const newPassenger = new Admin_1.Admin(userName, password);
        const exists = this.users.find((user) => user.getUserName() === userName);
        if (exists) {
            console.log("=========================================");
            console.log("||             W A R N I N G           ||");
            console.log("=========================================");
            console.log("|| User ID already exists.             ||");
            console.log("|| Please choose a different one.      ||");
            console.log("=========================================");
            return;
        }
        this.users.push(newPassenger);
        console.log("=========================================");
        console.log("||             S U C C E S S           ||");
        console.log("=========================================");
        console.log(`|| User ${userName} registered successfully. ||`);
        console.log("=========================================");
    }
    loginUser(userName, password) {
        const user = this.users.find((user) => user.getUserName() === userName && user.getPassword() === password);
        if (user) {
            console.log("=========================================");
            console.log("||             S U C C E S S           ||");
            console.log("=========================================");
            console.log(`|| Welcome ${user.getUserName()}!       ||`);
            console.log("=========================================");
            return user;
        }
        else {
            console.log("=========================================");
            console.log("||             E R R O R               ||");
            console.log("=========================================");
            console.log("|| Invalid username or password.       ||");
            console.log("=========================================");
        }
    }
    viewUsers() {
        const userRecords = this.users.map((user) => ({
            userName: user.getUserName(),
            userType: user.getRole(),
            role: user.getRole(),
            registeredDate: user.getRegisteredDate(),
        }));
        console.table(userRecords);
    }
    removeUser(userName) {
        const userIndex = this.users.findIndex((user) => user.getUserName() === userName);
        if (userIndex === -1) {
            console.log("=========================================");
            console.log("||             E R R O R               ||");
            console.log("=========================================");
            console.log(`|| User ${userName} not found.         ||`);
            console.log("=========================================");
            return;
        }
        this.users.splice(userIndex, 1);
        console.log("=========================================");
        console.log("||             S U C C E S S           ||");
        console.log("=========================================");
        console.log(`|| User ${userName} removed successfully. ||`);
        console.log("=========================================");
    }
    addFlightToUser(userName, flightId) {
        const userIndex = this.users.findIndex((user) => user.getUserName() === userName);
        if (userIndex === -1) {
            console.log("=========================================");
            console.log("||             E R R O R               ||");
            console.log("=========================================");
            console.log(`|| User ${userName} not found.         ||`);
            console.log("=========================================");
            return;
        }
        const user = this.users[userIndex];
        if (user instanceof Passenger_1.Passenger) {
            user.addFlightToUser(flightId);
            console.log("=========================================");
            console.log("||             S U C C E S S           ||");
            console.log("=========================================");
            console.log(`|| Flight ${flightId.getFlightId()} added to ${userName}'s bookings. ||`);
            console.log("=========================================");
        }
        else {
            console.log("=========================================");
            console.log("||             E R R O R               ||");
            console.log("=========================================");
            console.log(`|| User ${userName} is not a passenger. ||`);
            console.log("=========================================");
        }
    }
}
exports.LoginSystem = LoginSystem;
