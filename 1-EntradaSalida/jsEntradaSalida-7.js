/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero_1;
    var numero_2;
    var suma;
   numero_1 = document.getElementById("numeroUno").value;
   numero_1 = parseInt(numero_1);
   numero_2 = document.getElementById("numeroDos").value;
   numero_2 = parseInt(numero_2);
   suma = numero_1 + numero_2;
   alert("La suma es: "+ suma);	
}

function restar()
{
    var numero_1;
    var numero_2;
    var resta;
   numero_1 = document.getElementById("numeroUno").value;
   numero_1 = parseInt(numero_1);
   numero_2 = document.getElementById("numeroDos").value;
   numero_2 = parseInt(numero_2);
   resta = numero_1 - numero_2;
   alert("La suma es: "+ resta);
	
}

function multiplicar()
{ 
    var numero_1;
    var numero_2;
    var multiplicar;
   numero_1 = document.getElementById("numeroUno").value;
   numero_1 = parseInt(numero_1);
   numero_2 = document.getElementById("numeroDos").value;
   numero_2 = parseInt(numero_2);
   multiplicar = numero_1 * numero_2;
   alert("La suma es: "+ multiplicar);
	
}

function dividir()
{
    var numero_1;
    var numero_2;
    var  dividir;
   numero_1 = document.getElementById("numeroUno").value;
   numero_1 = parseInt(numero_1);
   numero_2 = document.getElementById("numeroDos").value;
   numero_2 = parseInt(numero_2);
   dividir = numero_1 / numero_2;
   alert("La suma es: "+  dividir);
	
}

