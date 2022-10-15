/* Estruturas Condicionais e de Escolha no JS */

let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let escolha = document.querySelector('#escolha')

let notaFinal1 = 3
let notaFinal2 = 8
let notaFinal3 = 5

/* CONDICIONAIS */

/* IF */
if (notaFinal1 >= 7) {
    // sit1.textContent = 'Aprovado'
}
// outra forma

/* IF ELSE */
if (notaFinal1 >= 7) {
    sit1.textContent = 'Aprovado'
} else {
    sit1.textContent = 'Reprovado'
}

// outra forma

/*IF TERNÁRIO */
notaFinal2 >= 7 ? sit2.textContent = 'Passou' : sit1.textContent = 'Ficou'

/* IF ENCADEADO ou ANINHADO (um if dentro do outro)*/
// sempre finalizar o encadeamento no else
if (notaFinal3 >= 7) {
    sit3.textContent = 'Aprovado'
} else if (notaFinal3 <= 3) {
    sit3.textContent = 'Reprovado'
} else {
    sit3.textContent = 'Recuperação'
}

// ESCOLHA CASO (estrutura de decisão)
let situacao = ''
// let situacao = 'Aprovado'
// let situacao = 'Reprovado'
// let situacao = 'Recuperação'

// switch = escolha
// case = caso
switch (situacao) {
    case 'Aprovado':
        escolha.textContent = 'Passou de ano'
        break
    case 'Reprovado':
        escolha.textContent = 'Não passou de ano'
        break
    case 'Recuperação':
        escolha.textContent = 'Ainda tem chance'
        break
    default: //se nenhum dos casos acima ocorrer, faça abaixo
        escolha.textContent = 'Estude'
    // default não precisa de break
}