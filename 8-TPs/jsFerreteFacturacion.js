/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno = document.getElementById("PrecioUno").value;
	var precioDos = document.getElementById("PrecioDos").value;
	var precioTres = document.getElementById("PrecioTres").value;
	var resultado;
	var promedio;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres =parseInt(precioTres);
	
	resultado = precioUno + precioDos + precioTres;

	alert(" la suma de los precios es: " + " " + resultado );
}
function Promedio () 
{
	var precioUno = document.getElementById("PrecioUno").value;
	var precioDos = document.getElementById("PrecioDos").value;
	var precioTres = document.getElementById("PrecioTres").value;
	var promedio;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres =parseInt(precioTres);
	
	promedio = (precioUno + precioDos + precioTres) / 3;

	alert(" el promedio de precios es: " + " " + promedio);
	
}
function PrecioFinal () 
{
	var precioUno = document.getElementById("PrecioUno").value;
	var precioDos = document.getElementById("PrecioDos").value;
	var precioTres = document.getElementById("PrecioTres").value;
	var precioMasiva;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres =parseInt(precioTres);
	
	precioMasiva = (precioUno + precioDos + precioTres) * 1.21 ;

	alert(" el promedio de precios es: " + " " + precioMasiva);
}