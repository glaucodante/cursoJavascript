/* Conversor de Moedas */
/* Selecionar os elementos */
// seleciona o input com o número digitado
let valorDigitado = document.querySelector('#valorEmReal')

// seleciona os elementos radios (criar um array deles)
// foreignCurrency = moeda estrangeira
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// seleciona os botões
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

// Cotações do dia 21/09/2021 
let valorDoDolar = 5.31
let valorDoEuro = 6.23
let valorDaLibra = 7.26
let valorDoBitcoin = 229762.85
let valorEmReal = 0

/*
// Cotações do dia 22/10/2022 
let valorDoDolar = 5.22
let valorDoEuro = 5.10
let valorDaLibra = 5.85
let valorDoBitcoin = 99356.80
let valorEmReal = 0
*/

let moedaEstrangeira = ''
let moedaConvertida = ''

// Mensagem formatada para exibir valores monetários
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    console.log('Moeda Convertida ' + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmReal).toLocaleString('pt-BR', 
    {style: 'currency', currency: 'BRL'}) + ' convertido em ' + moedaEstrangeira + ' é ' + moedaConvertida
}

/* Verificar se foi digitado algum valor para poder converter */
function bloquearBotao() {
    if(valorDigitado.value == 0 || '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    } 
}

// Reativar Botão
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Não ativou')
    }
}

// verificar qual o botão radio está marcado checked ou checked == true
// vincular a verificação a um evento, click no botão converter
btnConverter.addEventListener('click', function () {
    // FAZER o parseFloat dos valores monetários ( converter String para Float)
    valorEmReal = parseFloat(valorDigitado.value)

    console.log('Escolheu a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

/* Use uma estrutura de escolha caso para esolher
    qual é a moeda que foi selecionada
*/

// {moedaConvertida.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}

// CONVERSÃO DE MOEDAS
// Operação básica => Pegar a moeda estrangeira e dividir pelo valor em real

// toLocaleString = faz a formatação para o valor monetário

    switch(moedaEstrangeira) {
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
        break

        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'}))
        break

        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'}))         
        break

        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
        break

        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
// isNaN = valor não númerico
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converta.'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})




})




