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
exports.ReviewService = void 0;
const client_1 = require("@prisma/client");
const uuid_1 = require("uuid");
class ReviewService {
    constructor() {
        this.prisma = new client_1.PrismaClient({
            log: ['error']
        });
    }
    createReview(review) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.prisma.review.create({
                data: {
                    id: (0, uuid_1.v4)(),
                    userId: review.userId,
                    tourId: review.tourId,
                    reviewDate: new Date(),
                    rating: review.rating,
                    comment: review.comment,
                    isActive: true
                }
            });
            return {
                message: "Review created successfully",
                response
            };
        });
    }
}
exports.ReviewService = ReviewService;
