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
        
        //Verifica se usuário existe
        const user = await sql`SELECT EXISTS (
        SELECT 1 FROM users WHERE email = ${email})`;

        const userExists = user[0].exists;
        
        //Se usuário não existir
        if(!userExists) {
            return res.status(409).send("Usuário não encontrado");
        }
        
        //Se usuário existe, obtém o hash que corresponde ao email inserido:
        const data = await sql`SELECT password FROM users WHERE email=${email}`;
        const hash = data[0].password;
        
        //Compara senha inserida com hash de email correspondente:
        const equalPassword = await bcrypt.compare(password, hash);
         
        if(!equalPassword) {
            return res.status(401).send("Senha inserida está incorreta.");
        }
        
        return res.status(200).send("Usuário autenticado!");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Erro ao autenticar usuário");
    }

})

export default router;