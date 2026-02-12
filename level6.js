const doors = {
    top: document.querySelector(".top"),
    bottom: document.querySelector(".bottom"),
    left: document.querySelector(".left"),
    right: document.querySelector(".right")
};

const healthDisplay = document.getElementById("health");
const timeDisplay = document.getElementById("time");
const overlay1 = document.getElementById("overlay1");
const overlay2 = document.getElementById("overlay2");
const resultText = document.getElementById("resultText");

const overlay = document.getElementById("overlay");
const startBtn1 = document.getElementById("agreeButton");
const startBtn2 = document.getElementById("agreeButton1");

let health = 5;
let totalTime = 60;
let activeDoor = null;
let gameRunning = false;
let mainTimer;

/* ---------------- START GAME ONLY AFTER OVERLAY CLOSES ---------------- */

function startGame() {
    gameRunning = true;
    startWave();
    startTimer();
}

startBtn1.addEventListener("click", () => {
    overlay.style.display = "none";
    startGame();
});

startBtn2.addEventListener("click", () => {
    overlay.style.display = "none";
    startGame();
});

/* ---------------- DOOR CONTROL ---------------- */

document.addEventListener("keydown", (e) => {

    if (!gameRunning) return;

    const keyMap = {
        w: "top",
        s: "bottom",
        a: "left",
        d: "right"
    };

    const chosen = keyMap[e.key.toLowerCase()];
    if (!chosen) return;

    Object.values(doors).forEach(d => d.classList.remove("closed"));
    doors[chosen].classList.add("closed");
    activeDoor = chosen;
});

/* ---------------- WAVE SYSTEM ---------------- */

function startWave() {

    if (!gameRunning) return;

    const sides = ["top","bottom","left","right"];
    const attackSide = sides[Math.floor(Math.random() * 4)];

    doors[attackSide].classList.add("warning");

    setTimeout(() => {

        doors[attackSide].classList.remove("warning");

        let waveTime = 7;

        const interval = setInterval(() => {

            if (!gameRunning) {
                clearInterval(interval);
                return;
            }

            if (activeDoor !== attackSide) {
                health--;
                healthDisplay.textContent = health;

                if (health <= 0) {
                    showoverlay2();
                }
            }

            waveTime--;

            if (waveTime <= 0) {
                clearInterval(interval);
                startWave();
            }

        }, 1000);

    }, 2000); // 2 second gap
}

/* ---------------- TIMER ---------------- */

function startTimer() {
    mainTimer = setInterval(() => {

        totalTime--;
        timeDisplay.textContent = totalTime;

        if (totalTime <= 0) {
            showoverlay1();
        }

    }, 1000);
}

/* ---------------- END GAME ---------------- */

function showoverlay1() {
    gameRunning = false;
    clearInterval(mainTimer);
    overlay1.style.visibility = "visible";
}

/* ---------------- SHOW LOSE ---------------- */
function showoverlay2() {
    gameRunning = false;
    clearInterval(mainTimer);
    overlay2.style.visibility = "visible";
}
