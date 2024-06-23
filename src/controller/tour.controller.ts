import { Request, Response } from "express";
import { TourService } from "../services/tours.service";


let service = new TourService();

export class TourController {
  async createTour(req: Request, res: Response) {
    try {
      let { destination, duration, price, tourType, description } = req.body;
      let response = await service.createTour(req.body);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async getTourById(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let response = await service.getTourById(id);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async updateTour(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let response = await service.updateTour(id, req.body);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async deleteTour(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let response = await service.deleteTour(id);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async searchTours(req: Request, res: Response) {
    try {
      let { query } = req.query;
      let response = await service.searchTours(query as string);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }
}
