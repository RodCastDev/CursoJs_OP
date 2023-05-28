//Bifurcaciones if...else
let saldo = 50;
let efectivo = 100;

if(efectivo<saldo){
    console.log("Puedes sacar dinero")
}

if(efectivo< saldo){
    console.log("Puedes sacar dinero")
}else{
        console.log("saldo insuficiente")
}

//If else + if else
let nota1 = 0;

if(nota1 === 5){
    console.log("Enhorabuena, has obtenido un sobresaliente ");
}else if (nota1 ===4){
    console.log("Buen trabajo, pero podrias haberlo hecho mejor");
}else if(nota1 ===3){
    console.log("Has obtenido un suficiente");
}else if(nota1 ===2){
    console.log("No has aprobado por poco");
}else if(nota1 ===1){
    console.log("No has estudiado nada, trabaja mucho mas para la proxima");
}else{
    console.log("Error, intrduce un valor entre 1 y 5")
}

//Sentencia Switch

let nota = 3;

switch (nota){
    case 5:
        console.log("Enhorabuena, has obtenido un sobresaliente ");
        break;

    case 4:
        console.log("Buen trabajo, pero podrias haberlo hecho mejor");
        break;

    case 3:
        console.log("Has obtenido un suficiente");
        break;

    case 2:
        console.log("No has estudiado nada, trabaja mucho mas para la proxima"); 
        break; 

    case 1:
        console.log("Error, intrduce un valor entre 1 y 5")
        break;
    default:
        console.log("Eroro")
        break;
}

//Comparaciones

//Igualdad
if(5 == 5){
    console.log("5 es igual a 5")
}

if(5 === 5){
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// Los 2 == Iguales comprarn solo el valor
if(a==b){
    console.log("a es igula a b - Débil ")
}

// Los 3 === Iguales comparan el valor y el tipo
if(a===b){
    console.log("a es igula a b - Fuerte ") 
}

let c = 4;
let d = "4";

if (c =! d){
    console.log("c es diferente de d - Debil")
}

if (c == d){
    console.log("c es diferente de d - Fuerte")
}