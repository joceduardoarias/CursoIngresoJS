function Mostrar()
{

	var contador = 0;
	var numero;
	var negativos = 0;
	var contadorNegativos = 0;
	var positivos= 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";
	
	while(respuesta!="no")
	{	
		contador ++;
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		
		if( numero%2 == 0 && numero != 0)
		{
			contadorPares++;
		}
		if( numero < 0 )
		{
			negativos = negativos + numero;
			 contadorNegativos ++;
		}
		else
		{
			if( numero > 0)
			{
				positivos = positivos + numero;
				contadorPositivos++;
			}
			else
			{
				contadorCeros ++;
			}
		}
	
		respuesta = prompt(" para continuar ingrese si / no");
	}
		promedioNegativos = negativos / contadorNegativos;
		promedioPositivos = positivos / contadorPositivos;
		
		diferencia = positivos - negativos;

		document.write("suma negativos :" + "" +negativos);
		document.write("promedioNegativos:"+""+promedioNegativos);
		document.write("promedioPositivos:"+""+promedioPositivos);
		document.write("cantidad de ceros :"+""+ contadorCeros);
		document.write("contadorPares:"+""+contadorPares);
		document.write("diferencia :"+""+ diferencia);

}//FIN DE LA FUNCIÓN