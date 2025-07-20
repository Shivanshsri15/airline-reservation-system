import { Admin } from "../models/Admin";
import { Passenger } from "../models/Passenger";
import { User } from "../models/User";
export const defaultUserData: User[] = [
    new Admin("Admin One", "admin123"),
    new Admin("Admin Two", "admin456"),
    new Admin("Admin Three", "admin789"),
    new Admin("Admin Four", "admin101"),

    new Passenger("Passenger One", "passenger123"),
    new Passenger("Passenger Two", "passenger456"),
    new Passenger("Passenger Three", "passenger789"),
    new Passenger("Passenger Four", "passenger101"),
    new Passenger("Passenger Five", "passenger102"),
    new Passenger("Passenger Six", "passenger103"),
    new Passenger("Passenger Seven", "passenger104"),
    new Passenger("Passenger Eight", "passenger105"),
    new Passenger("Passenger Nine", "passenger106"),
    new Passenger("Passenger Ten", "passenger107"),
]