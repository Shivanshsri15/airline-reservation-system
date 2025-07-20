"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegisterDate = void 0;
const getRegisterDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0];
};
exports.getRegisterDate = getRegisterDate;
