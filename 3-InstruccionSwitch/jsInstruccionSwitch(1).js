function Mostrar()
{
    //tomo la edad  
    var mesDelAño; 
    
    mesDelAño= document.getElementById('mes').value;

    switch(mesDelAño)
    {
        case "Enero":
            
            alert("que comiences bien el año");
            break;
        
        case "Marzo":
            
            alert("a clases");
            break;
        
        case "Julio":
        
            alert("se vienen la vacaiones");
            break;
        case "Diciembre":
        
            alert("Felices fiestas");
            break;
    }




}//FIN DE LA FUNCIÓN