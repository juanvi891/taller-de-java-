// calcular la ganancia de un automovil
//sumar la ganancia de cada automovil = precio de venta
// calular el impuesto (6%) sobre el precio de venta
// sumar el precio de venta + el impuesto = costo total

// valorres definidos directamente por el enunciado del taller:
const valorvehiculo = 350000000;
const porcentajeganancia = 12;
const porcentajeimpluesto = 6;

// paso 1 calcular cuanto dinero gana el vendedor 
const gananciavendedor = (valorvehiculo * porcentajeganancia) / 100; 

//paso 2 el precio de venta es el valior del vehiculo mas la ganancia 
const precioventa = valorvehiculo + gananciavendedor;

// paso 3 calcular el impuesto sobre el precio de venta (no sobre el vehiculo)
const impuestoventa = (precioventa + porcentajeimpluesto) / 100;

//paso 4 el costo total que paga el comprador es el precio de venta + impuesto 
const costototal = precioventa + impuestoventa;

console.log("valor del vehiculo: $", valorvehiculo);
console.log("porcntaje de ganancia: ", porcentajeganancia, "$");
console.log ("ganancia del vendedor $: ", gananciavendedor);
console.log("precio de venta antes del impuesto $: ", porcentajeimpluesto, "%");
console.log("impuesto sobre la venta $: ", impuestoventa);
console.log("costo total $: ", costototal);
