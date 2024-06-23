import { Request, Response } from "express";
import { ReviewService } from "../services/review.service";

let service = new ReviewService();

export class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      let { userId, tourId, rating, comment } = req.body;
      let response = await service.createReview(req.body);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }
}
