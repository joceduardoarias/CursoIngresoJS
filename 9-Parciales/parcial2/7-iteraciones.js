//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var contador = 0;
	var nota;
	var sexo;
	var acumuladorNotas = 0;
	var promedioNotas;
	var flag = true;
	var maximo;
	var minimo;
	var contadorSexo = 0;

	while( contador < 6)
	{	
		contador ++;
		nota = prompt("Ingrese la nota");
		nota = parseInt(nota);
		
		while( nota < 0 || nota > 10 )
		{
			nota = prompt("Ingrese la nota");
			nota = parseInt(nota);
		}

		sexo = prompt("Ingrese sexo f o m ");

		while( sexo != "m" && sexo != "f")	
		{
			sexo = prompt("Ingrese sexo f o m ");
		}	

		if (flag) 
		{
			flag = false;
			maximo = nota;
			minimo = nota;
		}
		else
		{
			if ( nota > maximo) 
			{
				maximo = nota;
			}

			if (nota < minimo) 
			{
				minimo = nota;
			}
		}

		if (sexo == "m" && nota >= 6) 
		{
			contadorSexo = contadorSexo +1;
		}

		acumuladorNotas = acumuladorNotas + nota;

	}		

	promedioNotas = acumuladorNotas / contador;

	alert(" Promedio de notas: " + " " + promedioNotas);
	alert("nota mas alta: " + " " + maximo);
	alert("nota mas baja: " + " " + minimo);
	alert("catidad de varone con nota >= 6" + "" + contadorSexo);

}

