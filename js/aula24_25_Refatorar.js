/* Desafio - Aula 24_25 - Refatorando a aula 7 */

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


