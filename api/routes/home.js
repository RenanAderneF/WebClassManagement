import express from 'express';
import authorization from '../middleware/authorization.js';
import loadPaginaHome from '../controller/home.js';
import { loadPaginaUser, buscaUsuario } from '../controller/user.js';
import { retornaTurmas, exibeTurma, loadPaginaTurmas } from '../controller/turmas.js';
import { loadPaginaDesempenho, retornaDesempenho} from '../controller/desempenho.js';

//Roteamento do endpoint da home:
const router = express.Router();

//Retorna página home específica:
router.get("/", authorization, loadPaginaHome);

//Retorna página de usuário/perfil:
router.get("/user", authorization, loadPaginaUser);

//Retorna credenciais de usuário para seção de perfil:
router.get("/user/item", authorization, buscaUsuario);

//Retorna página de turmas:
router.get("/turmas", authorization, loadPaginaTurmas);

//Retorna turmas associadas ao usuário:
router.get("/turmas/itens", authorization, retornaTurmas);

//Retorna turma de id específico:
router.get("/turmas/itens/:turma_id", authorization, exibeTurma);

//Retorna página de desempenho:
router.get("/desempenho", authorization, loadPaginaDesempenho);

//Retorna medições feitas por um praticante:
router.get("/desempenho/itens", authorization, retornaDesempenho);

export default router;