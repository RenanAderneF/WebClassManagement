import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

async function exibeTurma(req, res) {
    const turma_id = req.params.turma_id
    const data = await sql`SELECT * FROM turma WHERE id=${turma_id}`;
    return res.json(data);
}

export default exibeTurma;
