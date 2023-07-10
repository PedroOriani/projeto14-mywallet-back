import { Router } from "express";
import { singup } from "../controllers/user.controllers";

const userRouter = Router();

userRouter.post('/sign-up', singup)