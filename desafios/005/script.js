
function calcular(){
const n1 = document.querySelector('#n1')
const res = document.querySelector('#res')
n = Number(n1.value)
let calculo = (n*9/5)+32
res.innerHTML= ` ${calculo} F° `

}