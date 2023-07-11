import { Router } from "express";
import { validateAuth } from "../middlewares/validateAuth.js";
import { addTransaction, getTransactions } from "../controllers/transaction.controllers.js";
import { schemaTransactions } from "../schemas/transaction.schema.js";
import { validateSchema } from "../middlewares/validateSchema.js";

const transactionRouter = Router();

transactionRouter.use(validateAuth)
transactionRouter.post('/transaction' , validateSchema(schemaTransactions) ,addTransaction)
transactionRouter.get('/transactions', getTransactions)

export default transactionRouter;