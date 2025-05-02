import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function buscaUsuario(req, res) {

    try {
        const userData = await sql`SELECT username, sexo, birthday, phone, email, estado, cidade, bairro, logradouro, numero, complemento FROM users WHERE id = ${req.id}`;
        res.json(userData);
    }

    catch(error) {
        console.log("Erro ao buscar dados do usuário", error);
    }
}

export default buscaUsuario;