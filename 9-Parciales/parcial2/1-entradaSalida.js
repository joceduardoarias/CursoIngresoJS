//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base = document.getElementById("lado").value;
	var perimetro;
	
	base = parseInt(base);
	perimetro = base * 3;
	alert("El perimetro del triangulo es: " + perimetro);
	
}

