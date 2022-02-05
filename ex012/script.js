function escolher(){
    var n = document.querySelector('#n')
    n1 = Number(n.value)
    var res = document.querySelector('#res')
    var frutas = ['Maça🍎', 'Banana🍌', 'Uva🍇', 'Melão🍈', 'Melancia🍉', 'Pera🍐', 'Manga🥭' , 'Laranja🍊' , 'Morango🍓' , 'Abacaxi🍍']
    res.innerHTML = frutas[n1]
     if ( n1 > 9 || n1 < 0 ) {
        res.innerHTML = 'Não há frutas!'
    }
    
}