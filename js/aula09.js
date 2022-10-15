/* DOM + alterar CSS */

let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 - Manipular o CSS'

// outra forma
// serve para ACESSAR ou ALTERRAR conteudo
// titulo.innerHTML = 'Aula Manipular o css'

// selecionando a imagem pelo JS
let imagem = document.querySelector('#foto')
// set.Attribute = setar, configurar um atributo
// 2 paramentros => nome do atributo a ser configurado e valor que será definido
imagem.setAttribute('src', '../images/pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = 'red';
// outra forma
// titulo.style.color = "red";

document.querySelector('h1').style.backgroundColor = '#000';
// outra forma
// titulo.style.backgroundColor = '#000';

document.querySelector('h1').style.borderBottom = '2px solid red';

document.querySelector('h1').style.padding = '0.625rem';

document.querySelector('h1').style.borderRadius = '5px';

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')

// para remover o setAttribute usa-se o removeAttribute
// box[0].removeAttribute('class')

/////////// MODOS DE COR /////////////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')


// Escutador de eventos para executar a função abaixo
btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    // event.preventDefault();
    console.log('modo dark')
    tela.classList.add('dark');
    tela.classList.remove('light');
}

function modoLight() {
    // event.preventDefault();
    console.log('modo light')
    tela.classList.remove('dark');
    tela.classList.add('light');

}
