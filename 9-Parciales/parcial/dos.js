function Mostrar()
{
    var importe;
    var aumento;
    var resultado;

    importe = prompt("Ingrese el importe: ", "");

    importe = parseInt(importe);

    aumento = importe * 0.21;
    resultado = importe + aumento;

    document.getElementById("importeFinal").value = resultado;
  
}
