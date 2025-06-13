import path from 'path';
import {fileURLToPath} from 'url';
import { neon } from '@neondatabase/serverless';

//Conexão com banco de dados:
const sql = neon(process.env.DATABASE_URL);

/* 
    Contém todas as funções relacionadas aos dados de usuário do banco de dados, assim como renderização de páginas. Elas funcionam como 'controller' para as rotas de usuários da API.
*/

//Polyfill para utilizar variável de caminho atual:
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Carrega página de usuário:
async function loadPaginaUser(req, res) {
    try {
        res.sendFile(`${__dirname}/privado/home/perfil/perfil.html`);
    }
    
    catch(error) {
        console.log("Não foi possível renderizar a página de usuário", error);
    }
}

//Retorna dados pertinentes de um usuário, com base em um e-mail:
async function buscaUsuario(req, res) {

    try {
        const userData = await sql`SELECT username, sexo, birthday, phone, email, estado, cidade, bairro, logradouro, numero, complemento FROM users WHERE email = ${req.email}`;
        res.json(userData);
    }

    catch(error) {
        console.log("Erro ao buscar dados do usuário", error);
    }
}

export {loadPaginaUser, buscaUsuario}