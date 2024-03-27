/* Ejercicio 12

Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada)
 */
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
const dupli = [
  'pate',
  'pate',
  'pate',
  'vinagre',
  'vinagre',
  'vinagre',
  'pescado'
]

function removeDuplicates(param) {
  let unico = []

  for (i = 0; i < param.length; i++) {
    if (unico.indexOf(param[i]) == -1) {
      unico.push(param[i])
    }
  }
  return unico
}
console.log(removeDuplicates(duplicates))
console.log(removeDuplicates(dupli))
