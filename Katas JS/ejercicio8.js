/* Ejercicio 8

Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:
 */
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
const malvados = ['Doom', 'Thanos', 'Joker', 'Elmalvadomrwonderful']
function findLongestWord(array) {
  let longuestword = array[0]
  for (let i = 0; i < array.length; i++) {
    if (longuestword.length < array[i].length) {
      longuestword = array[i]
    }
  }
  console.log(`La palabra más larga es:, ${longuestword}`)
}
findLongestWord(avengers)
findLongestWord(malvados)
