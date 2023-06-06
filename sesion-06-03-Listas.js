//Como ordenar arrays

//Metodos .sort()
const array=[2,4,6,8,3,5,7,0,4]
console.log(array)

console.log(array.sort())

//Al metodo .sort() se pasamos una funcion callback,
//Un callback que va a tene dos parametros a y b, donde a represetna el elemento antrior y b el elemento siguiente
//Esta funcion es necesario que retorne un numero (-1,0,1) si retornamos un numero negativo va a tener un indice menor que b
//Si le retornamos un 0 no hara cambios en el orden del array

//Ordenandolo de menor a mayor
array.sort((a,b)=>{
    if(a < b){
        return -1
    }else if (a > b){
        return +1
    }else { // a ===b
        return 0
    }
})
console.log(array)

//Ordenandolo de mayor a menor
array.sort((a,b)=>{
    if(a < b){
        return +1
    }else if (a > b){
        return -1
    }else { // a ===b
        return 0
    }
})
console.log(array)


//Ordenar únicamente arrays númericos
const arrayNumerico = [3,5,7,4,34,356,324,2,645,4]
//De mayor a menor
arrayNumerico.sort((a,b) => b - a)
console.log(arrayNumerico)
//De menor a mayor
arrayNumerico.sort((a,b) => a - b)
console.log(arrayNumerico)

// Intresante en arrays de objetos .sort()
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 65},
    {nombre: "Rodrigo", edad: 29},
    {nombre: "Amaio", edad: 3}
]
//Forma 1 larga
listaObjetos.sort((a,b)=>{
    if(a.edad < b.edad){
        return -1
    }else if (a.edad > b.edad ){
        return +1
    }else{
        return 0
    }
})
console.log(listaObjetos)

//Forma 2 corta
listaObjetos.sort((a,b)=> a.edad - b.edad)
console.log(listaObjetos)