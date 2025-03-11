document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000")
        .then(response => console.log("resposta recebida!", response))
})