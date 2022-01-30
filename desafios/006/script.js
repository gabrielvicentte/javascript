function calculando(){
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var res = document.querySelector('#res')
    numone= Number(n1.value)
    numtwo= Number(n2.value) 
    var calculo = `${numone/numtwo*100}% `
   res.innerHTML = ` ${numone} de um total de ${numtwo} é ${ calculo}` 
   if (numone == "" || numtwo == "") {
       res.innerHTML = ('Preencha todos os campos!')
   } 
}