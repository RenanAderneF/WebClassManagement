import express from 'express';

//Roteamento do endpoint de turmas de gestor:
const router = express.Router();

//Lê turmas do sistema:
router.get("/", (req, res) => {

});

//Cria turma:
router.post("/criar", (req, res) => {
	const { nome } = req.body;
	const { capacidade } = req.body;

});

//Lê turma específica dinamicamente:
router.get("/turma_:id", (req, res) => {
	res.send(`Exibe turma com id ${req.params.id}`);
});

export default router;