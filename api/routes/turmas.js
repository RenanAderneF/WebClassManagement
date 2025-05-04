import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import authorization from '../middleware/authorization.js';
import retornaTurmas from '../controller/turmas.js';

//Variável de realização de query:
const sql = neon(`${process.env.DATABASE_URL}`);

//Roteamento do endpoint de turmas de gestor:
const router = express.Router();

//Retorna turmas do sistema:
router.get("/", authorization, retornaTurmas);

	


export default router;