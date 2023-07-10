import Joi from "joi";

export const schemaFinance = Joi.object({
    description: Joi.string().required(),
    value: Joi.number().required()
})