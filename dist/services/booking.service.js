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
exports.BookingService = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
class BookingService {
    constructor() {
        this.prisma = new client_1.PrismaClient({
            log: ['error']
        });
    }
    createBooking(booking) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.booking.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    userId: booking.userId,
                    tourId: booking.tourId,
                    bookingDate: new Date(),
                    status: booking.status,
                    totalPrice: booking.totalPrice,
                }
            });
            return {
                message: "Booking created successfully",
                response
            };
        });
    }
}
exports.BookingService = BookingService;
