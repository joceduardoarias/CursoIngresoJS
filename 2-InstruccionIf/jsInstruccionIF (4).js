function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

edad = parseInt(edad);

if (edad >= 13 && edad <= 17) {
	
	alert("Usted es un adolecente");
}


}//FIN DE LA FUNCIÓN