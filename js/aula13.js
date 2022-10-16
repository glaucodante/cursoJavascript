/* Estruturas de REPETIÇÃO */
// Laço de repetição

let carros = ['Fusca', 'Brasília', 'Gurgel']

let maisCarros = ['Saveiro', 'Hylux', 'Corolla']


/* FOR = para faça */
/* i = iterador, iteração ou index */
// 1º paramentro: 0 é a posição inicial
// 2º paramentro: condição para que aconteça a repetição (enquanto a condição for menor que x...)
// 3º paramentro: contador de incremento ou decremento
for (let i = 0; i < 101; i++) {
    document.write(i + ' ') // conteudo do contador
}

// for (let i = 5; i >= 1; i--) {
//     document.write(i + ' ')
// }

// para percorrer um array
// primeira posição do array sempre é zero
// passar como paramento dentro do () uma função
for (let i = 0; i < carros.length; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

/* FOREACH forEach = PARA CADA 
no JS é uma função de array */
let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melância']

frutas.forEach(function (fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function (carro) {
    document.write(`${carro} <br>`)
})

/* WHILE = enquanto, faça */

// criar a VARIÁVEL de contador FORA do laço
let contador = 0 // variável fora do laço

while (contador < frutas.length) {
    console.log(frutas[contador])
    contador++ // contador +1
}

// aqui o contador esta com o valor 5
console.log(contador)

/* DO WHILE = faça, enquanto */

// criar variavel de contador fora do laço
let iterador = 0 // variável fora do laço

do {
    console.log(maisCarros[iterador])
    iterador++ // contador + 1
} while (iterador < maisCarros.length)

// neste caso o iteraor esta com o valor 3
console.log(iterador)

for (let i = 0; i < maisCarros.length; i++) {
    document.write(`<li>${maisCarros[i]}</li>`)
}


