// try {
// console.log("TRY: se agrega el codigo a evaluar");
// noExiste;
// //En cuanto detecta error ya no sigue con el codigo, te manda al catch
// console.log("Segundo mensaje en el try");
// } catch (error) {
// console.log("CATCH: Captura cualquier error surgido o lanzado en el try");
// console.log(error);
// } finally {
// console.log("FINALLY: Se ejecutara siempre al final de un bloque try-cacth");
// }

// try {
//   let numero = 'aq'
//   if (isNaN(numero)) {
//     throw new Error("No es un numero")
//   }
// } catch (error) {
//   console.log(`Se produjo el siguiente error: ${error}`);
// }

// -------------------------------------

// const numeros = [1,2,3,4,5,6,7,8,9,0]

// for (let i = 0; i < numeros.length; i++) {
//   if(i === 5){
//     // Si se cumple esto, salte
//     // Cuando entra al indice 5, que es donde esta el 6, ya no lo hace
//     break
//   }
//   console.log(numeros[i]);
// }

// for (let i = 0; i < numeros.length; i++) {
//   if(i === 5){
//     continue
//     // Si se cumple esto, no lo hagas
//     // Cuando entra al indice 5, que es donde esta el 6, no lo hace pero continua a la siguiente iteracion
//   }
//   console.log(numeros[i]);
// }

// const numeros = [1,2,3]

// const [one, two, three] = numeros
// console.log(typeof one);

// const sum = (...numbers) => {
//   let result = 0
//   numbers.forEach(number => {
//     result += number
//   })
//   return result
// }

// console.log(sum(5, 6, 9));

const animal = {
  nombre: 'Beyi',
  sonar(){
    console.log("Hago sonidos");
  }
}

const animal2 = {
  nombre: 'Lola Bunny',
  sonar(){
    console.log("Hago sonidos");
  }
}

console.log(animal);

// FUNCION CONSTRUCTORA
function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;

  // Metodos
  this.sonar = function(){
    console.log("Hago sonidos");
  }
  this.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

// FUNCION CONSTRUCTORA CON METODOS FUERA DEL OBJECTO
function Animal(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

Animal.prototype.sonar = function (){
  console.log("Hago sonido");
}

Animal.prototype.saludar = function (){
  console.log(`Hola me llamo ${this.nombre}`);
}

const snoopy = new Animal("Snoopy", "macho"),
      lolaBunny = new Animal("Lola Bunny", "hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar()
snoopy.saludar()

lolaBunny.sonar()
lolaBunny.saludar()