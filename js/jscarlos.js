
    const imagenes = document.querySelectorAll(".imagenResaltada");

    imagenes.forEach(imagen => {
        imagen.addEventListener("mouseenter", function () {
            this.classList.add("resaltar");
        });

        imagen.addEventListener("mouseleave", function () {
            this.classList.remove("resaltar");
        });
    });

    const images = document.querySelectorAll(".banner img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    document.getElementById("prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.getElementById("next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

