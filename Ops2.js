// Listas, array o arreglo

//Formas de definir un arreglo
const lista = [1, "Hola", true, undefined, null];
const lista2 = new Array(2,"hola", true, undefined,null);

//Defino la cantidad de esparcios de un arrelo
const lista3 = new Array(3)
lista3[0] = "soy el perimer lemento"
lista3[1] = "5"
lista3[2] = undefined

const lista4 = [lista,lista2,lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
    altura: 10,
    anchura:5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Luisa", "Pedro", "Raul"],
    tarjeta: {
        marca: "Sandisk",
        alamacenamiento: 128
    },
    "altura tarjeta": 4
}

movil.anio = 2019;
movil.pantalla = "TFT"
movil.marca = "Samsumg"
console.log(movil)

//fechas
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10)
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date (2020, 0, 15);
console.log(fecha_valores)

const dia = ahora.getDate();
const mes = ahora.getMonth()+1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo)

