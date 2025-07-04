import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Variável de realização de query:
const sql = neon(`${process.env.DATABASE_URL}`);

//Realiza o login do usuário no sistema, à partir dos dados do banco de dados.
async function loginUsuario (req, res) {

    try {

        const { email, password } = req.body;        
        
        //Verifica se usuário existe:
        const user = await sql`SELECT EXISTS (
        SELECT 1 FROM users WHERE email = ${email})`;

        const userExists = user[0].exists;
        
        //Se usuário não existir:
        if(!userExists) {
            return res.status(400).send("Usuário não encontrado");
        }
        
        //Se usuário existe, obtém o hash que corresponde ao email inserido:
        const data = await sql`SELECT password FROM users WHERE email=${email}`;
        const hash = data[0].password;
        
        //Compara senha inserida no formulário com hash de email correspondente:
        const equalPassword = await bcrypt.compare(password, hash);
         
        if(!equalPassword) {
            return res.status(401).send("Senha inserida está incorreta.");
        }
        
        //Cria token do usuário, com os dados desejados:
        const tokenData = await sql`SELECT email, atribuicao_id FROM users WHERE email = ${email}`;

        const userEmail = tokenData[0].email;
        const atribuicao_id = tokenData[0].atribuicao_id;
        

        //Conteúdo do corpo do JWT:
        const payload = {
            email: userEmail,
            atribuicao_id: atribuicao_id
        }

        //Assina token de acesso com o corpo e o segredo:
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        //Cria e retorna cookie:
        return res.cookie("access_token", accessToken, {
            httpOnly: true,
            sameSite: "Lax",
            maxAge: 1000 * 60 * 60 * 24
        })
        .status(200)
        .json("Usuário autenticado com sucesso!");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Erro ao autenticar usuário");
    }

}

export default loginUsuario;