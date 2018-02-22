function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0; // sumar otra variable

	while(contador < 5)
	{
		contador = contador + 1;

		numero = prompt("ingrese numero");
		
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("ingrese numero");
			
			numero = parseInt(numero);
		}
		
		acumulador = acumulador + numero;
	}



	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN