import express from 'express';
import cors from 'cors';

const app = express();


//Permite comunicação Cross-Origin:
app.use(cors());

app.get("/", (req, res) => {
    res.send("Requisição recebida!");
})

app.listen(3000, (error) => {

    if(!error) {
        console.log("Servidor iniciado na porta 3000");
    } else {
        console.log("Erro ao conectar servidor", error);
    }
})