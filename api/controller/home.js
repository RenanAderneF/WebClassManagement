import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Carrega página inicial com base no papel do usuário:
async function loadHome(req, res) {
    
    if(req.atribuicao_id === 1) {
        return res.sendFile(`${__dirname}/estático/home-praticante.html`);
    }

    if(req.atribuicao_id === 2) {
        return res.sendFile(`${__dirname}/estático/home-professor.html`);
    }

    if(req.atribuicao_id === 3) {
        return res.sendFile(`${__dirname}/estático/home-gestor.html`);
    }
    
}

export default loadHome;