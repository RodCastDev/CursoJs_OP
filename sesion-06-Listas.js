// Como trabajar con listas  (arrays, arreglos, vectores...)
let var1 = {di: false}
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]
console.log(array);

//Acceder a los valores de un array a traves de su posicion
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Metodos para introducir nuevos valores en nuesras arrays
// .pusch() .unshift() -> Mutan el valor de nuestr array 
array.push("final", 45, 100, false);
console.log(array);

//Unshift() ->Unshift
array.unshift("inicio", 87, 99);
console.log(array);

//Metodos para eliminar valores en nuestros arrays
//.pop() .shift() -> Mutan el valor del array

let array2 = [1,3,"Hola",false]
//Valores al final -> Pop
array2.pop()
console.log(array2)

//Valores al principio - .shift()
array2.shift()
console.log(array2)

//Metodo para eleminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)

//Eliminar valores .splice(indice, numValoresAEliminar)
const array3 = [1,2,3,4,5,6]

array3.splice(2,3)
console.log(array3)

//Añadir valores .splice(indice, 0, ValoresAañadir)
array3.splice(2,0, "Hola")
console.log(array3)

//Modificar valores .splice(indice, 0, ValoresAmodificar)
array3.splice(2,1,80)
console.log(array3)

//-----------------------------------------------------//

//Como unir dos listas
const lista1 = ["Hola",2,false,null]
const lista2 = ["adios",8,true,undefined]

let lista1y2 = (lista1.concat(lista2));
console.log(lista1y2);

//Como unir dos listas con el factor de propagacion

console.log(...lista1y2)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

//ERROR!! Mal entendido el concepto del factor de propagacion
const lista5 = [lista1,lista2]
console.log(lista5)

//--------------------------------------------//

//Como obtener una lista a partir de otra .slice()
const array6 = ["hola",1,2,3,true,null,"adios"]
console.log(array6)

//EL METODO .slice() NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
//let alrray = array6.reverse()
console.log(array6.slice(3,6))

const array7 = array6.slice(2,-2)
console.log(array7)