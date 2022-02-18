let c = 0
function adicionar() {
    c++
    let txt = document.querySelector('#txto')
    let anot =  document.querySelector('#anot')
    texto = (txt.value)
   
    txt.focus()
    if(texto==''){
        anot.innerHTML += ''
    }   else {
         anot.innerHTML +=  `<ul class="del" id="${c}"> <li> <p >${texto}  <input id="botao"  type="button" value="X" onclick="deletar(${c})"></p> </li> </ul> ` 
    txt.value = ''
   
    }
  anot.classList.toggle('animar')   
}
function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
 

}
function apagar(){
   anot.innerHTML = ''
}

