import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function carregaUsuario(req, res) {

    const response = await sql`SELECT username, sexo, birthday, phone, email, estado, cidade, bairro, logradouro, numero, complemento FROM users WHERE id = ${req.id}`
    
    res.json(response);
}

export default carregaUsuario;