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
 	var cantidadLamparas = document.getElementById("Cantidad").value;
 	var marca = document.getElementById("Marca").value;
 	var descuento;
 	var precioFinal;
 	var aumento;

 	cantidadLamparas = parseInt(cantidadLamparas);
 	precio = cantidadLamparas * 35;


 	if (cantidadLamparas > 5) 
 	{
 		descuento = precio * 0.50;
 	}// cantidad > 5
 	else
 	{
 		if (cantidadLamparas == 5) 
 		{
 			if (marca == "ArgentinaLuz") 
 			{
 				descuento = precio * 0.40;
 			}
 			else
 			{
 				descuento = precio * 0.30;
 			}	
 		}
 		else
 		{
 			if (cantidadLamparas == 4) 
 			{
 				if (marca == "ArgentinaLuz" || marca == "FelipeLamparas" ) 
 				{
 					descuento = precio * 0.25;
 				}
 				else
 				{
 					descuento = precio * 0.25;
 				}	
 			}
 			else
 			{
 				if (cantidadLamparas == 3) 
 				{
 					if (marca == "ArgentinaLuz") 
 					{
 						descuento = precio * 0.15;
 					}
 					else
 					{
 						if (marca == "FelipeLamparas") 
 						{
 							descuento = precio * 0.10;
 						}
 						else
 						{
 							descuento = precio * 0.05;
 						}	
 					}	
 				}
 			}// else cantidad == 3	
 		}// else cantidad == 4	
 	}// else cantidadLamparas == 5	
 	
 	precioFinal = precio - descuento;

 	if (precioFinal > 120) 
 	{
 		aumento = precioFinal * 0.10;
 		precioFinal = precioFinal + aumento;
 		alert("Usted pago:" + " " + aumento + " " + "aumento de IIBB.");
 	}
 	else
 	{
 		document.getElementById("precioDescuento").value = precioFinal;
 	}	

 	
}

