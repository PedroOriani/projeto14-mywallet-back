import { Router } from "express";
import { getUser, signin, singup } from "../controllers/user.controllers";
import { validateSchema } from "../middlewares/validateSchema";
import { schemaUser } from "../schemas/user.schemas";
import { validateAuth } from "../middlewares/validateAuth";

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(schemaUser) ,singup);
userRouter.post('/sign-in', signin);
userRouter.get('/userInfos', validateAuth ,getUser);

export default userRouter;