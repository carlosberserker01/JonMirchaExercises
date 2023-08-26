// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// Counts how many charaters are on a string
const countCharOnString = (str) => 
  typeof(str) == 'string' 
    ? str.length 
    : "Value is not a string :("
console.log(countCharOnString('Hello World!'))

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
//Cuts a string. Second param is for how many chars are showed
const cutString = (str, endCut) =>
  typeof(str) == 'string' && str.slice(0, endCut)
  //&& actua como ? de operador ternario pero sin else
console.log(cutString('Hola Mundo', 4))

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
//Convert each word of a sentence into an element of an array. The space on split means cut every time it founds a space
const strToArray = str => str.split(" ")
console.log(strToArray('How are you today?'))

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
//Repeat method multiplies the entire string
const repeatString = (str, times) => str.repeat(times)
console.log(repeatString('Hello World! ', 3))

const countCharacters = (str = '') => {
  if(!str){
    console.log("no ingresaste ninguna cadena");
  } else {
    console.log(`La cadena tiene ${str.length} caracteres.`);
  }
}
countCharacters("Hola mundo")

const cutString2 = (str = '', indexEnd = undefined) => str.slice(0, indexEnd)
console.log(cutString2('Hola mundo', 4));

const strToArray2 = (str = '', separator = undefined) => 
  !str
    ? console.log("No ingresaste ninguna cadena de texto")
    : (separator === undefined)
      ? console.log("No ingresaste el caracter separador")
      : str.split(separator)

console.log(strToArray2('Hola que tal', ' '));

const repeatString2 = (str = '', times = undefined) => {
  if(!str) return console.log("no ingresaste texto")
  if(times === undefined) return console.log("No has definido el numero de veces")
  if(times < 1) return console.log("Debes colocar un número mayor a cero");
  for (let i = 0; i < times; i++) {
    console.log(`${str}, ${i+1}`)
  }
}

console.log(repeatString2('Hola mundo', 5));

console.log("-------------------");

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const invertStr = (str = '') => 
  !str
    ? console.log("No ingresaste una cadena de texto")
    : console.log(str.split("").reverse().join(""));

console.log(invertStr('Hola mundo'))

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
const countRepeatedWords = (str = '', word = '') => {
  if(!str) return console.log("No ingresaste el texto")
  if(!word) return console.log("No ingresaste la palabra a evaluar")
  let strToArr = str.split(' ')
  let count = 0
  strToArr.forEach(element => element === word && count++)
  return count
}
console.log(countRepeatedWords('Hola mundo adios mundo', 'mundo'));

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const isPalindrome = (str = '') => {
  let originalString = str.toLocaleLowerCase().replaceAll(" ", "")
  let reverseredString = originalString.split("").reverse().join("")
  // for (let i = originalString.length - 1; i > -1; i--) {
  //   reverseredString += originalString[i]
  // }
  return originalString === reverseredString ? true : false
}
console.log(isPalindrome("Anita lava la tina"));

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const deletePattern = (str = '', pattern) => str.replaceAll(pattern, "")
  // let regExp = new RegExp(pattern, "gi")
  // if (regExp.test(str)) return str.replaceAll(pattern, "")
  // return str.replaceAll(pattern, "")


console.log(deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// const randomNumberBetween501And600 = () => Math.floor(Math.random() * (600 - 501) + 501)
const randomNumberBetween501And600 = () => Math.round(Math.random() * 100) + 500
console.log("EX.9:", randomNumberBetween501And600());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const isCapicua = (num = undefined) => {
  if(!num) return 'No has proporcionado el número'
  if(typeof num !== 'number') return 'Este no es un número'
  num = num.toString()
  const reverseredStrNumber = num.split("").reverse().join("")
  return num === reverseredStrNumber ? true : false
}
console.log("EX.10:", isCapicua(212.212));

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const calculateFactorial = (num = undefined) => {
  if(!num) return 'No has proporcionado el número'
  if(typeof num !== 'number') return 'El valor ingresado no es un número'
  if(num < 1) return 'No se puede calcular el factorial de 0 ni de números negativos'
  let result = num
  let count = num
  for (let i = 0; i < num -1; i++) {
    result *= (count - 1)
    count--
  }
  return result
}
console.log("EX.11:", calculateFactorial(5));

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const isPrime = (num = undefined) => {
  if(!num) return 'No proporcionaste el número'
  if(typeof num !== 'number') return 'El dato que proporcionaste no es número'
  let initialValue = 2
  while(num > initialValue){
    let res = num % initialValue
    if(res === 0){
      return false
    } else {
      initialValue++
    }
  } 
  return true
}
console.log("EX.12:", isPrime(85));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const isEvenOrOdd = (num = undefined) => {
  // if(!num) return 'No proporcionaste el número'
  if(num === undefined) return 'No proporcionaste el número'
  if(typeof num !== 'number') return 'El dato que proporcionaste no es número'
  return num % 2 === 0 ? 'Even' : 'Odd'
}
console.log("EX.13:", isEvenOrOdd(0));

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celsiusToFarenheitAndViceversa = (num = undefined, type = '') => {
  if(num === undefined) return 'No proporcionaste el número'
  if(!type) return 'No propocionaste la unidad'
  return (type === 'C')
    ? `${(num * 1.8) + 32}°`
    : (type === 'F')
      ? `${(num - 32) / 1.8}°`
      : 'La unidad es invalida'
}
console.log("EX.14:", celsiusToFarenheitAndViceversa(32, 'F'));