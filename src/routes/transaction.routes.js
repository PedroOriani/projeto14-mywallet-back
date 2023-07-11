import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { addTransaction, getTransactions } from "../controllers/transaction.controllers.js";

const transactionRouter = Router();

transactionRouter.use(validateAuth)
transactionRouter.post('/transaction', addTransaction)
transactionRouter.get('/transaction', getTransactions)

export default transactionRouter;