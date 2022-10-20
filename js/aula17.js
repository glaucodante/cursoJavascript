/* Número Secreto */

let numeroSecreto = 0
// let numeroDeChances = 3
let contador = 1
let min = 1
let max = 10
let situacao = ''

// selecionar elementos
let inputNumero = document.querySelector('#inputNumero') // input numero
let btnChutar = document.querySelector('#btnChutar') // botao chutar
let aviso = document.querySelector('#aviso') // paragrafo aviso
let musica = document.querySelector('#musicaDeFundo')

// FUNÇÕES ou MÉTODOS para CONTROLAR O JOGO
function gerarNumeroSecreto() {
    // gerar numero secreto
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(numeroSecreto)
}

function bloquearBtnChutar() {
    btnChutar.setAttribute('disabled', 'disabled')
    btnChutar.style.background = '#ccc'
    btnChutar.style.cursor = 'not-allowed'
    
}

function ativarBtnChutar() {
    btnChutar.removeAttribute('disabled')
    btnChutar.style.background = '#222'
    btnChutar.style.cursor = 'pointer'
}
// validação do numero digitado
function validarNumeroDigitado(numero) {
    if(numero <= 0 || numero > 10) { 
        console.log('Tentativa inválida!')
        aviso.classList.add('errou')
        mensagemRapida('Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.')
        bloquearBtnChutar()
        inputNumero.value = ''
    } else {
        console.log('Número Válido')
    }
}
/* METODOS PARA MANIPULAR A MÚSICA */
function tocarMusicaDeFundo() {
    musica.play()
}
function ativarDesativarMusica() {
   if(musica.muted) {
    musica.muted = false;
   } else {
    musica.muted = true;
   }
}
function pausarMusicaDeDundo() {
    musica.pause()
    musica.currentTime = 0;
}

function jogar() {
    console.log('Jogando')
    verificarSeAcertou()
}
function mensagemRapida(mensagem) {
    aviso.textContent = mensagem
    setTimeout(function() {
        aviso.textContent = ''
        aviso.classList.remove('acertou')
        aviso.classList.remove('errou')
        inputNumero.value = ''
    }, 3000)
}

function gameOver(situacao) {
    switch (situacao) {
        
        case 'Acertou':
            aviso.classList.add('acertou')
            mensagemRapida('Acertou, o número secreto era ' + numeroSecreto)
            break
        
        case 'Chute maior':
            mensagemRapida('Chute maior que o número secreto')
            aviso.classList.add('errou')
            break
        case 'Chute menor':
            aviso.classList.add('errou')
            mensagemRapida('Chute menor que o número secreto')
            break

            default:
                console.log('Informe a Situação')
    } // fim do switch case
}

function verificarSeAcertou() {
    // pegar o valor do input número digitado e converter para inteiro
    // parseInt => para converter o número para inteiro
    chute = parseInt(document.querySelector('#inputNumero').value)

    console.log('Nº do Chute ' + contador)
    console.log('Chute ' + chute)

    if(numeroSecreto === chute) {
        console.log('Acertou')
        situacao = 'Acertou'
        gameOver(situacao)
        gerarNumeroSecreto() // gerar novo numero secreto 
    } else if (chute > numeroSecreto) {
        console.log('Chute maior')
        situacao = 'Chute maior'
        gameOver(situacao)
    } else if (chute < numeroSecreto) {
        console.log('Chute menor')
        situacao = 'Chute menor'
        gameOver(situacao)
    } else {
        console.log('Impossível verificar se acertou!')
    }

}