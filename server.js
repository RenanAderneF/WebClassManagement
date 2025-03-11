import express from 'express';
const app = express();

//Envia a string "Hi" ao cliente quando o endpoint inicial recebe uma solicitação GET
app.get("/", (req, res)=> {
  res.status(200);
  res.send("<h1>Bem vindo a URL raíz do servidor</h1>");
})

app.listen(3000, (error)=> {
  if(!error) {
    console.log("Servidor executando na porta 3000");
  } else {
    console.log("Erro ao executar servidor", error);
  }
  
});