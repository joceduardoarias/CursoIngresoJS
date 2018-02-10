
function Mostrar()
{
    var base;
    var perimetro;

    base = document.getElementById("laBase").value;

    base = parseInt(base);

    perimetro = 4 * base;

    alert("El perimetro es: " + perimetro);

}
