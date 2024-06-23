import { Request, Response } from "express";
import { UserService } from "../services/user.service";

let service = new UserService();

export class UserController {
  async createUser(req: Request, res: Response) {
    try {
      let { name, email, password, phone_no } = req.body;
      let response = await service.createUser(req.body);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let response = await service.getUserById(id);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let response = await service.updateUser(id, req.body);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let response = await service.deleteUser(id);
      return res.json(response);
    } catch (error) {
      return res.json({ error });
    }
  }
}
