for (let i = 0; i > 10; i++){
    console.log(i)
}

let lista = [1,3,5,3,2,5,2,6,3566];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i]*2)
}

//Estructura for...of
for(let indice of lista){
    console.log(indice)
}

//Esctrucuta forEach
//lista.array.forEach(element => {
//    console.log(element)
//});

let persona = {
    nombre: "Rodrigo", 
    apellido: "Castiblanco",
    edad: 28,
    developer: true
}

for (let propiedad in persona){
    console.log(propiedad +":")
    console.log(persona[propiedad])
}

/* let array = []
for (let index = 0; index < 10; index++) {
    const element = array[index];
    console.log(element)
    
} */


//Ejercicio 10! for
var mult = 1
for (let i = 1; i < 10; i++) {
    mult = mult * i;
    console.log(mult)
}

//Ejercicio 10! While
let i = 1;
let max = 10;
let sumador1 = 1;
while(i < max){
    sumador1 = sumador1 * i
    console.log(sumador1)
    i++
}

//Ejercicio 10! While-if-breack
let t = 1;

let sumador3 = 1;
while(true){
    sumador3 = sumador3 * i
    console.log(sumador3);

    if(sumador3 > 362880){
        break
    }
}