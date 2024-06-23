import { Request, Response } from "express";
import { BookingService } from "../services/booking.service";

let service = new BookingService();

export class BookingController {
  async createBooking(req: Request, res: Response) {
    try {
      let { userId, tourId, status, totalPrice } = req.body;
      let response = await service.createBooking(req.body);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }
}
