// .some()
const array = [3,7,2,4,7,9,42,35,7865,23,-2]
const res = array.some(valor => valor < -0)
console.log(res)

const existe = array.some(valor => valor === 8)
console.log(existe)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 65},
    {nombre: "Rodrigo", edad: 29},
    {nombre: "Amaio", edad: 3}
]

const existePersona = listaObjetos.some(persona => persona.nombre ==="Miguel")
console.log(existePersona)

//Cómo obtener una lista a partir de una objeto iterable
const str = "1234 Soy PEPE"
console.log(str[1])

const ar_str = Array.from(str)
console.log(ar_str)

