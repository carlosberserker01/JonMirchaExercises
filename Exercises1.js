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