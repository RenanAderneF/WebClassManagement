import path from 'path';
import {fileURLToPath} from 'url';
import { neon } from '@neondatabase/serverless';

/* 
    Contém todas as funções relacionadas aos dados de turma do banco de dados, assim como renderização de páginas. Elas funcionam como 'controller' para as rotas de turmas da API.
*/


//Polyfill para utilizar variável de caminho atual:
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Conexão com banco de dados:
const sql = neon(process.env.DATABASE_URL);

//Carrega a página de turmas:
async function loadPaginaTurmas(req, res) {

    try {
        res.sendFile(`${__dirname}/privado/home/turmas/turmas.html`);
    }

    catch (error) {
        console.log("Não foi possível renderizar a página de turmas.", error);
    }
}

//Retorna dados pertinentes de turmas associadas a um praticante, professor ou gestor:
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

//Exibe uma turma com base em seu id:
async function exibeTurma(req, res) {
    const turma_id = req.params.turma_id
    const data = await sql`SELECT * FROM turma WHERE id=${turma_id}`;
    return res.json(data);
}

export {loadPaginaTurmas, retornaTurmas, exibeTurma}