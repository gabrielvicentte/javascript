function somar() {
    var n1 = document.querySelector ('#n1')
    var n2 = document.querySelector ('#n2')
    var res = document.querySelector ('#res')
    n1  = Number(n1.value)
    n2= Number(n2.value)
    res.innerHTML = n1 + n2
    

} 
function subtrair(){
   var n1 = document.querySelector ('#n1')
    var n2 = document.querySelector ('#n2')
    var res = document.querySelector ('#res')
   n1  = Number(n1.value)
    n2= Number(n2.value)
    res.innerHTML = n1 - n2

} 
function multiplicar(){
   var n1 = document.querySelector ('#n1')
    var n2 = document.querySelector ('#n2')
    var res = document.querySelector ('#res')
    n1  = Number(n1.value)
    n2  = Number(n2.value)
    res.innerHTML = (n1 * n2)

}
function dividir(){
   var n1 = document.querySelector ('#n1')
    var n2 = document.querySelector ('#n2')
    var res = document.querySelector ('#res')
   n1  = Number(n1.value)
    n2= Number(n2.value)
    res.innerHTML = (n1 / n2)
}