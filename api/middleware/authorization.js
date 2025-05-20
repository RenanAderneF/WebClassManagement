import 'dotenv/config';
import jwt from 'jsonwebtoken';

//Verifica a existência do token de acesso, de forma a autorizar ou proibir acesso aos dados solicitados. Se o token existe, são enviados

const authorization = (req, res, next) => {
    const token = req.cookies.access_token;

    //Se não houver sessão alguma de usuário:
    if(!token) {
        return res.status(403).send("Acesso proibido");
    }

    //Verificar autorização por papel/atribuição do usuário:
    try {
        //Verifica o token para obter seus dados:
        const data = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        //Cria propriedades no objeto request, referentes aos dados do Cookie, facilitando o acesso a eles:
        req.email = data.email;
        req.atribuicao_id = data.atribuicao_id;

        return next();
    }
    catch {
        return res.status(403);
    }

}

export default authorization;