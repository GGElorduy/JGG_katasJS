/* Ejercicio 14

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
const otro = [
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf',
  'gandalf'
]
function repeatCounter(array) {
  let contador = {} // se inicializa un objeto vacío llamado contador. Este objeto se usará para contar la cantidad de veces que aparece cada palabra en el array.

  for (let palabra of array) {
    //Se itera sobre cada palabra en el array counterWords usando un bucle for...of.

    if (contador[palabra]) {
      contador[palabra]++ // Si la palabra está dentro del objeto contador, le sumaremos uno  a su contador
    } else {
      contador[palabra] = 1 // Sino se añade la palabra con contador 1
    }
  }
  return contador
}

console.log(repeatCounter(counterWords))
console.log(repeatCounter(otro))
