import path from 'path';
import {fileURLToPath} from 'url';
import { neon } from '@neondatabase/serverless';

//Conexão com banco de dados:
const sql = neon(process.env.DATABASE_URL);

/* 
    Contém todas as funções relacionadas aos dados de desempenho de usuário do banco de dados, assim como renderização de páginas. Elas funcionam como 'controller' para as rotas de desempenho da API.
*/

//Polyfill para utilizar variável de caminho atual:
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Carrega página de usuário:
async function loadPaginaDesempenho(req, res) {
    try {
        res.sendFile(`${__dirname}/privado/home/desempenho/desempenho.html`);
    }
    
    catch(error) {
        console.log("Não foi possível renderizar a página de desempenho", error);
    }
} 

//Retorna dados pertinentes de turmas associadas a um praticante, professor ou gestor:
async function retornaDesempenho(req, res) {

    if(req.atribuicao_id === 1) {
        const response = await sql`SELECT * FROM exibeMedicoes(${req.email})`;
        
        //Esse map é necessário visto que o driver do Neon (@neondatabase/serverless) converte o tipo de dado DATE do PostgreSQL para o formato do objeto Date em Javascript, que inclui fuso horário, o que é indesejado no contexto atual:
        const dadosTransformados = response.map((medicao) => {
            const dataFormatada = medicao.dia.toISOString().split('T')[0];
            medicao.dia = dataFormatada;
            return medicao;
        });

        console.log(dadosTransformados) //[null, null]

        return res.json(dadosTransformados);
    }
}

export {loadPaginaDesempenho, retornaDesempenho}