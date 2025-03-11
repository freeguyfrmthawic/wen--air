// Scroll Fade-in & Fade-out Effect

document.addEventListener("scroll", function() {

    let sections = document.querySelectorAll(".section");

    let windowHeight = window.innerHeight;



    sections.forEach(section => {

        let position = section.getBoundingClientRect().top;

        let fadeOutPosition = section.getBoundingClientRect().bottom;



        if (position < windowHeight - 50) {

            section.style.opacity = "1";

        } else {

            section.style.opacity = "0";

        }

    });

});

