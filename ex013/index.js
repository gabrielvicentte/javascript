let botao1 = document.querySelector('#botao1')
let imgs = document.createElement('img')
let res = document.querySelector('#res')

function verificar() {
    let num = Math.floor(Math.random()*11)+1 
    imgs.setAttribute('id', 'fotos')   
    if(num==1){
        imgs.setAttribute('src','imgs/f1.jpg') 
    } else if (num == 2){
        imgs.setAttribute('src','imgs/f2.jpg')
    } else if (num == 3){
        imgs.setAttribute('src','imgs/f3.jpg')
    }else if (num ==5){
        imgs.setAttribute('src','imgs/f5.jpg')
    } else if ( num == 6){
        imgs.setAttribute('src','imgs/f6.jpg')
    } else if (num == 7){
        imgs.setAttribute('src','imgs/f7.jpg')
    } else if (num ==8 ){
        imgs.setAttribute('src','imgs/f8.jpg')
    } else if (num == 9){
        imgs.setAttribute('src','imgs/f9.jpg')
    } else if(num == 10 ){
        imgs.setAttribute('src','imgs/f10.jpg')
    } else if( num == 11){
        imgs.setAttribute('src','imgs/f11.jpg')
    } else if (num == 12){
        imgs.setAttribute('src','imgs/f12.jpg')
    }
    res.appendChild(imgs)

} 


   