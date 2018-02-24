function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;

	while(respuesta != "no")
	{
		contador = contador + 1;

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;

		respuesta = prompt("Para continuar ingrese si, para salir ingrese no");

	}	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN