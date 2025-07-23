"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const generateIds_1 = require("../../utils/generateIds");
const getRegisterDate_1 = require("../../utils/getRegisterDate");
class Passenger {
    constructor(userName, password, role = "passenger", flights = []) {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.flights = flights;
        this.id = (0, generateIds_1.generateIdFunc)("passenger");
        this.registeredDate = (0, getRegisterDate_1.getRegisterDate)();
    }
    getId() {
        return this.id;
    }
    getUserName() {
        return this.userName;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    getRegisteredDate() {
        return this.registeredDate;
    }
    getUserFlights() {
        return this.flights;
    }
    addFlightToUser(flight) {
        this.flights.push(flight);
    }
}
exports.Passenger = Passenger;
