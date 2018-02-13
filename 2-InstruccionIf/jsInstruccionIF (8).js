function Mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;

edad = parseInt(edad);

if (edad > 17 && estadoCivil == "Soltero") {
	alert("Usted es menor de edad y es Soltero");
}

	



}//FIN DE LA FUNCIÓN