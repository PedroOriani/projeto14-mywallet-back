import Joi from "joi";

export const schemaTransactions = Joi.object({
    description: Joi.string().required(),
    value: Joi.number().positive().precision(2).required(),
    day: Joi.required(),
    type: Joi.required(),
    id: Joi.required()
})