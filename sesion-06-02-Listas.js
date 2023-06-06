//Trabajar con metodos mas avanzados
//.map() .filter() .reduce()

const array = ["San Sebastian", "Madrir", "Cajica", "Bogota", "Soacha"]

const val = array.forEach(v => {
    console.log(v)
})
console.log(val)

const newArray = array.map((valor , indice) => `${indice + 1 } - ${valor}`)
console.log(newArray)


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 65},
    {nombre: "Rodrigo", edad: 29},
    {nombre: "Amaio", edad: 3}
]

//Metodo .filter() 
// Forma Basico o menos eficiente del .filter() 
const peronasMayores = listaObjetos.filter(obj =>{
    if (obj.edad >30){
        return true
    }else{
        return false
    }
})

console.log(peronasMayores)

//Forma mas eficiente del .filter() 
const PersMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(PersMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Rodrigo")
console.log(nuevaLista)

//Metodo .reduce()
const valores = [3, 54, 23, 5, 90, 100]
const suma = valores.reduce((ant, cur, i, arrayOriginal)=>{
    console.log(ant)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return ant + cur
})
console.log(suma)