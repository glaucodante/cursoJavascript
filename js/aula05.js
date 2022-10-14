/* Objetos */

// CRIAR OBJETO
// entre chaves informa-se os elementos que compoem o objeto
let pessoa = {
    nome: 'Paulo', //propriedade (chave)  : valor
    idade: 40,
    peso: 83.5,
    altura: 1.75,
    doadorDeOrgaos: false
}

let produtos = {
    descricao: [], // array vazio
    preco: []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2010]
}

// ACESSAR PROPRIEDADE usando .
// pessoa.nome
// pessoa.idade
// pessoa.peso
// pessoa.altura
// pessoa.doadorDeOrgaos

// ACESSAR PROPRIEDADE usando ['']
// pessoa['nome']
// pessoa['idade']
// pessoa['peso']

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// toFixed(X)
// limita o numero de casas decimais
console.log('IMC: ' + imc.toFixed(2))

// ALTERAR/ATUALIZAR valor de propriedade
pessoa.nome = 'Edson Maia'
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

// usando spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando spreed operator em objetos const
carros.marca = [...carros.marca, 'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano, '1979']