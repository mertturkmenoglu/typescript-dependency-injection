import { Request, Response } from "express";
import { Service } from "typedi";
import UserService from "../services/UserService";

@Service()
class UserController {
  constructor(private readonly userService: UserService) { }
  async getAllUsers(_req: Request, res: Response) {
    const result = await this.userService.getAllUsers();
    return res.json(result);
  }
}

export default UserController;
