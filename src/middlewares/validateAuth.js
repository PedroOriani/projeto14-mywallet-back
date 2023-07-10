import { db } from "mongodb";

export async function validateAuth(res, res, next) {
    const { authorizarion } = req.headers;
    const token = authorizarion?.replace("Bearer ", "")

    if (!token) return res.sendStatus(401)

    try{
        const session = await db.collection("session").findOne({token})
        if (!session) return res.sendStatus(401)

        res.locals.session = session

        next()

    }catch(err){
        res.status(500).send(err.message)
    }
}