"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient({
            log: ['error']
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.users.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    name: user.name,
                    image: user.image,
                    email: user.email,
                    password: user.password,
                    phone_no: user.phone_no,
                    // createdAt: user.createdAt,
                    // updatedAt: user.updatedAt,
                    // role: user.role
                }
            });
            return {
                message: "User created successfully",
                response
            };
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.users.findUnique({
                where: { id }
            });
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.users.update({
                where: { id },
                data: user
            });
            return {
                message: "User updated successfully",
                response
            };
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.users.delete({
                where: { id }
            });
            return {
                message: "User deleted successfully",
                response
            };
        });
    }
}
exports.UserService = UserService;
