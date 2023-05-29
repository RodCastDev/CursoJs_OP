//--->Sesion 05 - Numbers

//Declaracion de variables numericas (enteros y con decimales)

let a = 5;
console.log(a);

let b = 0.1;
console.log(b); 

let c = 0.2;
console.log(b+c);

//Principales operaciones aritmeticas

let d = 3.5;
let f = 4.8;

//Suma (+)
console.log(d+f);

//Resta (-)
console.log(d-f);

//Multiplicacion (*)
console.log(d*f);

//Division
console.log(d/f);

//Representacion de los numeros en cadenas de texto
console.log(typeof(d));
let dStr = d.toString();

console.log(dStr);
console.log(typeof(dStr));

//Rendondeo de numero decimales
let r = 3.3;
let t = r * 3;
console.log(t);

//.toFixed()
console.log(t.toFixed(3));
console.log(typeof(t.toFixed(3)));

let e = 1839.12345532;
let w = 456543234567654;

console.log(e.toFixed(2));
console.log(w.toFixed(2));   

// .toPrecision(x) - Limit el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(w.toPrecision(7));


// Operador .valueof() - Obtener valores numericos a partir de literales
let s = 2;
let z = new Number(3);

console.log(s);
console.log(z);
console.log(s+z);

console.log(z.valueOf());

let str1 = new String("Hola soy un String");
console.log(str1);
console.log(str1.valueOf());

// NaN (Not a Number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador/divisor);
console.log(numerador/divisor_2);

// Como covertir los string a valores numericos con Number, parseInt y parseFloat
let numero = "5.89"
let num2 = 17.2;

console.log(typeof numero);
console.log(numero + num2); //Error de concepto 
console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));


// NumeroH hexadecimales (base 16)
let numHex = "0x3a5b7";
console.log

// Obtener los valores maximo y minimo en Javascript
let min_precision = Number.EPSILON;
let mun_valor_JS = Number.MIN_VALUE

//Ejercicios:

//- Una variable que contenga tu altura en centímetros (entero)
let altura = "160";
let intAltura = parseInt(altura)
console.log(intAltura)
console.log(typeof(intAltura))

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaf = "1.60";
let floatAltura = parseFloat(alturaf)
console.log(floatAltura)
console.log(typeof(floatAltura))

//- Una variable que contenga tu peso en kilogramos (número de coma flotante).
let peso1 = 54.23
let peso2 = parseFloat(peso1)
console.log(peso2)
console.log(typeof (peso2))

//- Una variable que contenga tu altura en metros redondeada hacia arriba

let altura1 = 1.63;
console.log(Math.ceil(altura1))

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesokg = 54.89
let peso = Math.floor(pesokg)
console.log(peso)

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es 
//igual al máximo valor que se puede obtener en Javascript

let maxObtener = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(maxObtener);





