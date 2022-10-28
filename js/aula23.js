/* RELÓGIO DIGITAL */

let relogio = document.querySelector('#relogio')

let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

let hSmart = document.querySelector('#hSmart')
let mSmart = document.querySelector('#mSmart')
let sSmart = document.querySelector('#sSmart')

let data = document.querySelector('#data')
let semana = document.querySelector('#semana')

// calendário
let dataHora = new Date()
    // console.log(dataHora)   
function moveRelogio() {
    let momentoAtual = new Date()  

    let hora = momentoAtual.getHours()
    let minuto = momentoAtual.getMinutes()
    let segundo = momentoAtual.getSeconds()

    let strHora = new String(hora)
    let strMinuto = new String(minuto)
    let strSegundo = new String(segundo)

// para colocar o zero no segundo = ( 01, 09 , 07... )
// caso contrário não irá aparecer o zero antes do próximo número
    if(strSegundo.length == 1) segundo = "0" + segundo

    if(strMinuto.length == 1) minuto = " 0" + minuto

    if(strHora.length == 1) hora = "0" + hora

    h.textContent = hora
    m.textContent = minuto
    s.textContent = segundo

    hSmart.textContent = hora
    mSmart.textContent = minuto
    sSmart.textContent = segundo

// para atualizar o relógio a cada segundo
    setTimeout("moveRelogio()", 1000)
}

function pegarData() {
    let diaDaSemana = dataHora.getDay()
    let dia = dataHora.getDate()
    let mes = dataHora.getMonth()+1 // se não colocar o +1 = ele pegará de 0 a 11
    let ano = dataHora.getFullYear()

    let strDia = new String(dia)
    let strMes = new String(mes)
// correção igual hora, minuto e segundo
    if(strDia.length == 1) mes = "0" + dia
    if(strMes.length == 1) mes = "0" + mes

    switch(diaDaSemana) {
        case 0:
            diaDaSemana = 'DOM'
            break;
        case 1:
            diaDaSemana = 'SEG'
            break;
        case 2:
            diaDaSemana = 'TER'
            break;
        case 3:
            diaDaSemana = ' QUA'
            break;
        case 4:
            diaDaSemana = 'QUI'
            break;
        case 5:
                diaDaSemana = 'SEX'
                break;
        case 6:
            diaDaSemana = 'SÁB'
            break;            
    } // Fim do switch case
// Para escrever a data no modelo 01/02/2022
    let dataAtual = dia + '/' + mes + '/' + ano

    semana.textContent = diaDaSemana
    data.textContent = dataAtual
}
// ecocar a função
pegarData()

// Formatando 
let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}


// Formas (exemplos) de escritas
/*
let teste = new Date()

console.log(teste.toLocaleString('pt-BR')) // data e hora
console.log(teste.toLocaleString('pt-BR', options)) // dia e data
console.log(teste.toLocaleDateString('pt-BR'))// só data
console.log(teste.toLocaleTimeString('pt-BR')) // só hora
*/

// Pegar a localização do usuário
function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude
        let long = pos.coords.longitude
        url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=25e1221a379462a404be6e17ce2c4c12`
// fetchApi = para consultar uma API externa        
        fetchApi(url)
        console.log(url)
    })
}

function fetchApi(url) {
    let city = document.querySelector('.city')
    let temperature = document.querySelector('#temp')
    let humidity = document.querySelector('#umidad')

    fetch(url).then((data) => {
        return data.json()
    })
    .then((data) => {
        let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1)

        city.textContent = data.name
        temperature.innerHTML = tempInCelsius
        humidity.innerHTML = data.main.humidity
    })
    .catch((err) => {
        city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`
        temperature.innerHTML = `-`
    })
}

getUserPosition()