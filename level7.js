let round = 1;
let successes = 0;

let pulse = document.getElementById("pulse");
let slider = document.getElementById("slider");
let greenZone = document.getElementById("greenZone");
let roundInfo = document.getElementById("roundInfo");
let resultOverlay = document.getElementById("resultOverlay");
let resultText = document.getElementById("resultText");
let sceneImage = document.getElementById("sceneImage");

let pulseSize = 180;
let pulseDirection = 1;
let sliderPos = 0;
let sliderSpeed = 2;

let roundActive = true;
let animationId;

const overlay = document.getElementById("overlay");
const startBtn1 = document.getElementById("agreeButton");
const startBtn2 = document.getElementById("agreeButton1");
const overlay1 = document.getElementById("overlay1");
const overlay2 = document.getElementById("overlay2");
/* ---------------- SETUP ROUND ---------------- */


function setupRound() {

    roundActive = true;
    pulseSize = 180;
    pulseDirection = 1;
    sliderPos = 0;

    sceneImage.src = "distance.png";

    roundInfo.innerText = `Round ${round} / 3`;

    // Green zone shrinks each round
    let zoneWidth = 120 - (round - 1) * 30;
    greenZone.style.width = zoneWidth + "px";
    greenZone.style.left = (200 - zoneWidth / 2) + "px";

    // Slider speed increases
    sliderSpeed = 2 + round;
}

/* ---------------- MAIN ANIMATION ---------------- */

function animate() {

    // Heart pulse
    pulseSize += pulseDirection * (0.8 + round * 0.3);

    if (pulseSize >= 240) pulseDirection = -1;
    if (pulseSize <= 180) pulseDirection = 1;

    pulse.style.width = pulseSize + "px";
    pulse.style.height = pulseSize + "px";

    let heartNearPeak = pulseSize >= 235 && pulseSize <= 245;

    if(heartNearPeak) {
        pulse.style.borderColor = "limegreen"; 
        pulse.style.boxShadow = "0 0 20px limegreen"
    } else {
        pulse.style.borderBlockColor = "white";
        pulse.style.boxShadow = "none"
    }

    // Slider movement
    sliderPos += sliderSpeed;
    if (sliderPos > 380) sliderPos = 0;

    slider.style.left = sliderPos + "px";

    if (roundActive) {
        animationId = requestAnimationFrame(animate);
    }
}

/* ---------------- SPACE PRESS ---------------- */

document.addEventListener("keydown", (e) => {

    if (e.code === "Space" && roundActive) {

        roundActive = false;
        cancelAnimationFrame(animationId);

        // TRUE PEAK CHECK (tight range)
        let heartNearPeak = pulseSize >= 235 && pulseSize <= 245;

        let zoneStart = greenZone.offsetLeft;
        let zoneEnd = zoneStart + greenZone.offsetWidth;

        let sliderInside = sliderPos >= zoneStart && sliderPos <= zoneEnd;

        if (heartNearPeak && sliderInside) {
            successes++;
            cinematicSuccess();
        } else {
            cinematicFail();
        }
    }
});

/* ---------------- SUCCESS ---------------- */

function cinematicSuccess() {

    sceneImage.style.opacity = 0;

    setTimeout(() => {
        sceneImage.src = "kiss.png";
        sceneImage.style.opacity = 1;
    }, 300);

    pulse.style.borderColor = "gold";
    pulse.style.boxShadow = "0 0 30px gold";

    setTimeout(nextRound, 1500);
}

/* ---------------- FAIL ---------------- */

function cinematicFail() {

    sceneImage.style.opacity = 0;

    setTimeout(() => {
        sceneImage.src = "clash.png";
        sceneImage.style.opacity = 1;
    }, 300);

    pulse.style.borderColor = "red";
    pulse.style.boxShadow = "0 0 30px red";

    setTimeout(nextRound, 1500);
}

/* ---------------- NEXT ROUND ---------------- */

function nextRound() {

    if (round === 3) {
        endGame();
        return;
    }

    round++;
    pulse.style.borderColor = "pink";
    pulse.style.boxShadow = "none";

    setupRound();
    animate();
}

/* ---------------- END GAME ---------------- */

function endGame() {

    if (successes >= 2) {
       overlay1.style.visibility = "visible";
    } else {
        overlay2.style.visibility = "visible";
    }
}

/* ---------------- START ---------------- */

setupRound();
animate();

startBtn1.addEventListener('click', () => {
    audio.play();
    overlay.style.display = 'none';
  });
  
  startBtn2.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
  
  cntButton.addEventListener('click', () => {
    CNT.style.visibility = 'hidden';
  });
  
