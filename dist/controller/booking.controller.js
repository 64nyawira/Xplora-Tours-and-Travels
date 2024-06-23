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
exports.BookingController = void 0;
const booking_service_1 = require("../services/booking.service");
let service = new booking_service_1.BookingService();
class BookingController {
    createBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { userId, tourId, status, totalPrice } = req.body;
                let response = yield service.createBooking(req.body);
                return res.json(response);
            }
            catch (error) {
                return res.json({ error });
            }
        });
    }
}
exports.BookingController = BookingController;
