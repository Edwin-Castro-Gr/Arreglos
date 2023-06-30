/* 1. Crear un array vacío, 
      luego generar 10 números al azar y guardarlos en un array. 
      Mostrar en consola el resultado del array.
*/

function numeroAleatorio(min, max) {
  var num = Math.floor(Math.random() * (max - min));
  return num + min;
}

let array = new Array();

for (let index = 0; index < 10; index++) {
  array.push(numeroAleatorio(0, 10));
}

console.log(array);