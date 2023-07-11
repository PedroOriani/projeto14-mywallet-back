export function validateSchema(schema){
    return(req, res, next) => {
        const validation = schema.validate(req.body, { aboryEarly: false })

        console.log(validation)

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message)
            console.log(erro)
            return res.status(422).send(errors)
        }

        next()
    }
}