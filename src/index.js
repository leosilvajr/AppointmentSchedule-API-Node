import express from "express";
import cors from "cors";

const app = express(); //Levantar o servidor

app.use(cors());

//Criando a Rota.
app.get("/doctors", (req, res) => {
    res.status(200).send("Aqui vamos listar os médicos.");
})

app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001...")
})

//00:43