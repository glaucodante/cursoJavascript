/* Calculadora de IMC */

/* Manipulação de dados em formulário com JS */

/* selecione todos os elementos que deseja manipular */
//cx = caixa
let formulario = document.querySelector('form') //controlar ações do campo formulário
let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

/* REGRAS DE NEGÓCIOS */

/* Para pegar os dados que estão dentro das caixas use a propriedade .VALUE,
mas antes determine um evento como referência para pegar os dados */

/* Adicione um escutador para o btnEnviar */
// Uma função anônima para pegar os valores 
// Calcular o imc
// e = event
btnEnviar.addEventListener('click', function (e) {
    //pegar os values de cada input
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1) // cálculo do imc


    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    // SAIDA DE DADOS
    // alert é usado caso queira que a mensagem aparece via janela do navegador, não recomendado.
    /* alert(
        'Nome ' + nome + '\n' +
        'Idade ' + idade + ' anos\n' +
        'Peso ' + peso + 'Kg\n' +
        'Altura ' + altura + 'm\n' +
        'IMC ' + imc + ' ' +
        sit
    )
    */

    // criar o objeto pessoa

    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc: imc,
        sit: sit
    }

    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + " anos"
    dados[3].textContent = pessoa.peso + " Kg"
    dados[4].textContent = pessoa.altura + " m"
    dados[5].textContent = pessoa.imc + " " + pessoa.sit

    // prevenir o comportamento padrão do submit
    e.preventDefault()

})


function situacaoDoPeso(imc) {
    if (imc < 18.5) {
        situacao = 'Baixo Peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso Normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}