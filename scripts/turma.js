//Variáveis globais:
let turmaId = null;

//Seleção de elementos:
const tabelaTurmas = document.getElementById("tabelaTurmas");

//Funções:

//Retorna o array de turmas do arquivo json "data.json".
async function getTurmas () {
    
    return fetch('./data/turmas.json')
    .then(response => response.json())
    .catch(error => console.error("Error fetching JSON", error));
}

//Cria o cabeçalho da tabela e os registros de turma presentes no JSON:
async function criaRegistros() {

    let turmas = await getTurmas();
    let turmasLength = Object.keys(turmas).length;

    if(turmasLength != 0) {
        tabelaTurmas.innerHTML = `
            <thead>
                <tr>
                    <td> Nome </td>
                    <td> Capacidade </td>
                    <td> Gestor </td>
                </tr>
            </thead>
        `
        tabelaTurmas.innerHTML += turmas.map(turma => 
            `<tr id=${turma.id} class="registroTurma"}>
                <td>${turma.nome}</td>
                <td>${turma.capacidade}</td>
                <td>${turma.gestor}</td>
            </tr>
            `
        ).join("");
    
        tabelaTurmas.innerHTML += `</tbody`
    } else {
    
        alert("Não há turmas registradas.")
    }
}

//Retorna o id de turma clicada na tabela para importação:
export function getTurmaId() {

    return turmaId;
}

//Eventos:

if(tabelaTurmas != null) {

    //Carrega turmas:
    document.addEventListener('DOMContentLoaded', criaRegistros);

    //Navega para a página de turma ao clicar em turma da tabela.
    tabelaTurmas.addEventListener("click", (e)=> {

        if(e.target.tagName === "TD") {
            sessionStorage.setItem("turma", e.target.parentElement.id);
            window.location.href = './turma.html';
        }
    })    
}





