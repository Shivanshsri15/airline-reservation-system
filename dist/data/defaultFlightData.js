"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightData = void 0;
const Flight_1 = require("../models/Classes/Flight");
exports.FlightData = [
    new Flight_1.Flight("FL001", "New York", "Los Angeles", "2023-12-01", 30000, 3),
    new Flight_1.Flight("FL002", "Chicago", "Miami", "2023-12-02", 25000, 1),
    new Flight_1.Flight("FL003", "San Francisco", "Seattle", "2023-12-03", 20000, 10),
    new Flight_1.Flight("FL004", "Boston", "Washington DC", "2023-12-04", 15000, 9),
    new Flight_1.Flight("FL005", "Dallas", "Houston", "2023-12-05", 10000, 6)
];
