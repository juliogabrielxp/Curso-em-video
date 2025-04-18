function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!') 
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','bebe-h.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src','jovem-h.png')

            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src','adulto-h.png')
            } else {
                img.setAttribute('src','idoso-h.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src','jovem-m.png')

            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src','adulto-m.png')
            } else {
                img.setAttribute('src','idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} <br>anos</br>`
        res.appendChild(img)
    } 
}