function Mostrar()
{

	var contador=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=1; // inicia en 1 para que no duelva un cero cuando multiplique
	var numero;
	var respuesta='si';

	while(respuesta != "no")
	{
		contador = contador + 1;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if( numero > 0 )
		{
			acumuladorPositivo = acumuladorPositivo + numero;
		}
		else
		{
			if( numero < 0 )
			{
				acumuladorNegativo = acumuladorNegativo * numero;
			}	
		}

		respuesta = prompt("si desea continuar digite si, de lo contrario digite no");	
	}	
	document.getElementById("suma").value=acumuladorPositivo;
	document.getElementById("producto").value=acumuladorNegativo;

}//FIN DE LA FUNCIÓN