// javascript assincrono 
// await async
// fullfilled
import { MongoClient } from "mongodb";

const URI = "mongodb+srv://spotifyAula:A9X7pL2mQ3B5tN@cluster0.q5r2g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI)


export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray()


// console.log(songCollection);


