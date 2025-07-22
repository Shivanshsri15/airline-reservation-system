import { Flight } from "../models/Classes/Flight";
import { FlightInterface } from "../models/FlightInterface";

export const FlightData: FlightInterface[] = [
    new Flight("FL001", "New York", "Los Angeles", "2023-12-01", 30000, 3),
    new Flight("FL002", "Chicago", "Miami", "2023-12-02", 25000, 1),
    new Flight("FL003", "San Francisco", "Seattle", "2023-12-03", 20000, 10),
    new Flight("FL004", "Boston", "Washington DC", "2023-12-04", 15000, 9),
    new Flight("FL005", "Dallas", "Houston", "2023-12-05", 10000, 6)
]