function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador <5)
	{	

		contador = contador +1;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		
		while( numero < 1 || numero > 10 )
		
		{
			numero = prompt("Ingrese numero"); // validando por lo general con while aqui en este caso le estoy diciendo al usuario 
											   // que si el numero que ingresa no esta en 1 y 10, el programa le va pedir que  rectifique e ingrese
											   // un numero entre 0 y 10. NOTA : EL contador no cuenta si el numero no esta dentro de 0 y 10. 
			numero = parseInt(numero);
		}	

		acumulador = acumulador +numero;

	}	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN