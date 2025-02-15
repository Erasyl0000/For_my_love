let currentSlide = 1;
const totalSlides = 5;

function nextSlide() {
    if (currentSlide < totalSlides) {
        document.getElementById(`slide${currentSlide}`).classList.remove("active");
        currentSlide++;
        document.getElementById(`slide${currentSlide}`).classList.add("active");
    }
}

function playMusic() {
    document.getElementById("audio").play();
    nextSlide();
}