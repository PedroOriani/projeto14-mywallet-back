import { Router } from "express";
import userRouter from "./user.routes";
import transactionRouter from "./transaction.routes";

const router = Router();

router.use(userRouter);
router.use(transactionRouter);

export default router;