/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = document.getElementById("Largo").value;
	var ancho = document.getElementById("Ancho").value;
	var perimetro;
	var cantidadAlambre;
	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetro = (2 * largo) + (2 * ancho);
	cantidadAlambre = perimetro * 3;

	alert("Cantidad de alambre: " + " " + cantidadAlambre);

}
function Circulo () 
{
	var radio = document.getElementById("Radio").value;
	var circunferencia;
	var cantidadAlambre;

	radio = parseInt(radio);

	circunferencia = Math.PI * Math.pow(radio , 2);
	cantidadAlambre = circunferencia * 3;

	alert("la cantidad de Alambre: " + " " + cantidadAlambre);
}
function Materiales () 
{
	var largo = document.getElementById("Largo").value;
	var ancho = document.getElementById("Ancho").value;
	var radio = document.getElementById("Radio").value;
	var circunferencia;
	var perimetro;
	
	radio = parseInt(radio);
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	
	/* Para saber la cantidad de bolsas de cada material primero debemos calcular la superficie total 
	  de cada terreno */

	circunferencia = Math.PI * Math.pow(radio , 2); // Math.PI es la constante pi = 3,14...n; 
	perimetro = (2 * largo) + (2 * ancho);			// Math.pow( base , exponente) es la forma elevar una cantidad a un exponente.

	/* Luego lo dividimos las superficies en entre los materiales bolsa o cal lo cual arroja
	   las cantidades necesarias de cada uno  */

	alert("cantidad rectangulo bolsas de cemento:"+" "+ perimetro / 2 + "\n" + "cantidad rectangulo bolsas de cal:" + perimetro / 3);
	alert("cantidad Circulo bolsas de cemento:"+" "+ circunferencia / 2 + "\n" + "cantidad Circulo bolsas de cal:" + circunferencia / 3);

	/* No es recomendable hacer operaciones matematicas en las instrucciones de layout,
	   pero en este caso las ejecute juntas por ser un codigo poco complejo */
}