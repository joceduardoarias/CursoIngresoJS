//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = prompt("Ingrese Importe");
	var importeFinal;
	var aumento;

	importe = parseInt(importe);

	aumento = importe * 0.21;
	importeFinal = importe + aumento;

	document.getElementById("importe").value = importeFinal;
	
}

