"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const generateIds_1 = require("../../utils/generateIds");
const getRegisterDate_1 = require("../../utils/getRegisterDate");
class Admin {
    constructor(userName, password, role = "admin") {
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.id = (0, generateIds_1.generateIdFunc)("admin");
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
}
exports.Admin = Admin;
