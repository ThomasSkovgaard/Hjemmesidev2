//TSJ Dette er et eksperiment hvor koden er rettet til fra W3shools da jeg havde rod med at kalde fotografierne fra mappen
// da jeg ikke synes det var det mest spændende javascript at give mig til blev det til en let løsning for at komme videre til en opgave jeg fandt bedre egnet til mit niveau men overvejede at kode det om fra starten for at det blev min egen kode.
//Basalt bladrer en slider i en række fotografier feks ved at de kan tildeles et nummer som en variabel kan blive identisk med hvis man har trykket x antal gange på højrepilen.
//Eller en løkken kan køres igennem så alle fotonumrene fremkommer der så går tilbage til startværdien når længden på et arrays af fotosne nås.

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {


    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}