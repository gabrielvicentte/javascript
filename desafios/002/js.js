function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector ('input#txtano') 
    var res = document.querySelector ('div#res')
   
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente')
     } else {
         var fsex = document.getElementsByName('radsex')
        
         var idade = ano - Number(fano.value)
         var genero = '' 
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         
        
        
        
        }

         if(fsex[0].checked) {
             genero = 'Homem'
            
            } else {
                genero = 'mulher'
            } 
             if (idade <= 10){
                 img.setAttribute ('src', `${genero}/foto-bebe-m.png`)
             } else if (idade < 21) {
                img.setAttribute ('src', `${genero}/foto-jovem-m.png`)

             } else if ( idade < 50 ) {
                img.setAttribute ('src', `${genero}/foto-adulto-m.png`)
             } else  if (idade >=60){
                img.setAttribute ('src', `${genero}/foto-idoso-m.png`)
             }
             if (idade <= 10 && genero == 'mulher') {
                 img.setAttribute ('src', `${genero}/foto-bebe-f.png` )
             } else if ( idade < 21 && genero == 'mulher') {
                img.setAttribute ('src', `${genero}/foto-jovem-f.png` )
 
             } else if ( idade < 50 && genero == 'mulher'){
                img.setAttribute ('src', `${genero}/foto-adulto-f.png` )
             } else if( idade >= 60 && genero =='mulher' ) {
                img.setAttribute ('src', `${genero}/foto-idoso-f.png` )
             }



           res.innerHTML = `Detectamos ${genero} com ${idade} anos `
           res.appendChild(img)
         
         
         
         
         
         
         
         
         
           
         
            } 
                 
           