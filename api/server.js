import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import cors from 'cors';
import turmaRouter from './routes/turma.js';

//Cria aplicação Express:
const app = express();
const PORT = process.env.PORT || 4242;

//Cria conexão com banco ao receber solicitação GET na rota raiz, ou seja, ao iniciar a api.
app.get('/', async (_, res) => {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT version()`;
    const { version } = response[0];
    res.json({ version });
  });

//Permite comunicação Cross-Origin:
app.use(cors());

//Roteadores importados:
app.use("/turmas", turmaRouter);

//Inicia conexão:
app.listen(PORT, (error) => {

    if(!error) {
        console.log("Servidor iniciado na porta", PORT);
    } else {
        console.log("Erro ao conectar servidor", error);
    }
})