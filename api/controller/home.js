import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Carrega página inicial com base no papel do usuário:
async function loadPaginaHome(req, res) {
    
    if(req.atribuicao_id === 1) {
        return res.sendFile(`${__dirname}/privado/home/home-praticante.html`);
    }

    if(req.atribuicao_id === 2) {
        return res.sendFile(`${__dirname}/privado/home/home-professor.html`);
    }

    if(req.atribuicao_id === 3) {
        return res.sendFile(`${__dirname}/privado/home/home-gestor.html`);
    }
}

export default loadPaginaHome;