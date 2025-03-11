//turmas.js:

//Roteamento do endpoint de gestor:
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Lista de turmas do gestor");
})

router.post("/new", (req, res) => {
	res.send("Formulário de criação de turma");
});

router.get("/:id", (req, res) => {
	res.send(`Exibe turma com id ${req.params.id}`);
});

export default router;