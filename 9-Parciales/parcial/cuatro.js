function Mostrar()
{
    var numero1;
    var numero2;
    var multiplicar;
    var resta;
    var suma;

    numero1 = prompt("Ingresar dato: ","");
    numero2 = prompt("Ingrese dato: ","");

    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);
    
    if(numero1 === numero2){                                                    // if inicial
        multiplicar = numero1 * numero2;                                        // bloque de codigo 1    
        
        document.write("la multiplicacion es:"+ " " + multiplicar);             // bloque de codigo 1                        
    }else{                                                                      // else

        if(numero1 > numero2){                                                  // segunndo if dentro del else            

            resta = numero1 - numero2;                                          // bloque de codigo 2    

            document.write("La resta es:"+ "" + resta);                         // bloque de codigo 2
        }else{                                                                  // else dentro del segundo if    

            suma = numero1 + numero2;                                           // bloque de codigo 3

            document.write("La suma es:"+ "" + suma);                           // bloque de codigo 3
        }
    }
}
// En este caso una condicion if inicial, luego un else{ if(condicion){ bloque de codigo 2}else{bloque de codigo 3}}