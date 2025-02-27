// API - application programming interface (comunicação de 2 ou mais entidades)
// POST (c), GET (r), PUT (u), DELETE (d)
// CRUD - CREATE READ UPDATE DELETE
// Endpoint - rota que pode ser acessada dentro de uma api
// middleware

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors())
// app.use(express.json());

app.get("/", (request, response) => {
response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'")
})

app.get("/artists", async (request, response) => {
response.send(await db.collection("artists").find({}).toArray())
})

app.get("/songs", async (request, response) => {
response.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});