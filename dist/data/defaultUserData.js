"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUserData = void 0;
const Admin_1 = require("../models/Admin");
const Passenger_1 = require("../models/Passenger");
exports.defaultUserData = [
    new Admin_1.Admin("Admin One", "admin123"),
    new Admin_1.Admin("Admin Two", "admin456"),
    new Admin_1.Admin("Admin Three", "admin789"),
    new Admin_1.Admin("Admin Four", "admin101"),
    new Passenger_1.Passenger("Passenger One", "passenger123"),
    new Passenger_1.Passenger("Passenger Two", "passenger456"),
    new Passenger_1.Passenger("Passenger Three", "passenger789"),
    new Passenger_1.Passenger("Passenger Four", "passenger101"),
    new Passenger_1.Passenger("Passenger Five", "passenger102"),
    new Passenger_1.Passenger("Passenger Six", "passenger103"),
    new Passenger_1.Passenger("Passenger Seven", "passenger104"),
    new Passenger_1.Passenger("Passenger Eight", "passenger105"),
    new Passenger_1.Passenger("Passenger Nine", "passenger106"),
    new Passenger_1.Passenger("Passenger Ten", "passenger107"),
];
