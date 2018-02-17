/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var precio;
 	var cantidad;
 	var importe;
 	var descuento;
 	var resultado;
 	var marca;
 	var aumento;

 	cantidad = document.getElementById("Cantidad").value;
 	marca = document.getElementById("Marca").value;

 	cantidad = parseInt(cantidad);
	
	precio = 35; 	
 	importe = precio * cantidad;

 	if (cantidad > 5) 
	{
 		descuento = importe * 0.50;		 
 	}
 	else 
	{ 
		if (cantidad == 5) 
		{
 				if (marca == "ArgentinaLuz") 
				{
 					descuento = importe * 0.40; 
 				} 
 				else 
				{
 					descuento = importe * 0.30;
 				}
 		} 
 			else 
			{ 
				if (cantidad == 4) 
				{
 					if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
					{
 						descuento = importe * 0.25;
 					}  
 					else 
					{		
					 	descuento = importe * 0.20;		
 					} 
 				} 
 				else  
				{ 
					if (cantidad == 3) 
					{
 						if (marca == "ArgentinaLuz" ) 
						{
					 		descuento = importe * 0.15;
 						}
 						else 
						{
 								if (marca == "FelipeLamparas" ) 
								{		
					 				descuento = importe * 0.10;
 								} 
 								else 
								{
									descuento = importe * 0.05;				 					
 								} 
 						}

 					} 
 					else 
					{ 
						if (cantidad < 3) 
						{
					 				descuento = importe * 0.00;				 					
 						} 

 					}
 			   }  
 			} 

 	}			 
				resultado = importe - descuento;

		 		if (resultado > 120 ) 
				{
		 			importe = resultado * 0.10;
		 			resultado = resultado + importe;

		 			document.getElementById("precioDescuento").value = resultado;

		 			alert("IIBB Usted pago:" + " " + importe);
		 		} 
				else 
				{
		 			document.getElementById("precioDescuento").value = resultado;
		 		}

}
