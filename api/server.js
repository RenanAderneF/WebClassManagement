import express from 'express';
import cors from 'cors';
import turmaRouter from './routes/turma.js'

const app = express();

//Permite comunicação Cross-Origin:
app.use(cors());

app.use("/turmas", turmaRouter);


app.listen(3000, (error) => {

    if(!error) {
        console.log("Servidor iniciado na porta 3000");
    } else {
        console.log("Erro ao conectar servidor", error);
    }
})