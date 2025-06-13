import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';

//Variável de query:
const sql = neon(process.env.DATABASE_URL);

//Cadastra usuário no sistema, gravando os dados inseridos no banco de dados:
async function cadastraUsuario (req, res) {

    const {username, email, atribuicao_id, password} = req.body;

    try {
        
        //Verifica se usuário já existe
        const user = await sql`SELECT EXISTS (
        SELECT 1 FROM users WHERE email = ${email})`;

        const userExists = user[0].exists;
        
        if(userExists) {
            return res.status(409).send("Usuário já registrado no sistema");
        }
        
        //Se não encontrado, hash de senha inserida é gerado
        const hash = await bcrypt.hash(password, 13);

        //Dados de usuário e hash de senha são usados para criar novo usuário, com base na atribuição selecionada no formulário
        if(atribuicao_id == 1) {
            await sql`CALL addPraticante(${username}, ${email}, ${hash})`
        }
        else if(atribuicao_id == 2) {
            await sql`CALL addProfessor(${username}, ${email}, ${hash})`
        }
        else if(atribuicao_id == 3) {
            await sql`CALL addGestor(${username}, ${email}, ${hash})`
        }

        res.status(200).send("Usuário registrado!");
    } 
        
    catch (error) {
        console.log("Erro ao adicionar usuário", error);
    }
}

export default cadastraUsuario;