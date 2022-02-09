function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')    
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO]VERIFIQUE OS DADOS E TENTE NOVAMENTE!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'bebemasc.png')
            } else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovemmasc.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultomasc.png')
            } else{
                 //idoso
                 img.setAttribute('src', 'idosomasc.png')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src', 'bebefemi.png')
            } else if(idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src', 'jovemfemi.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultofemi.png')
            } else{
                 //idoso
                 img.setAttribute('src', 'idosafemi.png')
            }
        }
        res.style.textAlign ='Center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}