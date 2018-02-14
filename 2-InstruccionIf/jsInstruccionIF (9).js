function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroAleatorio;


	// numeroAleatorio = Math.random(); // Con este metodo buscamos numero aleatorios entre 0 y 1, pero sin incluir el 1.

	numeroAleatorio = ( Math.random() * 9 ) + 1;

 	numeroAleatorio = Math.round(numeroAleatorio);

	alert("Numero aleatorio: " + numeroAleatorio );
	
	console.log(numeroAleatorio);

}//FIN DE LA FUNCIÓN