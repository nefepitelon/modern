function showSection(sectionId) {
    document.querySelectorAll('.product-section').forEach(function(section) {
        section.classList.remove('show');
    });
    document.getElementById(sectionId).classList.add('show');
}

document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const header = document.querySelector(".header-custom");

    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Hacia abajo
            header.classList.add("hide-header");
        } else {
            // Hacia arriba
            header.classList.remove("hide-header");
        }
        lastScrollTop = scrollTop;
    });
});

window.onload = function() {
    document.getElementById('autoclick-button').click();
}

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.getElementById("navbar-toggler");
    var navbarCollapse = document.getElementById("navbarNav");
    var navLinks = navbarCollapse.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarToggler.getAttribute("aria-expanded") === "true") {
                navbarToggler.click();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');

    // Intentar activar el sonido cuando el video esté en la vista
    const playVideoWithSound = () => {
        if (video.muted) {
            video.muted = false
        }
    };

    // Desactivar el silencio en el primer clic o desplazamiento del usuario
    document.addEventListener('click', playVideoWithSound, { once: true });
   
});

