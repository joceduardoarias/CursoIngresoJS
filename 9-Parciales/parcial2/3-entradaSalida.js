//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var cantidad;

	largo = document.getElementById("ancho").value;
	ancho = document.getElementById("largo").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = 2 * (largo + ancho);
	cantidad = perimetro * 6;

	alert("la cantidad de hilo : " + cantidad);
	
}

