import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

//Variável de realização de query:
const sql = neon(`${process.env.DATABASE_URL}`);

//Roteamento do endpoint de usuários:
const router = express.Router();

//teste:
router.get("/", (_, res) => {
    res.send("Rota index")
})


//Recebe dados de formulário de login, verifica se dados existem no banco, então redireciona o usuário para a home:
router.post("/", async (req, res) => {
    req.body;
    res.json(req.body); 
});

export default router;