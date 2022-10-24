/* PUTZ QUIZ 3.0 */
/* Neste exercício é utilizada uma nova abordagem */

/* Aula 22 Putz Quiz  */

let titulo = document.querySelector('#titulo')

let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

// article da questao
let questao = document.querySelector('.questao')

// PERGUNTA
let nQuestao = document.querySelector('#nQuestao')
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

titulo.textContent = "Putz Quiz"
let totalDeQuestoes = 0
numero.textContent = 1

let pontos = 0
let placar = document.querySelector('.placar')

// AUDIO
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// Endereço do arquivo JSON
const url = 'data.json'

function pegarDados(i) {

    fetch(url).then(response => {

        return response.json();

    }).then(data => {
        if(data.erro) {
            console.log('Erro ao acessar o JSON')
            return
        }

        // passar a quantidade de questões para a variável
        let qtdQuestoes = (data.questoes.length)-1
        
        // escrever a qtdQuestoes para total
        total.textContent = parseInt(qtdQuestoes)

        // passe o valor de i no paramentro
        atribuirDados(data, i)
    })
} // fim do pegar dados















// por convensão sempre deixar uma linha vazia ao final do código