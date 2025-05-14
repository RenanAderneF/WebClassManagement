import express from 'express';
import authorization from '../middleware/authorization.js'
import buscaUsuario from '../controller/user.js';
import checkRole from '../controller/home.js';
import retornaTurmas from '../controller/turmas.js';
import exibeTurma from '../controller/turma_id.js';

//Roteamento do endpoint da home:
const router = express.Router();

//Carrega atribuição de usuário ao entrar na home:
router.get("/", authorization, checkRole);

//Retorna credenciais de usuário para seção de perfil:
router.get("/user", authorization, buscaUsuario);

//Retorna turmas associadas ao usuário:
router.get("/turmas", authorization, retornaTurmas);

//Retorna turma de id específico:
router.get("/turmas/:turma_id", authorization, exibeTurma);


export default router;