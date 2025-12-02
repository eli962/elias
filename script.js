function checkPassword() {
    const pw = document.getElementById("password").value;
    if (pw === "05122023") {  // <-- HIER EUER DATUM ÄNDERN!
        document.getElementById("password-screen").classList.add("hidden");
        document.getElementById("main").classList.remove("hidden");
        startSlideshow();
        loadQuiz();
    } else {
        alert("Falsches Datum, mein Schatz ❤️");
    }
}

// Slideshow
const images = [
    "bild1.jpg",
    "bild2.jpg",
    "bild3.jpg"
];

let current = 0;

function startSlideshow() {
    const slide = document.getElementById("slide");
    slide.src = images[current];

    setInterval(() => {
        current = (current + 1) % images.length;
        slide.src = images[current];
    }, 2500);
}

// Quiz
const questions = [
    "Weißt du noch, wann wir uns das erste Mal geküsst haben? ",
    "Lieben wir uns ganz dolle ? ",
    "Bin ich glücklich, weil es dich gibt? "
];

let qIndex = 0;

function loadQuiz() {
    document.getElementById("quiz-question").innerText = questions[qIndex];
}

function answer(choice) {
    qIndex++;

    if (qIndex < questions.length) {
        loadQuiz();
    } else {
        document.querySelector(".quiz").classList.add("hidden");
        document.getElementById("final-message").classList.remove("hidden");
    }
}