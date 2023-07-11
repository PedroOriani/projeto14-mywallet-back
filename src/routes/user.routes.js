import { Router } from "express";
import { getUser, signOut, signin, singup } from "../controllers/user.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { schemaUser } from "../schemas/user.schemas.js";
import { validateAuth } from "../middlewares/validateAuth.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchema(schemaUser) ,singup);
userRouter.post('/sign-in', signin);
userRouter.get('/userInfos', validateAuth ,getUser);
userRouter.delete('/sign-out', validateAuth ,signOut)

export default userRouter;