import { generateIdFunc } from "../../utils/generateIds";
import { getRegisterDate } from "../../utils/getRegisterDate";
import { User } from "../User"; 
export class Passenger implements User {
    protected id: string;
    protected registeredDate: string;
    constructor(
        protected userName: string,
        protected password: string,
        protected role: "admin" | "passenger" = "passenger"
    ) {
        this.id = generateIdFunc("passenger");
        this.registeredDate = getRegisterDate();
    }
    getId(): string{
        return this.id;
    }
    getUserName(): string {
        return this.userName;
    }
    getPassword(): string {
        return this.password;
    }
    getRole(): string{
        return this.role;
    }
    getRegisteredDate(): string {
        return this.registeredDate;
    }
}