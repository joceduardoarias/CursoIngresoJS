function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            
            alert("Falta para el invierno");
            break;
        
        case "Julio":            
        case "Agosto":
        
            alert("Abrigate hace frio");
            break;    

        case "Septiembre":        
        case "Octubre":                     
        case "Noviembre":               
        case "Diciembre":
                        
                alert("Ya pasamos el frio, hace calor");
                break;        
    }





}//FIN DE LA FUNCIÓN