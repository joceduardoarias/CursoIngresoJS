function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;

	numero = parseInt ( ( ( Math.random () * (11 - 1) ) + 1) );

	if( numero >= 9 ){

		
		console.log("EXCELENTE"+ numero);

	}else if( numero >= 4){

		console.log("APROBO" + numero);
	}else{

		console.log("Vamos, la proxima se puede" + numero);
	}

}//FIN DE LA FUNCIÓN