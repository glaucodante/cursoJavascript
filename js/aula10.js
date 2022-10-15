/* Funções no JS - (extra Arrow) */
// Funções ou métodos

let titulo = document.querySelector('h1')
titulo.textContent = 'Funções no Javascript'

let box = document.querySelectorAll('box')

/* Funções sem parametros e sem retorno 
(procedure)
function irá criar uma ação ou conjunto de ações
*/
function olaMundo() {
    document.write('Olá Mundo sem retorno<br><br>')
}

/* Funções sem parametros e COM retorno
(function) */
function olaMundo2() {
    return 'Olá Mundo com retorno <br><br>'
}

// CHAMAR A FUNÇÃO = executar ela
olaMundo()
document.write(olaMundo2())

let x = 2
let y = 1
let mensagem = 'Jesus Cristo é o Salvador.'

/* Funções com paramentros e sem retorno
(procedure) */
function somar(a, b) {
    document.write(a + b + "<br>")
}

/* Funções com paramentors e com retorno
(function) */
function somar2(c, d) {
    return c + d
}

// CHAMAR A FUNÇÃO = executar ela
somar(x, y)
somar(10, 5)

document.write(`<p>${somar2(x, y)}</p>`)
document.write(`<p>${somar2(5, 2)}</p>`)

/* função ANONIMA = não tem nome 
pode ou não ter parametros
pode ou não ter retorno 
*/
// addEventListener = escutador de eventos
titulo.addEventListener('click', function () {
    console.log('Clicou no Título')
})

//  outra forma de CRIAR funções
// ES6 2015 em diante
// ARROW functions = função anonima em outro formato
// arrow = flecha

const olaMundoArrow = () => document.write('Olá Mundo Arrow!!!')

// não precisa usar a palavra function
// não precisa usar a palavra return
// não se usa nome na função
// não precisa colocar {} se for so uma instrução
// se for mais de uma instrução usa-se {}

const olaMundo2Arrow = () => '<p>Olá mundo com arrow2 function</p>'

// CHAMAR A FUNÇÃO = executar ela
olaMundoArrow()

document.write(olaMundo2Arrow())




