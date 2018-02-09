/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numero_1;
    var numero_2;
    var  modulo;

   numero_1 = document.getElementById("numeroDividendo").value;
   numero_2 = document.getElementById("numeroDivisor").value;
   
   numero_1 = parseInt(numero_1);
   numero_2 = parseInt(numero_2);
   
   modulo = numero_1 % numero_2;
   
   alert("La resto es: "+  modulo);
	
}
