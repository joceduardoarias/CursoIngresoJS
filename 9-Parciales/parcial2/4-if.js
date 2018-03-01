//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1 = prompt("Ingrese numero 1");
	var numero2 = prompt("Ingrese numero 2");
	var multiplicacion;
	var resta;
	var suma;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	if (numero1 == numero2) 
	{
		multiplicacion = numero1 * numero2;

		document.write(" la multiplicacion es: "  + multiplicacion);
	}
	else
	{
		if (numero1 > numero2) 
		{
			resta = numero1 - numero2;

			document.write("La resta es: " + resta);
		}
		else
		{
			suma = numero1 + numero2;

			document.write("La suma es: " + suma);
		}	
	}	
	

}

