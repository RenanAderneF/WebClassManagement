import express from 'express';
import authorization from "../middleware/authorization.js";

//Retorna os dados do Cookie:

const router = express.Router();

router.get("/", authorization, (req, res) => {
    return res.json({ user: { email: req.email, atribuicao_id: req.atribuicao_id} });
});

export default router;