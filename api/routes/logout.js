import express from 'express';
import authorization from '../middleware/authorization.js';
import logoutUsuario from '../controller/logout.js';

//Roteamento do endpoint:
const router = express.Router();

router.delete("/", authorization, logoutUsuario);

export default router;

