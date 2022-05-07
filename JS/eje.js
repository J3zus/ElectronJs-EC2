//Funcion para manipular nuestros datos obtenidos del archivo.html
var GetData = function(){
  
    //Obtener nuestras variables
    var EstaturaF = parseFloat(document.getElementById('estatura').value);
    var PesoF = parseFloat(document.getElementById('peso').value);
     
    //Operaciones
    //IMC = Peso/Estatura^2
    var IMC = PesoF/Math.pow(EstaturaF, 2);

    //Mandar al HTMl
    document.getElementById('resultado').innerHTML = IMC.toFixed(1);
}

//Funcion apra limpiar datos
var ClearData = function(){
    document.getElementById('resultado').innerHTML = 0;
    document.getElementById('estatura').innerHTML = "";
    document.getElementById('peso').innerHTML = "";

    //Dar focus a la caja de texto de estatura
    document.getElementById('estatura').focus();
}