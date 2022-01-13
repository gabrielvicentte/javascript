function contar(){
 var ini = window.document.getElementById ('txtn1')
 var fim = window.document.getElementById ('txtn2')
 var passo = window.document.getElementById ('txtn3')
 var res = window.document.getElementById ('res')

 if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
   window.alert ('Faltam dados!')
 } else {
   res.innerHTML = 'Contando:'
   var i = Number(ini.value)
   var f = Number(fim.value)
   var p = Number(passo.value)
  
   for(var c = i; c <= f; c += p) {
     res.innerHTML += `${c} \u{1F449}`
   } 
    
      
    
 } 














}