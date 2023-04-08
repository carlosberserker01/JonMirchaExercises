// Counts how many charaters are on a string
const countCharOnString = (str) => 
  typeof(str) == 'string' 
    ? str.length 
    : "Value is not a string :("
console.log(countCharOnString('Hello World!'))

//Cuts a string. Second param is for how many chars are showed
const cutString = (str, endCut) =>
  typeof(str) == 'string' && str.slice(0, endCut)
  //&& actua como ? de operador ternario pero sin else
console.log(cutString('Hola Mundo', 4))

//Convert each word of a sentence into an element of an array. The space on split means cut every time it founds a space
const strToArray = str => str.split(" ")
console.log(strToArray('How are you today?'))

//Repeat method multiplies the entire string
const repeatString = (str, times) => str.repeat(times)
console.log(repeatString('Hello World! ', 3))