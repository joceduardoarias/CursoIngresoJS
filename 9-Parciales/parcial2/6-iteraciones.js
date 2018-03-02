//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador = 0;
	var importeVentas;
	var max;
	var min;
	var flag = true;

	while( contador < 7 )
	{
		contador ++;
		importeVentas = prompt("Ingrese importe de ventas");
		importeVentas = parseInt(importeVentas);

		while( importeVentas < 0 )
		{
			importeVentas = prompt("Ingrese importe de ventas");
			importeVentas = parseInt(importeVentas);
		}	

		if ( flag ) 
		{
			flag = false;

			max = importeVentas;
			min = importeVentas;
		}
		else
		{
			if (importeVentas > max) 
			{
				max = importeVentas;
			}
			
			{
				if (importeVentas < min) 
				{
					min = importeVentas;
				}
			}	
		}
	}	
	
	alert("El maximo es: " + "" + max);
	alert("El minimo es: " + "" + min);
}

