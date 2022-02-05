function inserir(num){
    let numero = document.querySelector('#valor').innerHTML;
    document.querySelector('#valor').innerHTML = numero + num
}
function deletetotal() {
    document.querySelector('#valor').innerHTML = ('')
}
function deletar() {
    let res = document.querySelector('#valor').innerHTML
    document.querySelector('#valor').innerHTML = res.substring(0, res.length-1)
}
function calculo(){
    let res = document.querySelector('#valor').innerHTML
    document.querySelector('#valor').innerHTML = eval(res)
}