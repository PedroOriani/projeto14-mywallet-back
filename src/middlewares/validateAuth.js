import { db } from "mongodb";

export async function validateAuth(res, res, next) {
    const { authorizarion } = req.headers;
    const token = authorizarion?.replace("Beare ", "")

    if (!token) return res.sendStatus(401)

    try{
        const sessao = await db.collection("sessao").findOne({token})
        if (!sessao) return res.sendStatus(401)

        res.locals.sessao = sessao

        next()

    }catch(err){
        res.status(500).send(err.message)
    }
}