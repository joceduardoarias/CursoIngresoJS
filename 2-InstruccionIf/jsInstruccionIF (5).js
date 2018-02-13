function Mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

edad = parseInt(edad);

if (edad > 17) {
	
	alert("Usted es no es un adolecente");
}

}//FIN DE LA FUNCIÓN