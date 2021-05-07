
function Carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = "/exercicio1/img/fotomanha.png";
        document.body.style.background = "#d79821";

    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = "/exercicio1/img/fototarde.png";
        document.body.style.background = "#c59f72";

    } else {
        //boa noite
        img.src = "/exercicio1/img/fotonoite.png";
        document.body.style.background = "#424b6a";

    }
}

