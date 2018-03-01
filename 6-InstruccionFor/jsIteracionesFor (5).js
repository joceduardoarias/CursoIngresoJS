function Mostrar()
{

	var numero;

	for(contador = 0; ; contador++) // otra forma for( ; numero != 9; )
	{
		numero = prompt("Ingrese numero");  // como en el while tengo estructura de entrada 

		if (numero == 9) // Estructura de salida le pone un limite al bucle infinito;				
		{
			break;
		}
	}	


}//FIN DE LA FUNCIÓN