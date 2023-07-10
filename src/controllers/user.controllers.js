import { db } from "./database/database.connection";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function singup(req, res){
    const { name, email, password } = req.body;

    const hash = bcrypt.hashSync(password, 10);

    try{
        await db.collection('users').insertOne({name, email, password: hash});
        res.sendStatus(201)
    }catch (err) {
        res.status(500).send(err.message)
    }
}