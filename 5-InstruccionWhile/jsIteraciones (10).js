function Mostrar()
{

	var contador = 0;
	var numero;
	var contadorNegativos = 0;
	var acumuladorNegativos = 0;
	var contadorPositivos = 0;
	var acumuladorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta = "si";

	while(respuesta !="no")
	{
		contador = contador + 1;
		
		numero = prompt("Ingrese numero:");
		numero = parseInt(numero);

		if( numero % 2 == 0)
		{
			contadorPares = contadorPares + 1;
		}

		if(numero < 0)
		{	
			contadorNegativos = contadorNegativos + 1;
			acumuladorNegativos = acumuladorNegativos + numero;
		}
		else
		{
			if (numero > 0) 
			{
				contadorPositivos = contadorPositivos + 1;
				acumuladorPositivos = acumuladorPositivos + numero;
			}
			else
			{
				if(numero == 0)
				{
					contadorCeros = contadorCeros + 1;
				}
			}
		}	

		respuesta = prompt("Desea continuar digite si, de lo contrario digite no.");
	
	}

	promedioPositivos = acumuladorPositivos / contadorPositivos;
	promedioNegativos = acumuladorNegativos / contadorNegativos;
	diferencia = acumuladorPositivos - acumuladorNegativos

	document.write("Suma de negativos : " + " " + acumuladorNegativos );
	document.write("\n Suma de positivos : " + " " + acumuladorPositivos );
	document.write("\n Cantidad de positivos: " +" " + contadorPositivos);
	document.write("\n Cantidad de negativos: " +" " + contadorNegativos);
	document.write("\n Cantidad de positivos: " +" " + contadorPositivos);
	document.write("\n Cantidad de pares: " +" " + contadorPares);
	document.write("\n Cantidad de ceros: " +" " + contadorCeros);
	document.write("\n promedioPositivos : " + " " + promedioPositivos);
	document.write("\n promedioNegativos" + " " + promedioNegativos );

}//FIN DE LA FUNCIÓN