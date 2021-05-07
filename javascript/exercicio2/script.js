
function Verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert("Ano inválido, verifique os dados digitados");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked) {
            genero = 'homem';
            
            if(idade > 0 && idade <= 5){
                //baby
                img.setAttribute('src', 'bb-b.png');

            } else if (idade >= 6 && idade <= 12){
                //criança
                img.setAttribute('src', 'cri-b.png');

            } else if (idade >= 13 && idade <= 18){
                //teen
                img.setAttribute('src', 'teen-b.png');

            } else if (idade >= 19 && idade <= 25){
                //jovem
                img.setAttribute('src', 'jv-b.png');

            } else if (idade >= 26 && idade <= 40){
                 //adulto
                 img.setAttribute('src', 'ad-b.png');

            } else if (idade >= 31 && idade <= 60){
                //meia idade
                img.setAttribute('src', 'meid-b.png');

            } else{
                //idosos
                img.setAttribute('src', 'id-b.png');

            }

        } else if(fsex[1].checked) {
            genero = 'mulher';

            if(idade > 0 && idade <= 5){
                //baby
                img.setAttribute('src', 'bb-g.png');

            } else if (idade >= 6 && idade <= 12){
                //criança
                img.setAttribute('src', 'cri-g.png');

            } else if (idade >= 13 && idade <= 18){
                //teen
                img.setAttribute('src', 'teen-g.png');

            } else if (idade >= 19 && idade <= 25){
                //jovem
                img.setAttribute('src', 'jv-g.png');

            } else if (idade >= 26 && idade <= 40){
                 //adulto
                 img.setAttribute('src', 'ad-g.png');

            } else if (idade >= 31 && idade <= 60){
                //meia idade
                img.setAttribute('src', 'meid-g.png');

            } else{
                //idosos
                img.setAttribute('src', 'id-g.png');
            }

        }

        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        
    }
}