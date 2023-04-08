const countCharOnString = (str) => 
  typeof(str) == 'string' 
    ? str.length 
    : "Value is not a string :("
console.log(countCharOnString('Hello World!'))


const cutString = (str, endCut) =>
  typeof(str) == 'string' && str.slice(0, endCut)
  //&& actua como ? de operador ternario pero sin else
console.log(cutString('Hola Mundo', 4))


const strToArray = str => str.split(" ")
console.log(strToArray('How are you today?'))


const repeatString = (str, times) => str.repeat(times)
console.log(repeatString('Hello World! ', 3))