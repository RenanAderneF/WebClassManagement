import express from 'express';

//Roteamento do endpoint de usuários:
const router = express.Router();

//teste:
router.get("/", (_, res) => {
    res.send("Rota index")
})

export default router;