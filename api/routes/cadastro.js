import express from 'express';
import 'dotenv/config';
import cadastraUsuario from '../controller/cadastro.js';

//Roteamento do endpoint do login:
const router = express.Router();

//Permite processamento de formData:
router.use(express.urlencoded({extended: true}))

//Adiciona usuário no sistema:
router.post("/", cadastraUsuario);

export default router;