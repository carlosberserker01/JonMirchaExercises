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
  if(num < 2) return 'El número no puede ser uno, cero ni negativo.'
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
const celsiusToFarenheitAndViceversa = (degrees = undefined, type = '') => {
  if(degrees === undefined) return 'No proporcionaste el número'
  if(!type) return 'No propocionaste la unidad'
  return (type === 'C')
    ? `${(degrees * 1.8) + 32}°`
    : (type === 'F')
      ? `${(degrees - 32) / 1.8}°`
      : 'La unidad es invalida'
}
console.log("EX.14:", celsiusToFarenheitAndViceversa(32, 'F'));

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binaryToDecimalAndViceversa = (num = undefined, base = undefined) => {
  if(!num) return 'No proporcionaste el numero a convertir'
  if(!base) return 'No proporcionaste la base'
  if(typeof num !== 'number') return 'El dato ingresado no es un numero'
  if(typeof base !== 'number') return 'El dato ingresado no es un numero'
  if(num < 0) return 'No se puede convertir un numero negativo'
  if(base !== 2 && base !== 10) return 'Solo se acepta base decimal (10) o binaria (2)'
  if(base === 2){
    let arrayNumbers = num.toString().split("")
    let max = arrayNumbers.length - 1
    for (let i = 0; i < arrayNumbers.length; i++) {
      arrayNumbers[i] = parseInt(arrayNumbers[i]) * (2**max)
      max--
    }
    return arrayNumbers.reduce((a, b) => a + b)
  } else if (base === 10){
    let arr = []
    while(num > 1){
      let residuo = num % 2
      arr.push(residuo)
      num = Math.floor(num / 2)
    }
    arr.push(num)
    return parseInt(arr.reverse().join(""))
  }
}
console.log("EX.15:", binaryToDecimalAndViceversa(1101010, 2));
console.log("EX.15:", binaryToDecimalAndViceversa(365, 10));

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const discount = (num = undefined, discount = undefined) => {
  if(num === undefined) return 'No se ingreso el valor'
  if(discount === undefined) return 'No se ingreso el descuento'
  return num - (num * (discount / 100))
}
console.log("EX.16:", discount(1000, 20));

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calculateYears = (date) => {
  if(!(date instanceof Date)) return console.log("El valor que insertaste no es una fecha.");
  let milisecondsBetweenTodayAndDate = Date.now() - date 
  let newDate = new Date(milisecondsBetweenTodayAndDate)
  return newDate.getFullYear() - 1970
}
console.log("EX.17:", calculateYears(new Date(1994,7,1)))

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const countVowelsAndConsonants = (str = "") => {
  if(!str) return console.log("No ingresaste una cadena de texto");
  if(typeof str !== 'string') return console.log("No es una cadena de texto");
  const vowels = 'aeiou'
  const consonants = 'bcdfghjklmnpqrstvwxyz'
  let vowelsCount = 0
  let consonantsCount = 0
  let newStr = str.toLowerCase()
  // for (let i = 0; i < newStr.length; i++) {
  //   if(vowels.split("").includes(newStr[i])){
  //     vowelsCount++
  //   } else if (consonants.split("").includes(newStr[i])){
  //     consonantsCount++
  //   } 
  // }
  // return `Vocales: ${vowelsCount}, Consonantes: ${consonantsCount}`
  for (const letter of newStr) {
    if(/[AEIOUaeiou]/.test(letter)){
      vowelsCount++
    }
    if(/[bcdfghjklmnpqrstvwxyz]/.test(letter)){
      consonantsCount++
    }
  }
  return `Vocales: ${vowelsCount}, Consonantes: ${consonantsCount}`
}
console.log("EX.18:", countVowelsAndConsonants("Hola mundo"));

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const validName = (name = "") => {
  if(!name) return console.log("No ingresaste una cadena de texto");
  if(typeof name !== 'string') return console.log("No es una cadena de texto");
  name = name.trim()
  let regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g
  return regExpName.test(name) ? `${name} es válido` : `${name} NO es válido`
}
console.log("EX.19:", validName("   Carlos"));

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validEmail = (email = "") => {
  if(!email) return console.log("No ingresaste una cadena de texto");
  if(typeof email !== 'string') return console.log("No es una cadena de texto");
  // let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let regExpEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
  return regExpEmail.test(email) ? `El correo ${email} es válido` : `El correo ${email} NO es válido`
}
console.log("EX.20:", validEmail('carlospokz_94@hotmail.com'));


// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayToSquare = (arr) => {
  let arraySquare = []
  arr.forEach(element => {
    arraySquare.push(element ** 2)
  });
  return arraySquare
}
console.log("EX.21:", arrayToSquare([1, 4, 5]));

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const maxAndMin = (arr) => {
  let min = 0, max = 0
  if(arr[0] < arr[1]){
    min = arr[0]
    max = arr[1]
  } else if (arr[0] > arr[1]){
    min = arr[1]
    max = arr[0]
  } else {
    min = arr[0]
    max = arr[1]
  }
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] <= min){
      min = arr[i]
    } else if (arr[i] >= max){
      max = arr[i]
    }
  }
  return `MAX: ${max}, MIN: ${min}`
}
console.log("EX.22:", maxAndMin([-15, -400, 599, 999, -60]));

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const evenAndOddArrays = (arr) => {
  let evenArray = []
  let oddArray = []
  arr.forEach(element => {
    if(element % 2 === 0){
      evenArray.push(element)
    } else {
      oddArray.push(element)
    }
  })
  return `Pares: ${evenArray}, Nones: ${oddArray}`
}
console.log("EX.23:", evenAndOddArrays(([1,2,3,4,5,6,7,8,9,0])));

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[i+1]){
      
    } else if (arr[i] > arr[i+1]){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
    }
  }
  return arr
}
console.log("EX.24:", sortArray([7, 5, 7, 8, 6]));
// console.log("EX.24:", sortArray([5, 7, 7, 8, 6]));

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const deleteDuplicatesFromArray = (arr) => {
  let newArr = []
  arr.forEach(element => {
    if(!newArr.includes(element)){
      newArr.push(element)
    }
  })
  return newArr
}
console.log("EX.25:", deleteDuplicatesFromArray(["x", 10, "x", 2, "10", 10, true, true]));

// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedio = (arr) => {
  return (arr.reduce((a, b) => a + b)) / arr.length
}
console.log("EX.26:", promedio([9,8,7,6,5,4,3,2,1,0]));