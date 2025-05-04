async function checkRole(req, res){

    try {
        return res.json(req.atribuicao_id);
    }

    catch(error) {
        console.log("Não foi possível checar atribuição do usuário", error)
    }
}

export default checkRole;