"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controller/users.controller");
let controller = new users_controller_1.UserController();
let user_router = (0, express_1.Router)();
user_router.post('/create', controller.createUser);
exports.default = user_router;
