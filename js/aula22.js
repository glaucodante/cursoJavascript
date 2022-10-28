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
const url = '../data.json'

function pegarDados(i) {

    fetch(url).then(response => {

        return response.json();

    }).then(data => {
        if(data.erro) {
            console.log("Erro ao acessar o JSON")
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

function atribuirDados(data, i) {
    if(i >= data.questoes.length) {
        //console.log('Fim das questoes')
        i=1 // para voltar para a primeira questão quando terminar as questões
    }
    nQuestao.textContent =data.questoes[i].numQuestao
    pergunta.textContent =data.questoes[i].pergunta

    a.textContent = data.questoes[i].alternativaA
    b.textContent = data.questoes[i].alternativaB
    c.textContent = data.questoes[i].alternativaC
    d.textContent = data.questoes[i].alternativaD

    numero.textContent = data.questoes[i].numQuestao

    let certa = document.querySelector('#correct')
    certa.value = data.questoes[i].correta
    // console.log(resposta)
}

// Começar o Quiz
let questaoAtual = 1
pegarDados(1)

function proximaQuestao(numQuestao) {
    let proxima = parseInt(numQuestao)
    pegarDados(proxima)
}

function verificarSeAcertou(nQuestao, resposta) {
    let numeroDaQuestao = nQuestao.value
    //console.log("Questão "+ numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    // console.log("Resposta do usuário " + respostaEscolhida)

    // usar o fetch para pegar os dados
    pegarDados(numeroDaQuestao)

    let respostaCorrect = correct.value
    // console.log(respostaCorrect)

    if(respostaEscolhida == respostaCorrect) {
        console.log('Acertou!')
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
    } else {
        console.log('Errou!')
        somErro.play()
    }

    quantidadeDeQuestoes = parseInt(total.textContent)
    // console.log("Total " + quantidadeDeQuestoes)

    proxima = parseInt(numero.textContent)+1
    // console.log("Próxima " + proxima)

    setTimeout(function(){
        if(proxima > quantidadeDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 50)

    // atualizar o placar
    atualizarPlacar()
}

function atualizarPlacar() {
    placar.textContent = pontos
}

function fimDoJogo() {
    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s= s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto" + s

    instrucoes.classList.remove('placar')

    // ocultar o article da questao
    questao.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        instrucoes.classList.remove('placar')

        // Reiniciar o jogo
        questao.style.display= 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta.'
    }, 8000)
}


// por convensão sempre deixar uma linha vazia ao final do código