import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import cors from 'cors';
import indexRouter from './routes/index.js';
import homeRouter from './routes/home.js';
import turmasRouter from './routes/turmas.js';
import cadastroRouter from './routes/cadastro.js';
import loginRouter from './routes/login.js';

//Cria aplicação Express:
const app = express();
const PORT = process.env.PORT || 4242;

//Testando api:
app.get('/', async (_, res) => {
    const sql = neon(`${process.env.DATABASE_URL}`);
    const response = await sql`SELECT version()`;
    const { version } = response[0];
    res.json({ version });
  });

//Permite comunicação Cross-Origin:
app.use(cors());

//Roteadores importados:
app.use("/index", indexRouter);
app.use("/home", homeRouter);
app.use("/turmas", turmasRouter);
app.use("/login", loginRouter);
app.use("/cadastro", cadastroRouter);

//Inicia conexão:
app.listen(PORT, (error) => {

    if(!error) {
        console.log("Servidor iniciado na porta", PORT);
    } else {
        console.log("Erro ao conectar servidor", error);
    }
})