const fila = document.querySelector ('.contenedor-slider');
const peliculas = document.querySelector('.pelicula');

const flechaIzq = document.getElementById ('flechaI'); //modifique nombre 
const flechaDer = document.getElementById ('flechaD'); //modifique nombre

//  -------------Evento Listener para la flecha derecha.
flechaDer.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

//  -------------Evento Listener para la flecha izquierda.
flechaIzq.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth; });