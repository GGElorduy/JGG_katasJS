/* Ejercicio 23

Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Terminator2', durationInMinutes: 99 }
]

let peliculaPequeña = []
let peliculaMediana = []
let peliculaGrande = []
for (const movie of movies) {
  if (movie.durationInMinutes < 100) {
    peliculaPequeña.push(movie)
  } else {
    if (movie.durationInMinutes < 200 && movie.durationInMinutes >= 100) {
      peliculaMediana.push(movie)
    } else {
      peliculaGrande.push(movie)
    }
  }
}
console.log('Peliculas Pequeñas')
console.log(peliculaPequeña)

console.log('Pelicula Media')

console.log(peliculaMediana)

console.log('Peliculas grandes')
console.log(peliculaGrande)
