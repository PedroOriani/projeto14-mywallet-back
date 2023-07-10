import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth";
import { addTransaction, getTransactions } from "../controllers/transaction.controllers";

const transactionRouter = Router();

transactionRouter.use(validateAuth)
transactionRouter.post('/transaction', addTransaction)
transactionRouter.get('/transaction', getTransactions)

export default transactionRouter;