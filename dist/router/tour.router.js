"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tour_controller_1 = require("../controller/tour.controller");
let controller = new tour_controller_1.TourController();
let tour_router = (0, express_1.Router)();
tour_router.post('/create', controller.createTour);
exports.default = tour_router;
