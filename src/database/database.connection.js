import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try{
    await mongoClient.connect();
    console.log("mongodb conectado")
}catch(err){
    res.status(500).send(err.message);
}

export const db = mongoClient.db();