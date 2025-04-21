import express from 'express';
import carregaUsuario from '../controller/user.js';
import authorization from '../middleware/authorization.js'

//Roteamento do endpoint da home:
const router = express.Router();

//Carrega dados do usuário na home/index:

router.get("/user", authorization, carregaUsuario);

export default router;