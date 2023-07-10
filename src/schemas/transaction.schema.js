import Joi from "joi";

export const schemaTransactions = Joi.object({
    description: Joi.string().required(),
    value: Joi.number().positive().required()
})