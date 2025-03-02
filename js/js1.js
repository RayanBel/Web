// Array de destinos con detalles, sin imágenes
const destinos = [
    { nombre: "Ámsterdam", descripcion: "La ciudad de los canales y la cultura, famosa por sus museos.", precio: 1200, puntuacion: 4.7, visitas: 2500000 },
    { nombre: "Barcelona", descripcion: "Famosa por su arquitectura modernista y las playas mediterráneas.", precio: 1500, puntuacion: 4.8, visitas: 5000000 },
    { nombre: "Berlín", descripcion: "Una ciudad vibrante llena de historia, arte y vida nocturna.", precio: 900, puntuacion: 4.6, visitas: 2000000 },
    { nombre: "Madrid", descripcion: "La capital de España, famosa por su cultura, historia y gastronomía.", precio: 1300, puntuacion: 4.7, visitas: 3000000 },
    { nombre: "Mallorca", descripcion: "Un destino turístico que combina playas paradisíacas con montañas impresionantes.", precio: 1100, puntuacion: 4.9, visitas: 1500000 },
    { nombre: "Mykonos", descripcion: "Isla griega famosa por sus playas, vida nocturna y arquitectura pintoresca.", precio: 1400, puntuacion: 4.8, visitas: 1200000 },
    { nombre: "París", descripcion: "La ciudad del amor y la luz, famosa por la Torre Eiffel y los museos.", precio: 1700, puntuacion: 4.9, visitas: 8000000 },
    { nombre: "Roma", descripcion: "La cuna de la civilización occidental, con monumentos históricos como el Coliseo.", precio: 1100, puntuacion: 4.7, visitas: 3500000 }
];

// Variables de control del carrusel
let currentIndex = 0;

// Contenedor donde se insertan los destinos en el carrusel
const carousel = document.querySelector(".carousel");

// Función para mostrar el destino en el carrusel
function showCarouselItem() {
    // Limpiar el contenido previo
    carousel.innerHTML = '';

    // Crear el contenedor de la información del destino
    const info = document.createElement("div");
    info.classList.add("destino-info");
    info.innerHTML = `
        <h2>${destinos[currentIndex].nombre}</h2>
        <p>${destinos[currentIndex].descripcion}</p>
        <p><strong>Precio:</strong> $${destinos[currentIndex].precio} USD</p>
        <p><strong>Puntuación:</strong> ⭐ ${destinos[currentIndex].puntuacion}/5</p>
        <p><strong>Visitas anuales:</strong> ${destinos[currentIndex].visitas.toLocaleString()} personas</p>
    `;

    // Agregar la información al carrusel
    const carouselItem = document.createElement("div");
    carouselItem.appendChild(info);
    carousel.appendChild(carouselItem);
}

// Mostrar el primer destino
showCarouselItem();

// Función para mover al siguiente destino
document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % destinos.length;
    showCarouselItem();
});

// Función para mover al destino anterior
document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + destinos.length) % destinos.length;
    showCarouselItem();
});
