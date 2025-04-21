import express from 'express';
import 'dotenv/config';
import loginUsuario from '../controller/login.js';

//Roteamento do endpoint do login:
const router = express.Router();

//Permite processamento de formData:
router.use(express.urlencoded({extended: true}))

//Verifica dados do usuário (caso existam) e cria token:
router.post("/", loginUsuario);

export default router;