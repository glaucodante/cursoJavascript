/* Desafio - Aula 24_25 - Refatorando a aula 7 */

// Elementos da 1ª Carta apenas

let imgFoto = document.querySelector('#foto')
let nome = document.querySelector('#nome')
let nacionalidade = document.querySelector('#nacionalidade')
let idade = document.querySelector('#idade')
let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// link do arquivo json
const url = '../cards.json'

function pegarDados(i) {
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        if(dados.erro) {
            console.log('Erro ao acessar o JSON')
            return
        }
        // console.log(dados)

// Quantidade de lutadores
let qtdLutadores = (dados.lutadores.length)
    console.log('Quantidade de Lutadores ' + qtdLutadores)
// passe o valor de i no paramentro
        atribuirDados2(dados, i)
    })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for  chamada dentro da função pegarDados

function atribuirDados(dados, i) {
    imgFoto.setAttribute('src', '../images/pride/' + dados.lutadores[i].foto)
    nome.textContent = dados.lutadores[i].nome
    nacionalidade.textContent = dados.lutadores[i].nacionalidade
    idade.textContent = dados.lutadores[i].idade + ' anos'
    peso.textContent = (dados.lutadores[i].peso).toString(2) + ' Kg'
    altura.textContent = (dados.lutadores[i].altura).toString(2) + ' m'
}

// Selecionar todos os CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let nomesLutadores = document.getElementsByClassName('nome')
let nacinalidadesLutadores = document.getElementsByClassName('nacionalidade')
let idadesLutadores = document.getElementsByClassName('idade')
let pesosLutadores = document.getElementsByClassName('peso')
let alturasLutadores = document.getElementsByClassName('altura')

// Atribuir DADOS para todos os CARDs
// Selecionamos eles por class, com isso, temos um array para cada elemento
// Agora vamos atribuir para cada posição os valores que pegamos
function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', '../images/pride/' + dados.lutadores[i].foto)
    nomesLutadores[i].textContent = dados.lutadores[i].nome
    nacinalidadesLutadores[i].textContent = dados.lutadores[i].nacionalidade
    idadesLutadores[i].textContent = dados.lutadores[i].idade + ' anos'
    pesosLutadores[i].textContent = dados.lutadores[i].peso + ' Kg'
    alturasLutadores[i].textContent = dados.lutadores[i].altura + ' m'

}

// Usamos as funções createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos img, h2 e h3. Depois colocamos eles dentro do article
// "desenhando em tela cada uma das cartas"
// createElement = cria um elemento html na página
// appendChild = define um elemento como filho
function desenharCarta(id) {
// CARD
    let carta = document.createElement('article')
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

// imagem dentro do CARD 
    let imagem = document.createElement('img')
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', '../images/pride/pride_fc.jpg')

// nome do lutador
    let nomeLutador = document.createElement('h2')
    nomeLutador.setAttribute('class', 'nome')
    carta.appendChild(nomeLutador)
    nomeLutador.textContent = 'Nome'

// nacionalidade do lutador
    let nacionalidadeLutador = document.createElement('h3')    
    nacionalidadeLutador.setAttribute('class', 'nacionalidade')
    carta.appendChild(nacionalidadeLutador)
    nacionalidadeLutador.textContent = 'Nacionalidade'

// idade do lutador
    let idadeLutador = document.createElement('h3')
    idadeLutador.setAttribute('class', 'idade')
    carta.appendChild(idadeLutador)
    idadeLutador.textContent = 'idade anos'

// peso do lutador 
    let pesoLutador = document.createElement('h3')
    pesoLutador.setAttribute('class', 'peso')
    carta.appendChild(pesoLutador)
    pesoLutador.textContent = 'peso Kg'

// altura do lutador
    let alturaLutador = document.createElement('h3')
    alturaLutador.setAttribute('class', 'altura')
    carta.appendChild(alturaLutador)
    alturaLutador.textContent = 'altura m'

    pegarDados(id)
}

// 1ª carta pegamos os dados. Ela já está desenhada na tela
pegarDados(0)

// 2ª carta em diante desenhamos em tela usando as funções
// desenharCarta()
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)
desenharCarta(5)
desenharCarta(6)
desenharCarta(7)
desenharCarta(8)
desenharCarta(9)

