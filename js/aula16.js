/* Dado Virtual */

// SELECIONAR ELEMENTOS
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function(){
    //adicionar animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // ocultar o botão Sortear
    btnSortear.style.display = 'none'

    // usar setTimeout para executar as ações após 1.75 segundos
    setTimeout(function() {
        // armazenar numero sorteado na variável
        numeroSorteado = getRandomInt(1,6)

        // escrever o número sorteado no console
        console.log(numeroSorteado)

        //definir atributo src com base no numero
        imgDado.setAttribute('src', '../images/dado/'+numeroSorteado+'.png')

        //escrever no parágrafo numeroSorteado
        sorteado.textContent = numeroSorteado

        // exibir o botão Sortear
        btnSortear.style.display = 'inline-block'

        // retirar animação
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750) // 1.75 segundos para poder fazer um novo sorteio 
})

// FUNÇÃO que GERA o número RONDOMICO inteiro
// incluindo o mínimo e o máximo
function getRandomInt(min, max) {
    min = Math.ceil(min) // arredonda para cima  ceil = teto
    max = Math.floor(max) // arredonda ara baixo floor = piso

// getRandomInt => pegar número inteiro rondomico
// Math.random() => para fazer o soreio
// expressão matemática para fazer o sorteio 
// entre o mínimo e o máximo => ath.floor(Math.random() * (max - min + 1)) + min
    return Math.floor(Math.random() * (max - min + 1)) + min
}