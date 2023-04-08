function countCharOnString(str){
  if(typeof(str) == 'string'){
    return str.length
  } else {
    return "Value is not a string :("
  }
}

// console.log(countCharOnString('Hello World!'))

function cutString(str, endCut){
  if(typeof(str) == 'string'){
    return str.slice(0, endCut)
  }
}

// console.log(cutString('Hola Mundo', 4))

function strToArray(str){
  return str.split(" ")
}

// console.log(strToArray('How are you today?'))