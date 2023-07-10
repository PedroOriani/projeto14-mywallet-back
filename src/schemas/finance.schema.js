import Joi from "joi";

export const schemaFinance = Joi.object({
    date: Joi.date().required(),
    description: Joi.string().required(),
    value: Joi.number().required()
})