import { Router } from "express";
import { UserController } from "../controller/users.controller";



let controller=new UserController()

let user_router = Router()

user_router.post('/create',controller.createUser)

export default user_router