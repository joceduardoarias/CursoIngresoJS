function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while( respuesta != "no")
	{	
		contador++;
		numero = prompt("ingrese numero");
		numero = parseInt(numero);

		if( contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{

		if(numero > maximo)
		{
			maximo = numero;					// sacar minimo o maxmo son dos cosas diferetntes por eso utilizamos dos if distintos.
		}
		if(numero < minimo)
		{
			minimo = numero;
		}

		}
		//contador ++;								puedo ubicar el contador despues de las comparaciones y cambiar el valor del contador == 1 por contador == 0. 
		respuesta = prompt("para salir ingrese; no");
	}

		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN