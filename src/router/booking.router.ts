import { Router } from "express";
import { BookingController } from "../controller/booking.controller";



let controller=new BookingController();

let book_router= Router()

book_router.post('/create-new',controller.createBooking)

export default book_router