//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var aumento;
	var resultado;

	importe = prompt("Ingrese imprte:","");

	importe = parseInt(importe);

	aumento = importe * 0.21;
	resultado = importe + aumento;

	alert("El imp0rte final es: " + resultado);
	
}

