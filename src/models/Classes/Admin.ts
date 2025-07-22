import { generateIdFunc } from "../../utils/generateIds";
import { getRegisterDate } from "../../utils/getRegisterDate";
import { User } from "../User"; 
export class Admin implements User {
    protected id: string;
    protected registeredDate: string;
    constructor(
        protected userName: string,
        protected password: string,
        protected role: "admin" | "passenger" = "admin"
    ) {
        this.id = generateIdFunc("admin");
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