 
 function Contador(){
     
    var ini = document.getElementById("txtini");
    var fim = document.getElementById("txtfim");
    var passo = document.getElementById("txtpas");

    var res = document.getElementById("res");

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("ERRO, faltam dados!")
    } else {
        res.innerHTML = "Contando ..."

        var i = Number(ini.value);
        var f = Number(fim.value);
        var p = Number(passo.value);

        if (i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `   
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }

       
    }



 }