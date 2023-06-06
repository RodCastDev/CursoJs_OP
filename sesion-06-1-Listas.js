//Iterar los valores de una lsita 
const array = ["hola",2,5,90,false,undefined]

//Forma atigua No es tan eficiente
for (let i = 0; i < array.length; i++){
    console.log(array[i])
} 

//Forma EC6 (mas eficiente) .foreEach()
let suma = 0
const arrayNum = [3,6,2,77,2,3,93,19]
arrayNum.forEach(valor=>{
    suma += valor;
    console.log(valor)
    
})
console.log(suma)

//Busqueda de un valor dentro de una lista .find()
//Quiero econtrar el elemento 90

const variable = array.find(valor => {
    if (valor === 90){
        return true
    }
})
console.log(variable)


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 65},
    {nombre: "Rodrigo", edad: 29},
    {nombre: "Amaio", edad: 3}
]

const objeto = listaObjetos.find( o => {
    if (o.nombre === "Rodrigo"){
        return true
    }
})

console.log(objeto)
console.log(objeto.edad)

//Froma mejorada metodo .find()
const objeto1 = listaObjetos.find(o => {
    return o.nombre === "Rodrigo"
})

console.log(objeto1.edad)

//Forma aun mejor metodo .find()
const objeto2 = listaObjetos.find(o => o.nombre === "Rodrigo")
console.log(objeto2.edad)

const {nombre} = listaObjetos.find(o => o.nombre === "Rodrigo")
console.log(nombre)

