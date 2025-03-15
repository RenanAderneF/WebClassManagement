//Variáveis globais:
let turmaId = null;

//Seleção de elementos:
const tabelaTurmas = document.getElementById("tabelaTurmas");

//Funções:

//Retorna o array de turmas do arquivo json "data.json".
async function getTurmas () {
    
    const response = await fetch('http://localhost:4242/turmas')
        .then(response => response.json())
        .catch(error => {console.log("Não foi possível buscar as turmas. ", error)});
    
    const data = response;
    return data; 
}

//Exibe turmas para o cliente:
async function criaRegistros() {

    const arrayTurmas = await getTurmas();

    tabelaTurmas.innerHTML = `

        <thead>
            <tr>
                <td> Nome </td>
                <td> Capacidade </td>
            </tr>
        </thead>
        
        <tbody>
            ${arrayTurmas.map((turma) => 

                `
                    <tr>    
                        <td>${turma.nome}</td>
                        <td>${turma.capacidade}</td>
                    </tr>
                `
            ).join("")}
        </tbody>`
    ;

    

}

//Eventos:

document.addEventListener("DOMContentLoaded", criaRegistros);