import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index.js';
import homeRouter from './routes/home.js';
import turmasRouter from './routes/turmas.js';
import cadastroRouter from './routes/cadastro.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import protectedRouter from './routes/protected.js';

//Cria aplicação Express:
const app = express();
const PORT = process.env.PORT || 4242;

//Middleware para Cookies:
app.use(cookieParser());

//Permite comunicação Cross-Origin:
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));

//Roteadores importados:
app.use("/index", indexRouter);
app.use("/home", homeRouter);
app.use("/turmas", turmasRouter);
app.use("/login", loginRouter);
app.use("/cadastro", cadastroRouter);
app.use("/logout", logoutRouter);
app.use("/protected", protectedRouter);

//Inicia conexão:
app.listen(PORT, (error) => {

    if(!error) {
        console.log("Servidor iniciado na porta", PORT);
    } else {
        console.log("Erro ao conectar servidor", error);
    }
})