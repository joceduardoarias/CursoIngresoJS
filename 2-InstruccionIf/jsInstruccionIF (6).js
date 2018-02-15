function Mostrar()
{
//tomo la edad  
     var edad;
    
     edad = document.getElementById("edad").value;

     if(edad < 13){
        
        alert("Usted es un niño");
     
    }else {
        if( edad >= 13 && edad <= 17){

            alert("Usted es un adolecentes");
       
        }else{
            
            alert("Usted es mayor de edad");
        }
    }



}//FIN DE LA FUNCIÓN