import express from 'express';
import buscaUsuario from '../controller/user.js';
import authorization from '../middleware/authorization.js'

//Roteamento do endpoint da home:
const router = express.Router();

//Carrega dados do usuário na seção de perfil, na home:

router.get("/user", authorization, buscaUsuario);

export default router;