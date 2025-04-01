import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

//Variável de realização de query:
const sql = neon(`${process.env.DATABASE_URL}`);

//Roteamento do endpoint da home:
const router = express.Router();

//Carrega dados do usuário na home/index:

router.get("/", async (_, res) => {

    const response = await sql`SELECT username, sexo, birthday, phone, email, estado, cidade, bairro, logradouro, numero, complemento  FROM users WHERE email = 'erickgeo@gmail.com'`
    res.json(response);
})

export default router;