let horas = 0;
let min = 0;
let seg = 0;
let tempo = 1000;
let cron;

function iniciar() {
    cron = setInterval(() => {timer();}, tempo);

}


function pausar () {
    clearInterval(cron);
    

}

function parar (){
    clearInterval(cron);
     horas = 0;
     min = 0;
     seg = 0;
     document.querySelector('#tempo').innerText = '00:00:00';
}
function timer(){
    seg++;
    if (seg==60) {
        seg = 0;
        min++;
    if (min == 60){
        min = 0;
        horas++;
    }

    } 

   var format = (horas <10 ? '0' + horas:horas) + ':' + (min < 10 ? '0' + min:min) + ':' +(seg < 10 ? '0' + seg:seg)
    document.getElementById('tempo').innerText = format;
   
}
