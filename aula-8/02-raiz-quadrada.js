window.onload = function (e) {

    var btn1 = document.getElementById("calc")


    btn1.onclick = function(e){
        var numero = parseInt(document.getElementById("txt1").value);

        var calcular = raizQuadrada(numero)

        alert(calcular);
    }
       
};

function raizQuadrada(numero) {
  var raiz = numero * numero;

  return(raiz)

}
