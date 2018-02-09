/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero_1;
    var numero_2;
    var suma;
    
    numero_1 = document.getElementById("numeroUno").value;
    numero_2 = document.getElementById("numeroDos").value;
   
    numero_1 = parseInt(numero_1);
    numero_2 = parseInt(numero_2);

    suma = numero_1 + numero_2;
    
    alert("La suma es: " + suma);

    // asi como esta escrito este codigo es una forma ordenada y limpia.
}

