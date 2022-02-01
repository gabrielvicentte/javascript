

function carregar () {
var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var seg = data.getSeconds()


msg.innerHTML = `${hora <10 ? '0' + hora:hora}:${minutos < 10 ? '0'+minutos:minutos}:${seg<10 ? '0' + seg:seg} `

if(hora >= 0 && hora < 12) {
    img.src = 'imagens/manha.jpg'
    document.body.style.backgroundColor = '#DAEEF9'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'imagens/tarde.jpg'
    document.body.style.backgroundColor = '#C86715'
} else {
    img.src = 'imagens/noite.jpg'
    document.body.style.backgroundColor = '#864F64'
}



 
}
setInterval(carregar, 1)

