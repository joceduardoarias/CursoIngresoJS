function Mostrar()
{

	var numero = prompt("ingrese numero");
	var contadorPares = 0;
	var numerosPares;

	for(contador = 1; contador < numero; contador++)
	{
		if (contador % 2 == 0) 
		{
			contadorPares = contadorPares + 1;
			numerosPares = contador;
			console.log("numerosPares: " + numerosPares);


		}

	}	
		console.log("Cantidad de pares: " + contadorPares);
		
}//FIN DE LA FUNCIÓN