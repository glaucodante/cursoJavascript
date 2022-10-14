/*  DOM - Document Object Model
 Arvore com elementos desde o Browser, a janela do Browser, o documento html que formam os conteudos.
*/

/* navigator
window
    location
    document => html => head e body
    history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.

// .querySelector()
// SELECIONAR O ELEMENTO com base na tag, #id ou .class
// seleciona o primeiro elemento encontrado - tag, #id ou .class
let titulo = document.querySelector('#titulo')
// console.log(titulo)

// SELECIONAR TODOS
// querySelectorAll()

// .textContent 
// propriedade ou atributo textContent
// serve para ACESSAR ou ALTERRAR conteudo
// de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)

titulo.textContent = 'DOM'
// console.log(titulo.textContent)

// .querySelectorAll()
// SELECIONAR TODOS elementos com base na tag, #id ou .class
let testando = document.querySelectorAll('.box')
// console.log(testando)

document.write(testando[0].textContent, '<br>')
document.write(testando[1].textContent, '<br>')
document.write(testando[2].textContent, '<br>')

// testando[0].textContent = 'Texto Alterado com textContent'

// Existem também os métodos
// mas, prefira usar o .querySelector()

/* 

.getElementsByTagName()
.getElementById()
.getElementsByClassName()

*/

let testeTag = document.getElementsByTagName('div')
// console.log(testeTag)
// document.write(testeTag[0].textContent)
// document.write(testeTag[1].textContent)

let testeId = document.getElementById('titulo')
// console.log(testeId)

let testeClass = document.getElementsByClassName('box')
// console.log(testeClass)
// document.write(testeClass[0].textContent)
// document.write(testeClass[1].textContent)

