/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
	 numeroSecreto = parseInt(((Math.random() * (101 - 1))+1)); 
	 console.log(numeroSecreto);
	

}

function verificar()
{	// primer pedimos el dato de entra que es el numero que ingresa el usuario
	var numero = document.getElementById("numero").value; 
	
	numero = parseInt(numero);
	// el contador se activa inmediatamente pedimos un nuevo numero al usuario
	contadorIntentos++;
	//ahora estructuramos las condiciones que se van a comparar
	
	if (numero == numeroSecreto) 
	{
		switch(contadorIntentos)
		{
			case 1:
				alert("usted es un Psíquico");
			break;
			
			case 2:
				alert("excelente percepción");	
			break;	

			case 3:
				alert("Esto es suerte");
			break;
			
			case 4:
				alert("Excelente técnica");
			break;
			
			case 5:
				alert("usted está en la media");
			break;
			
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("falta técnica");	
			break;	
		}

		if (contadorIntentos >10) 
		{
			alert("afortunado en el amor!!");
		}
	}
	document.getElementById("intentos").value = contadorIntentos;
}