"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIdFunc = void 0;
const generateIdFunc = (role) => {
    if (role === "admin") {
        return `ADM-${Math.floor(Math.random() * 10000)}`;
    }
    return `PAS-${Math.floor(Math.random() * 10000)}`;
};
exports.generateIdFunc = generateIdFunc;
