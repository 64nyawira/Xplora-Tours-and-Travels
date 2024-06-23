import { Router } from "express";
import { TourController } from "../controller/tour.controller";

let controller=new TourController()

let tour_router = Router()

tour_router.post('/create',controller.createTour)
tour_router.get('/get-one/:id', controller.getTourById);
tour_router.put('/update/:id', controller.updateTour);
tour_router.delete('/delete/:id', controller.deleteTour);
tour_router.get('/search/search', controller.searchTours);

export default tour_router