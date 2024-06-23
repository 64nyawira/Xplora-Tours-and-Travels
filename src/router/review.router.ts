import { Router } from "express";
import { ReviewController } from "../controller/review.controller";



let controller= new ReviewController();

let review_router=Router()

review_router.post('/create',controller.createReview)

export default review_router;