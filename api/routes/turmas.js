import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

//Variável de realização de query:
const sql = neon(`${process.env.DATABASE_URL}`);

//Roteamento do endpoint de turmas de gestor:
const router = express.Router();

//Lê turmas do sistema:
router.get("/", async (_, res) => {

	try { 
		const turmas = await sql`SELECT * FROM exibeturmasgestor('erickgeo@gmail.com')`;
		res.json(turmas)
	} 
	catch (error)  {
		res.status(500).json({error})
	}
});

//Cria turma:
router.post("/criar", async (_, res) => {
	await sql`CALL addTurma('erickgeo@gmail.com', 20, 'Turma Ciclismo')`;
	res.send("Dados inseridos com sucesso!")
});

//Lê turma específica dinamicamente:
router.get('/:id', (req, res) => {
	//res.send(`Exibe turma com id ${req.params.id}`);
	res.send('<h1>oiiiii</h1>');
});

export default router;