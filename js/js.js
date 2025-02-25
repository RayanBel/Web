// Cambiar modo oscuro / modo claro
const button = document.getElementById('cambiomodo');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('Modooscuro');

    
});

function mostrarBanner() {
    var banner = document.getElementById("banner");

    if (window.getComputedStyle(banner).display === "none") {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
    

    
}