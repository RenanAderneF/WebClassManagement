document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000")
        .then(response => console.log("resposta recebida!", response))
      .catch((error) => {
            console.log("Não foi possível enviar solicitação para a URI.", error)})
})