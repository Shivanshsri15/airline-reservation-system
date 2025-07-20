export interface User {
    getId(): string;
    getUserName(): string;
    getPassword(): string;
    getRole(): string;
    getRegisteredDate(): string;
}