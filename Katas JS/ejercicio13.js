/* Ejercicio 13

Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(array, element) {
  let found = []
  if (array.indexOf(element) != -1) {
    found.push(true)
    found.push(array.indexOf(element))
    return found
  } else {
    found.push(false)
    return found
  }
}
console.log(finderName(nameFinder, 'Marc'))
console.log(finderName(nameFinder, 'Jesusito'))
console.log(finderName(nameFinder, 'Logan'))
