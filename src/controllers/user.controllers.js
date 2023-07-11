import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs"
import { db } from "../database/database.connection.js";

export async function singup(req, res){
    const { name, email, password } = req.body;

    const hash = bcrypt.hashSync(password, 10);

    try{
        await db.collection('users').insertOne({ name, email, password: hash });
        res.sendStatus(201);
    }catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signin(req, res){
    const { email, password } = req.body;

    try{
        const user = await db.collection('users').findOne({ email });
        if (!user) return res.status(404).send("Usuário não cadastrado");

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) return res.status(401).send("Senha incorreta");

        await db.collection('sessions').deleteMany({ userId: user._id });
        const token = uuid();
        await db.collection('sessions').insertOne({ token, userId: user._id });

        res.send(token);

    }catch (err){
        res.status(500).send(err.message);
    }
}

export async function getUser(req, res){
    const { session } = res.locals

    const day = dayjs().format('DD/MM')

    try{
        const user = await db.collection('users').findOne({ _id: session.userId });

        delete user.password;
        res.send({_id: user.userID, name: user.name, email: user.email, day:day})
    }catch (err){
        res.status(500).send(err.message);
    }
}

export async function signOut(req, res){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "")

    if (!token) return res.sendStatus(401)
    
    try{
        const deleted = await db.collection('sessions').deleteOne({ token });
        res.send({deletedCount: deleted.deletedCount})
    }catch (err){
        res.status(500).send(err.message)
    }
}