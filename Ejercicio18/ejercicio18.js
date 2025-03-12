const images = document.querySelectorAll(".image-container img");
let currentIndex = 0;

document.getElementById("next").addEventListener("click", () => {
    images[currentIndex].classList.remove("visible");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("visible");
});

document.getElementById("prev").addEventListener("click", () => {
    images[currentIndex].classList.remove("visible");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add("visible");
})