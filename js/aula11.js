/* Eventos no JS */

function carregou() {
    console.log('Página carregada com sucesso!')
}

function focou() {
    console.log('Foco no título.')
}

function rolouPagina() {
    console.log('Página rolando.')
}

function focoNoCampo() {
    console.log('Foco no campo de texto.')
}

function semFocoNoCampo() {
    console.log('Saiu o foco do campo de texto')
}
// acessado a caixa de texto por meio da variavel letras
let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover a seta do mouse esta no element
// no html irei utilizar o onmuseover
// no JS somente o mouseover (atenção nessa diferença) 
botao1.addEventListener('mouseover', function () {
    console.log('Foco no botão 1')
})

// focusout 
botao2.addEventListener('mouseover', function () {
    console.log('Foco no botão 2')
})
// blur quando sai o focu
/*botao2.addEventListener('blur', function () {
    console.log('Foco no botão 2')
})*/

// 1 click do mouse
// para evitar que o botão submit(Enviar) faça o refresh da página que é o comportamento padrão
// usa-se o event.preventDefault() = no caso do event faça a prevenção do comportamento padrão
// ou seja, não faça o comportamento padrão
// não quero que o formulário seja enviado
botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault() // previnir o comportamento padrão
    console.log('Clicou no botão Enviar')
})
