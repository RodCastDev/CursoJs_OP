/* Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación) */

//lista de la compra
let compra = ["Champiñon", "Carne", "Pollo", "Pescado", "Pasta", "Vino"]

//compra.push("Aceite de Girasol") -- Agregamos aceite de producto "Aceite de Girasol" 
compra.splice(6,0,"Aceite de Girasol")
//Forma alternativa compra.unshift("Aceite de Girasol")

//eliminando "Aceite de Girasol"
compra.splice(6,1)
//listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);
console.log(compra)

//lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFav = [
    {titulo:"La vida es bella", director: "Roberto Benigni", fecha: "1997"},
    {titulo:"El perfume", director: "Tom Tykwer", fecha: "2006"},
    {titulo:"Iron Man", director: "Jon Favreau", fecha: "2008"},
    {titulo:"Spider-Man", director: "Sam Raimi", fecha: "2002"}
]
console.log(peliculasFav)

//películas posteriores al 1 de enero de 2010 (utilizando filter)
peliMayores2000 = peliculasFav.filter(peli => peli.fecha > 2005)
console.log(peliMayores2000)

//los títulos de la lista de películas original (utilizando map)
let directoresPeli = peliculasFav.map(function(pelicula) {
    return pelicula.director;
});

console.log("Directores de las películas:", directoresPeli);

//títulos de la lista de películas original (utilizando map)
let titulosPeli = peliculasFav.map(function(pelicula){
    return pelicula.titulo
});
console.log("Titulos de peliculas:", titulosPeli)

//directores y la lista de los títulos (utilizando concat)
let directoresYTitulos = directoresPeli.concat(titulosPeli);
console.log("Directores y títulos concatenados contat ",directoresYTitulos)

//lista de directores y la lista de los títulos (utilizando el factor de propag
let direcYdirectFactorPro = [...directoresPeli, ...titulosPeli]
console.log("Directores y títulos concatenados Factor de progacion", direcYdirectFactorPro)
