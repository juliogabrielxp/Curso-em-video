function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos= data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} min`
    
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#eaf2f4'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ffdfb4'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#01244c'
    }
}