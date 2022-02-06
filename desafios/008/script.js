function calcular(){
    let n1 = document.querySelector('#a')
    let n2 = document.querySelector('#b')
    let n3 = document.querySelector('#c')
    let resposta = document.querySelector('#resposta')
    a = Number(n1.value)
    b = Number(n2.value)
    c = Number(n3.value)
    let delta = b**2 - 4*a*c
    resposta.innerHTML =` Δ = ${delta}` 
    if ( delta < 0) {
        resposta.innerHTML += ' Não existem raízes reais'
    } else if ( delta === 0) {
         resposta.innerHTML += ' Existem duas raízes reais iguais'
    }
}
function calcular2(){
    let n1b =  document.querySelector('#ab')
    let n2b = document.querySelector('#bb')
    let n3b =  document.querySelector('#cb')
    let resposta2 = document.querySelector('#resposta2')
    ab = Number(n1b.value)
    bb = Number(n2b.value)
    cb = Number(n3b.value)
    let baskara1 = ((-bb) + Math.sqrt(cb))/2*ab
    let baskara2 = ((-bb) - Math.sqrt(cb))/2*ab
    resposta2.innerHTML =  ` X¹ = ${baskara1 } e X² = ${baskara2} `
}