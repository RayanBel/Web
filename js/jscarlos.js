document.addEventListener("DOMContentLoaded", () => {
    const caja = document.getElementById("caja");

    caja.addEventListener("mouseover", () => {
        caja.style.boxShadow = "2em 2em 2em rgba(0, 0, 0, 0.5)";
    });

    caja.addEventListener("mouseout", () => {
        caja.style.boxShadow = "none";
    });
});
