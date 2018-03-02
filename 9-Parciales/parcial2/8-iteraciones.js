//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var contador = 0;
	var contadorPares = 0;
	var respuesta = "si";
	var acumulador = 0;
	var promedio;

	while( respuesta != "no")
	{	
		contador = contador + 1;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		while( numero < 0)
		{
			numero = prompt("Ingrese numero");
			numero = parseInt(numero);
		}	

		if (numero % 2 == 0) 
		{
			contadorPares = contadorPares + 1;
		}

		acumulador = acumulador + numero;
	}

	promedio = acumulador / contador;
	document.write("Promedio: " + " " + acumulador);
	document.write("Suma: " + " " + acumulador);
}

