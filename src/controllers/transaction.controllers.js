import { db } from "../database/database.connection.js";


export async function addTransaction(req, res){

    try{
        await db.collection('transactions').insertOne(req.body);
        res.status(201).send(req.body);
    }catch (err){
        res.status(500).send(err.message);
    }

}

export async function getTransactions(req, res){
    const { id } = req.headers.id;

    try{
        const transactions = await db.collection('transactions').find({ _id: id }).toArray();
        res.send(transactions)
    }catch (err){
        res.status(500).send(err.message);
    }
}