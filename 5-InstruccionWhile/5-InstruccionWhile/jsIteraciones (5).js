function Mostrar()
{

    var sexo;
/*
    sexo = prompt("ingrese f ó m .");

    while( (sexo != "f" && sexo != "m") && sexo != null )
    {
        sexo = prompt("ingrese f ó m .");
    }

    document.getElementById("Sexo").value = sexo;
    */ 
    var sexo;

    sexo = prompt("ingrese f ó m .");

    while( sexo != "f" && sexo != "m")
    {   
        if(sexo= null)
        sexo = prompt("ingrese f ó m .");
        break;
    }

    document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN

/* 
    var sexo;

    sexo = prompt("ingrese f ó m .");

    while( sexo != "f" && sexo != "m")
    {   
        if(sexo= null)
        sexo = prompt("ingrese f ó m .");
        break;
    }

    document.getElementById("Sexo").value = sexo;
*/