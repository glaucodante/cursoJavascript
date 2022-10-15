/* Desafios da Aula 06*/

// let info = informacao
document.write('<h2>Informação</h2>', '<br>')

let lutador = {
    name: 'Fedor Vladmirovich Emilianenko',
    nacionalidade: 'Russo',
    idade: 44,
    peso: 106,
    altura: 1.83
}

// document.write('Lutador: ', lutador.name, '<br>')
document.write(`Lutador: ${lutador.name} <br>`)
document.write('Nacionalidade: ', lutador.nacionalidade, '<br>')
document.write(`Idade: ${lutador.idade} anos <br>`)
document.write('Peso: ', lutador.peso, ' Kg', '<br>')
document.write('Altura: ', lutador.altura, 'm', '<br>', '<br>',) //'<hr>'

document.write('<h2>Frase do Dia</h2>', '<br>')

// let date = "10/09/2021"
// document.write(date, '<br>')

const dia = 10
const mes = 09
const ano = 2022

document.write(`${dia}/${mes}/${ano} <br>`)

let frase1 = "Seja curioso."
let frase2 = " Leia de tudo."
let frase3 = " Tente coisas novas."
let frase4 = " O que as pessoas chamam de inteligência se resume a esforço e muita dedicação. <br>"
let autor = "Aaron Swartz"

document.write(frase1, frase2, frase3, frase4, autor)

document.write('<h2>Array de Meses do Ano</h2>', '<br>')

const anoMeses = {
    meses: [
        'jan', 'fev', 'marc', 'abr',
        'mai', 'jun', 'jul', 'agos',
        'set', 'out', 'nov', 'dez'
    ]
}

document.write(
    `${anoMeses.meses[0]}, ${anoMeses.meses[1]}, 
    ${anoMeses.meses[2]}, ${anoMeses.meses[3]}, 
    ${anoMeses.meses[4]}, ${anoMeses.meses[5]},
    ${anoMeses.meses[6]}, ${anoMeses.meses[7]}, 
    ${anoMeses.meses[8]}, ${anoMeses.meses[9]}, 
    ${anoMeses.meses[10]}, ${anoMeses.meses[11]} <br> <br>`)

document.write('<h2>Objeto Jogo</h2>', '<br>')

let jogo = {
    titulo: 'League Of Legends - LOL',
    desenv: 'Riot Games',
    anoLancamento: 2009

}

document.write("Título: ", jogo.titulo, '<br>')
document.write("Desenvolvido por: ", jogo.desenv, '<br>')
document.write("Ano de Lançamento: ", jogo.anoLancamento, '<br>')





