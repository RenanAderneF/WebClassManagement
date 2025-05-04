import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);


async function retornaTurmas(req, res) {

    if(req.atribuicao_id === 1) {
        const response = await sql`SELECT * FROM exibeturmaspraticante(${req.email})`;
        return res.json(response);
    }

    else if(req.atribuicao_id === 2) {
        const response = await sql`SELECT * FROM exibeturmasprofessor(${req.email})`;
        return res.json(response);
    }   

    else if(req.atribuicao_id === 3) {
        const response = await sql`SELECT * FROM exibeturmasgestor(${req.email})`;
        return res.json(response);
    }
}

export default retornaTurmas;