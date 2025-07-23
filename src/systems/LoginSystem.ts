import { defaultUserData } from "../data/defaultUserData";
import { Admin } from "../models/Classes/Admin";
import { Passenger } from "../models/Classes/Passenger";
import { FlightInterface } from "../models/FlightInterface";
import { User } from "../models/User";

export class LoginSystem {
  private users: User[];
  constructor() {
    this.users = [...defaultUserData];
  }
  registerPassenger(userName: string, password: string): User | void {
    const newPassenger = new Passenger(userName, password);
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

  registerAdmin(userName: string, password: string): void {
    const newPassenger = new Admin(userName, password);
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
  loginUser(userName: string, password: string): User | void {
    const user = this.users.find(
      (user) =>
        user.getUserName() === userName && user.getPassword() === password
    );
    if (user) {
      console.log("=========================================");
      console.log("||             S U C C E S S           ||");
      console.log("=========================================");
      console.log(`|| Welcome ${user.getUserName()}!       ||`);
      console.log("=========================================");
      return user;
    } else {
      console.log("=========================================");
      console.log("||             E R R O R               ||");
      console.log("=========================================");
      console.log("|| Invalid username or password.       ||");
      console.log("=========================================");
    }
  }
  viewUsers(): void {
    const userRecords = this.users.map((user) => ({
      userName: user.getUserName(),
      userType: user.getRole(),
      role: user.getRole(),
      registeredDate: user.getRegisteredDate(),
    }));
    console.table(userRecords);
  }
  
  
  removeUser(userName: string): void{
    const userIndex = this.users.findIndex(
      (user) => user.getUserName() === userName
    );
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
  addFlightToUser(userName: string, flightId: FlightInterface): void {
    const userIndex = this.users.findIndex(
      (user) => user.getUserName() === userName
    );
    if (userIndex === -1) {
      console.log("=========================================");
      console.log("||             E R R O R               ||");
      console.log("=========================================");
      console.log(`|| User ${userName} not found.         ||`);
      console.log("=========================================");
      return;
    }
    const user = this.users[userIndex];
    if (user instanceof Passenger) {
      user.addFlightToUser(flightId);
      console.log("=========================================");
      console.log("||             S U C C E S S           ||");
      console.log("=========================================");
      console.log(`|| Flight ${flightId.getFlightId()} added to ${userName}'s bookings. ||`);
      console.log("=========================================");
    } else {
      console.log("=========================================");
      console.log("||             E R R O R               ||");
      console.log("=========================================");
      console.log(`|| User ${userName} is not a passenger. ||`);
      console.log("=========================================");
    }
  }
}
