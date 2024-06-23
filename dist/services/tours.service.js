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
exports.TourService = void 0;
const uuid_1 = require("uuid");
const client_1 = require("@prisma/client");
class TourService {
    constructor() {
        this.prisma = new client_1.PrismaClient({
            log: ['error']
        });
    }
    createTour(tour) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.tour.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    destination: tour.destination,
                    duration: tour.duration,
                    price: tour.price,
                    tourType: tour.tourType,
                    description: tour.description,
                    createdAt: new Date('2022-02-20'),
                    updatedAt: new Date('2022-02-21'),
                    isActive: true
                }
            });
            return {
                message: "Tour created successfully",
                response
            };
        });
    }
    getTourById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.tour.findUnique({
                where: { id }
            });
        });
    }
    updateTour(id, tour) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.tour.update({
                where: { id },
                data: tour
            });
            return {
                message: "Tour updated successfully",
                response
            };
        });
    }
    deleteTour(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.tour.update({
                where: { id },
                data: { isActive: false }
            });
            return {
                message: "Tour deleted successfully",
                response
            };
        });
    }
    searchTours(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.prisma.tour.findMany({
                where: {
                    OR: [
                        { destination: { contains: query } },
                        { tourType: { contains: query } }
                    ]
                }
            });
        });
    }
}
exports.TourService = TourService;
