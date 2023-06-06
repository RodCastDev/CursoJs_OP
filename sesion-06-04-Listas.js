//Como podemos comparar Listas
//.every()

const array = [4,6,7,8,3,2,1,-4,-7,-12,12,-40]

const resultado = array.every(valor => {
    if (valor > 0){
        return true
    }else{
        return false
    }
})
console.log(resultado)

//Forma corta .every()
const resultado1 = array.every(val => val > 0)
console.log(resultado)

///Comparacion de listas
const ar1 = [1,2,3,4,5]
const ar2 = [1,2,3,4,5]

console.log(ar1 === ar2)

const compararArray = (array_1, array_2) => {
    if (array_1.length !== array_2.length ) return false
    const res = array_1.every((valor, i )=> valor === array_2[i])
    return res
}

console.log(compararArray(ar1, ar2))
const ar3 = [1,2,3,9]

console.log(compararArray(ar1, ar3))