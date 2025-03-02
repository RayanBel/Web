// Cambiar modo oscuro / modo claro
const button = document.getElementById('cambiomodo');
const body = document.body;

if (localStorage.getItem("modoOscuro") === "true") {
    body.classList.add("Modooscuro");
}

button.addEventListener('click', () => {
    body.classList.toggle('Modooscuro');
    localStorage.setItem("modoOscuro", body.classList.contains("dark-mode"));

    
});

function mostrarBanner() {
    var banner = document.getElementById("banner");

    if (window.getComputedStyle(banner).display === "none") {
        banner.style.display = "block";
    } else {
        banner.style.display = "none";
    }
    

    
}