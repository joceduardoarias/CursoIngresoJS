function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador = contador + 1;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);

		if (contador == 1) 
		{
			maximo = numero;
			minimo = numero;
		} // if ( contador == 1)
		else 
		{
			if (numero > maximo) 
			{
				maximo = numero;
			}

			if (numero < minimo) 
			{
				minimo = numero;
			}
		}

		respuesta = prompt( "si desea continuar digite si, de lo contrario marque no");

	
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN