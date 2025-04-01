import express from 'express';
import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';

//Variável de realização de query:
const sql = neon(`${process.env.DATABASE_URL}`);

//Roteamento do endpoint do login:
const router = express.Router();

//Permite processamento de formData:
router.use(express.urlencoded({extended: true}))

//Verifica dados do usuário (caso existam):
router.post("/", async (req, res) => {

    try {
        const { email, password } = req.body;
        
        //Verificar se e-mail existe no banco:
        const users = await sql`SELECT email FROM users WHERE email=${email}`;

        //Verifica se usuário já existe
        if(users.length === 0) {
            return res.status(404).send("E-mail incorreto ou usuário não existe");
        }
        
        //Obtém o hash que corresponde ao email inserido:
        const hash = await sql`SELECT password FROM users WHERE email=${email}`;
                
        //Compara senha inserida com hash de email correspondente:
        const equivalente = bcrypt.compare(password, hash);
        
        if(!equivalente) {
            return res.status(509).send("Senha incorreta");
        } 
        
        //Sendo equivalente, usuário é redirecionado para dashboard, com seus dados:
        res.status(200).send("Usuário autenticado!");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Erro ao autenticar usuário");
    }

})

export default router;