//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho = document.getElementById("ancho").value;
	var largo = document.getElementById("largo").value;
	var cantidadHilo;

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	cantidadHilo = (largo *ancho) * 6;

	alert("cantidad  de Hilo: " + cantidadHilo + "metros");
}

