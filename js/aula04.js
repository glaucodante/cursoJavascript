/* Array */

let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30) // modo antigo de escrita do código
let meses = ['jan', 'fev', 'mar', 'abr']
meses[0] = 'janeiro'

var test = Array(10)
test[0] = "oi"
test[9] = "Tudo bem?"
test[10] = "opa!"

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

// REMOVER do inicio shift
produtos.shift()

// REMOVER valores de uma posição específica splice
// Splice = emendar
// posição inicial, quantos remover
// informar a posição do índice (nº) do elemento e o nº de elementos a serem removidos
// o índice dos elementos começam em 0 (zero)
// A partir do índice 1 vou REMOVER três elementos (exemplo abaixo)
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// posição inicial, quantos remover
// Está copiando meses em meses1
let meses1 = meses.slice()

let meses2 = meses.slice(0, 3)

// VER TAMANHO do array length = comprimento (tamanho)
// length é uma propriedade do array
meses.length
meses1.length
meses2.length

// spreed operator ... (é uma reticência)
// COPIAR
let teste = [...produtos, 'ovo', 'pera']


