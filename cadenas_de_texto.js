//Metodos de cadenas de texto 

let nombre = "Rodrigo Alfredo"
let apellido = "Castiblanco Pardo"

let estudiante = nombre + " " + apellido
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

numLetra = estudiante.length
console.log(numLetra)

primeLetra = estudiante.charAt(0)
console.log(primeLetra)

ultiLetra = estudiante.charAt(estudiante.length-1)
console.log(ultiLetra)

estudianteSinEspacio = estudiante.trim()
console.log(estudianteSinEspacio)

nombrePres = estudiante.includes("Rodrigo")
console.log(nombrePres)
