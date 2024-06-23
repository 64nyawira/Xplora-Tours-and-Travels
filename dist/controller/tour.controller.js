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
exports.TourController = void 0;
const tours_service_1 = require("../services/tours.service");
let service = new tours_service_1.TourService();
class TourController {
    createTour(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { destination, duration, price, tourType, description } = req.body;
                let response = yield service.createTour(req.body);
                return res.json(response);
            }
            catch (error) {
                return res.json({ error });
            }
        });
    }
    getTourById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let response = yield service.getTourById(id);
                return res.json(response);
            }
            catch (error) {
                return res.json({ error });
            }
        });
    }
    updateTour(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let response = yield service.updateTour(id, req.body);
                return res.json(response);
            }
            catch (error) {
                return res.json({ error });
            }
        });
    }
    deleteTour(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { id } = req.params;
                let response = yield service.deleteTour(id);
                return res.json(response);
            }
            catch (error) {
                return res.json({ error });
            }
        });
    }
    searchTours(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { query } = req.query;
                let response = yield service.searchTours(query);
                return res.json(response);
            }
            catch (error) {
                return res.json({ error });
            }
        });
    }
}
exports.TourController = TourController;
