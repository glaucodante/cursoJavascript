/* Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['jan', 'fev', 'mar', 'abr']

// ADICIONAR no final push = empurre
produtos.push('Açucar', 'Café', 'Farinha')
codigos.push(40, 50, 60, 70)
meses.push('mai', 'jun', 'ago', '07')

// REMOVER do final pop = estourar (retirar)
produtos.pop()
codigos.pop()
meses.pop()

// ADICIONAR no inicio ushift
produtos.unshift('Maçã', 'Uva')

// REMOVER do inicio
produtos.shift()