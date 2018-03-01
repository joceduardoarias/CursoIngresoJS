//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importeVentas;
	var contador = 0;
	var maximo;
	var minimo;
	var bandera = true;

	while( contador < 7)
	{	
		contador = contador + 1;
		importeVentas = prompt("Ingrese importe de ventas");
		importeVentas = parseInt(importeVentas);

		while ( importeVentas < 0)
		{
			importeVentas = prompt("Ingrese importe de ventas");
			importeVentas = parseInt(importeVentas);
		}	

		if (bandera) 
		{
			bandera = false;
			maximo = importeVentas;
			minimo = importeVentas;

		}
		else
		{
			if (importeVentas > maximo) 
			{
				maximo = importeVentas;
			}
			
			
			if (importeVentas < minimo) 
			{
					minimo = importeVentas;
			}
				
		}	

	}	

	console.log("Mayor importe de Ventas: " + maximo);
	console.log("Menor importe de ventas: " + minimo);
}

