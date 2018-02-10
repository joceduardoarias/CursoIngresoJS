function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    var cantidad;

    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = 2 * ( largo + ancho );
    cantidad = perimetro * 3;
    
    alert("La cantidad de hilo es: " + cantidad);

}
