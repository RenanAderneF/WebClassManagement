async function checkRole(req, res){

   if(req.atribuicao_id === 1) {
    //res.render()
    return res.send("Home de praticante");
   }

   else if(req.atribuicao_id === 2) {
    //res.render()
    return res.send("Home de professor");
   }

   else if(req.atribuicao_id === 3) {
    //res.render()
    return res.send("Home de gestor");
   }

}

export default checkRole;