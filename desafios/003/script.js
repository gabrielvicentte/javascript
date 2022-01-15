function pesquisar() {
    var p = document.getElementById ('pesquisa')
    var pesquisa = (p.value)
    var res = document.getElementById ('res')
  
    
    if (pesquisa == '') {
        res.innerHTML = ('Não há dados para sua pesquisa!')
        
    } else {
        res.innerHTML = (`Infelizmente não possuímos os dados de(a) ${pesquisa}, pois este site é apenas um material de estudo para javascript.`)
    }
} 
